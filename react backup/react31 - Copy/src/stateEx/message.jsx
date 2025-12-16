import { useState } from "react";
let message=()=>{
    let [message,setMessage]=useState("hello");
    let gmHandler=()=>{
         setMessage("GM")
    }
    let gaHandler=()=>{
        setMessage("GA")
    }
    let gnHandler=()=>{
        setMessage("GN")
    }
    return <div>
        <h3>Message::{msg}</h3>
        <button> onClick ={gmHandler}GM</button>
        <button onClick={gaHandler}>GA</button>d
        <button onClick={gnHandler}>GN</button>d
    </div>

}
export default Message;