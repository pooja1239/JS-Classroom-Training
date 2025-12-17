import { useState } from "react";

let Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let emailHandler = (event) => {
    setEmail(event.target.value);
  };

  let passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  let submitHandler = (event) => {
    event.preventDefault(); 
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <h2>Login Component</h2>
      <form onSubmit={submitHandler}>
        <label>Email Id:</label>
        <input type="text" onChange={emailHandler} />
        <br /><br />

        <label>Password:</label>
        <input type="password" onChange={passwordHandler} />
        <br /><br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
