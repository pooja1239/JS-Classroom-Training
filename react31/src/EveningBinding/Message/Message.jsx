import { useState } from "react";
let message=()=>{
    let [message,setMessage]=useState("hello");
    let gmHandler=()=>{
         setMessage("Good Moring")
    }
    let gaHandler=()=>{
        setMessage("Good After")
    }
    let gnHandler=()=>{
        setMessage("G Night")
    }
    return <div>
        <h3>Message::{msg}</h3>
        <button onClick ={gmHandler}>GM</button>
        <button onClick={gaHandler}>GA</button>
        <button onClick={gnHandler}>GN</button>
    </div>

}
export default Message;