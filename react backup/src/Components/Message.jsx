import React, { useState } from "react";

let Message = () => {
  const [msg, setMsg] = useState("hello"); 

  const gmhandler = () => {
    setMsg("good Morinig");
  };

  return (
    <div>
      <h3>Message Component</h3>
      <h4>wish msg: {msg}</h4>
      <button onClick={gmhandler}>GM</button>
    </div>
  );
};

export default Message; 

