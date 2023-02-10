import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { CustomSearch } from "./components/CustomSearch";
import DisplayLink from "./components/DisplayLink";

function App() {
  const [link, setLink] = useState("");

  const handleChange = (newChange) => {
    console.log(newChange);

    setLink(newChange.at(0));
  };
  return (
    <>
      <div className="cards">
        {/* <CustomSearch onChangeCity={handleChange} /> */}
        <CustomSearch />
      </div>
      {link && <DisplayLink link={link} />}
    </>
  );
}

export default App;
