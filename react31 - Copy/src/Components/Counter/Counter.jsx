import React from 'react';

import './Counter.css';

let mystyles={
    color:"yellow"
}
const Counter = () => {
 return (
 <div>
        <h3>Message Component</h3>
        <hr/>
        <h3 style={{color:"red"}}>Good Morning - inline</h3>
        <h3 style={mystyles}>Good Afternoon - internal</h3>
        <h3 className='box'>Good Evening - Extenal & comp</h3>
        <button className='btn btn-danger'>Test</button>
        </div>
 );
}

export default Counter;