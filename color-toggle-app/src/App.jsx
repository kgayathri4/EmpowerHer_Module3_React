import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  const handleToggle = () => {
    setIsRed(!isRed);
  };

  const divStyle = {
    width: "200px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: isRed ? "red" : "blue",
    marginTop: "10px",
    borderRadius: "5px",
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Color</button>
      <div style={divStyle}>
        {isRed ? "Red" : "Blue"}
      </div>
    </div>
  );
}

export default ColorToggle;
