import React,{useState} from 'react';
import Practicform from './Practicform';

export default function Page() {
    const[name, setName]=useState([
    {name:"Suresh"},
    {name:"Sagar"},
    {name:"Kafle"},
]);

const btnSubmit=(q)=>{
    q.preventDefault();
    const newName=[...name];
}
const inputBtn=(r)=>{
    console.log(r.target.value)
}
const removeName=(name)=>{
    const filterStd=name.filter((element)=>{
        return element.name !==name
    })
    setName(filterStd)
    console.log(name)
}

  return (
  <div className='container'>
      <div className="row">
          <div className="col-lg-4">
              <h3>Add Form</h3>
              <form onSubmit={btnSubmit}>
                  <input type="text" name="ww" className='form-control' onchnage={inputBtn} />
                  <hr />
                  <button className='btn btn-danger'>Add Form</button>
              </form>
          </div>

          <div className="col-lg-4 offset-lg-2">
              <h3>List Form</h3>
              <table className='table'>
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {name.map((n)=>(
                          <tr>
                              <td>{n.name}</td>
                              <td><span onClick={()=>removeName(n.name)}>Delete</span></td>
                              <td>h</td>
                          </tr>
                      )
                      )}
                  </tbody>
              </table>
          </div>
      </div>

<Practicform/>

    </div>
  )
}
