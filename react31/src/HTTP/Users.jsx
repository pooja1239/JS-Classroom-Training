import React from 'react'
import Axios from 'axios'

const Users = () => {

  let getUserHandler = () => {
    console.log("Test Case 123")
    
    Axios.get('https://alicealdaine.medium.com/top-10-api-testing-tools-rest-soap-services-5395cb03cfa9')
      .then((resp) => { console.log(resp.data) })
      .catch((err) => { console.log(err.name) })
  } 

  return (
    <div>
      <h3>User Component</h3>
      <button onClick={getUserHandler}>Get Users</button>
    </div>
  )
}

export default Users
