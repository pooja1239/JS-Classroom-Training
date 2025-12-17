import { useState } from "react"

let Login =()=>{
    let [email,setEmail]  = useState("")
    let [password,setPassword]  = useState("")
    let emailHandler=()=>{
        alert("Test Case 123")
    }
    let passwordHandler=()=>{
        alert("Test Case 1234")
    }

    return <div><h2>Login Component</h2>
                <form>
                    <label >Email Id:</label>
                    <input type="text" onChange={emailHandler} /> <br /> <br/>

                    <label >Password</label>
                    <input type="text" onChange={passwordHandler}/> <br /> <br/>
                    
                    <input type="submit" />
                </form>
            </div>
}
export default Login