import React, { useState } from "react";

let Message = () => {
  const [msg, setMsg] = useState("hello"); // initialize state

  const gmhandler = () => {
    setMsg("good Morinig"); // update state
  };

  return (
    <div>
      <h3>Message Comp</h3>
      <h4>wish msg: {msg}</h4>
      <button onClick={gmhandler}>GM</button>
    </div>
  );
};

export default Message;
