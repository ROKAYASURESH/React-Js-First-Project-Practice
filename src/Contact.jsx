import React, { useState } from 'react'
import Form from './Form';

export default function Contact() {
// 
const [name,setName]=useState ('Suresh Rokaya');
 const btnsubmit=(q)=>{
   q.preventDefault();
   console.log("sjdsdffddf")
   setName("MoRokaya")
 }

 const inpubtn=(r)=>
 {
   setName(r.target.value)
 }
  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 ">
              <h2>Add Form</h2>
              <form action="" onSubmit={btnsubmit}>
                <input type="text" className='form-control' onChange={inpubtn}/>
                <hr />
                <button className='btn btn-danger' >Addform</button>
              </form>
          </div>

            <div className="col-lg-4 offset-lg-2">
              <h2>Form List {name}</h2>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </div>

        </div>
      </div>
      <Form/>
    </div>
  )
}
