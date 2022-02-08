import { React, useContext } from "react";
import DarkModeContext from "contexts/DarkmodeContext";

const DarkModeButton = () => {
  
  const darkmodeStatus = useContext(DarkModeContext);
  
  return (
    <div className="CountButtons">
      <button onClick={darkmodeStatus.toggle}>switcheroo</button>
    </div>
  );
  
};

export default DarkModeButton;