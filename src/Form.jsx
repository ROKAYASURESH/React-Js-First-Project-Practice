import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

export default function Form() {
    const [suresh, setSuresh]=useState([])

    //data lai input garunako lagi
    const [inputs, setInputs]=useState([])

    //link ko data tanako lagi
    const axios = require('axios').default;

    useEffect(() => {
        // Update the document title using the browser API
        axios.get('https://nanepal.org/api/')
  .then(function (response) {
    // handle success
    console.log(response);
    setSuresh(response.data)
    console.log(suresh)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
      },[]);


// Delete button click garda delete huna ko lagi
const deleteUser=(y)=>{
  axios.delete(`https://nanepal.org/api/users/${y}delete`)
  .then(function(response)
  {
    console.log(response.data)
    setSuresh();
  })
}
// Data lai type gare ra submit hune garnu pary 
const handleSubmit=(e)=>{
  e.preventDefault();
  console.Log(inputs);
  axios.post('https://nanepal.org/api/users/save',inputs)
  .then(function (response)
  {
    console.log(response.data)
  
  })
}
   
//value add garnko lagi
const handleChnage=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  console.Log(name)
  setInputs(values=>({...values,[name]:value}))
  
}

  return (
    <div>

    <div className="container ">
        <h1>Contact Us</h1>
    <div className="row border">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" onChange={handleChnage}/>
          <input type="text" name="email" onChange={handleChnage} />
          <input type="text" name="phone" onChange={handleChnage} />

          <button>Submit</button>
        </form>
            <div className="col-lg-4 offset-lg-2">
                <h2>user list</h2>
                <table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">username</th>
      <th></th>
    
    </tr>
  </thead>
  <tbody>
  {suresh.map((r)=>(
    <tr>
    <th scope="row " className='table-primary'>{r.id}</th>
    <td className='table-secondary'>{r.name}</td>
      <td className='table-warning'>{r.email}</td>
      <td className='table-secondary'>{r.phone}</td>
      <td className='table-warning'>{r.username}</td>
      <td className='table-secondary'> <button onClick={()=>deleteUser(r.id)}>Delete</button> </td>
      
    </tr>
    ))}

  </tbody>
</table>

            </div>
        </div>
    </div>

    </div>
  )
}
