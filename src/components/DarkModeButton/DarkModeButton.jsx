import { React, useContext } from "react";
import DarkModeContext from "../../contexts/DarkmodeContext";

const DarkModeButton = () => {
  
  const darkmodeStatus = useContext(DarkModeContext);
  
  return (
    <div className="CountButtons">
      <label className="switch">
        <input type="checkbox" onClick={darkmodeStatus.toggle}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
  
};

export default DarkModeButton;
