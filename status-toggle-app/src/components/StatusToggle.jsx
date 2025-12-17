import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function StatusToggle() {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(!status);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Status</button>
      <div>
        {status ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  );
}

export default StatusToggle;
