import React from 'react'
import Counter from './Components/Counter/Counter';
import Message from './Components/Message/Message';


import '../node_modules/bootstrap/dist/css/bootstrap.css'
const App = () => {
  

    return <React.Fragment>
            <h3>App Comonent</h3>
            <hr/>
            <Counter/>
            <Message/>

            </React.Fragment>
}

export default App

