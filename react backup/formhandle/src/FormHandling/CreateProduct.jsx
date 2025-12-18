import React, { useState } from 'react'

const CreateProduct = () => {
  let [product,setProduct]  = useState({"pname":"","qty":0,"price":0,"info":""})
  let formHandler = (event)=>{
    console.log(event.target.value)
  }
  return <React.Fragment>
        <h3>Prdouct Component</h3>
        <pre>{JSON.stringify(product)}</pre>
        <form  >
            <label >Name:</label>
            <input type="text" onChange={formHandler} /> <br />
             <label >QTY:::::</label>
            <input type="number" onChange={formHandler} /> <br />
             <label >Price::::</label>
            <input type="number" onChange={formHandler} /> <br />
             <label > Info:::::</label>
            <input type="text" onChange={formHandler} /> <br />
            <input type="submit" value="Create Product" />
        </form>   
        </React.Fragment>
}

export default CreateProduct