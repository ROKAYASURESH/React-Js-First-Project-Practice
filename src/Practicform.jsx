import React,{useEffect, useState} from 'react'
import axios from 'axios'


export default function Practicform() {
    const [suresh, setSuresh]=useState([])

    const [inputs, setInputs]=useState([])

    //link ko data tanako lagi
    const axios = require('axios').default;

    useEffect(() => {
        // Update the document title using the browser API
        document.title=`suresh`
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


// delete
const deleteUser=(y)=>{
    axios.delete(`https://nanepal.org/api/users/${y}delete`)
    .then(function (response)
    {
        console.log(response.data)
        setSuresh();
    })
}

const btnS=(e)=>{
    e.preventDefault();
    console.log(inputs);
    axios.post('https://nanepal.org/api/users/save' ,inputs)
    .then(function (response)
    {
        console.log(response.data)
    })

}
const handleChnage=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    console.Log(name)
    setInputs(values=>({...values,[name]: value}))
    
  }


  return (
    <div>
    <table className="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">email</th>
        <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {suresh.map((t)=>(
            <tr>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.email}</td>
                <td><button onClick={()=>deleteUser(t.id)}>Delete</button></td>
            </tr>
        ))}
   
    </tbody>
    </table>

    <form onSubmit={btnS}>
            <input type="text" name="name" onChange={handleChnage} />
            <input type="text" name="email" onChange={handleChnage} />
            <input type="text" name="mobile" onChange={handleChnage} />
            <button>Send</button>
    </form>
    </div>
  )
}
