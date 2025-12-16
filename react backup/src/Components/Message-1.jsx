import React from "react";
class Message extends React.Component{
    state={
        msg:"hello"
    }
    gmhandler=()=>{
        this.setState({msg:"GM"})
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <h4>Message Components</h4>
            <button onClick={this.gmhandler}>GM</button>
        </div>
    }
}
export default Message;
    