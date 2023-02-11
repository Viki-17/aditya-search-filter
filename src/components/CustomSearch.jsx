import React from "react";
import USERS from "../constants/user.json";
import DisplayLink from "./DisplayLink";
import "./CustomSearch.css";

export const CustomSearch = () => {
  const [searchText, setSearchText] = React.useState("");
  const [employee, setEmployee] = React.useState(undefined);

  const isEqualIgnoreCase = (str1, str2) => {
    return str1.toUpperCase() === str2.toUpperCase();
  };

  const handleSearchEmp = (e) => {
    if (e.keyCode && e.keyCode !== 13) return;
    const searchResult = USERS.find((user) =>
      isEqualIgnoreCase(user.id, searchText)
    );
    setEmployee(searchResult || null);
  };

  return (
    <div className="search">
      <h2>Enter Your Employee ID</h2>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleSearchEmp}
      />
      <button className="button" onClick={handleSearchEmp}>
        Search
      </button>
      {employee && <DisplayLink link={employee} />}
      {employee === null && <p>Enter Valid Employee ID</p>}
    </div>
  );
};
