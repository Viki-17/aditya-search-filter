import Select from "react-dropdown-select";
import React, { useState } from "react";
import options from "../constants/user.json";

export const CustomSearch = ({ onChangeCity }) => {
  const [IsEmpId, setIsEmpId] = useState();
  const [IsEmpDetails, setIsEmpDetails] = useState();

  const SearchEmp = () => {
    options.map((e) => {
      if (IsEmpId.toUpperCase() == e.id) {
        setIsEmpDetails(e);
      }
    });
  };

  //   const handleChange = (value) => {
  //     onChangeCity(value);
  //   };

  return (
    <div>
      <input onChange={(e) => setIsEmpId(e.target.value)} />
      <button onClick={SearchEmp}>Submit</button>
      <section>
        <div className="container">
          <div className="cards">
            <div className="card">
              <h1>{IsEmpDetails?.name}</h1>

              <h3>{IsEmpDetails?.branch}</h3>
              <a href={IsEmpDetails?.link} className="btn" target="blank">
                {"Click To Join"}
              </a>
            </div>
          </div>

          {/* <h2>{link?.branch}</h2> */}
        </div>
      </section>
      {/* <Select
        multi={false}
        style={{
          zIndex: 10,
          backgroundColor: "white",
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `285px`,
          height: `36px`,
          padding: `0 12px`,
          borderRadius: `20px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          //   position: "absolute",
          marginLeft: "20px",
          marginTop: "20px",
        }}
        options={options}
        onChange={handleChange}
        valueField="id"
        labelField="id"
        placeholder="Enter Employee Code"
        clearOnSelect={true}
        clearOnBlur={true}
        dropdownHandle={false}
      /> */}
    </div>
  );
};
