import React from 'react'
import { useParams } from "react-router-dom";
import { Category } from './Shop';

export default function Details() {
  let { id } = useParams();
  const found = Category.find(element => element.id == id);
  return (<div className='container-fluid'>
    <h2>This is details Page </h2>

    <div className='row'>
      <div className='col-lg-5'>
        <img src={found.img} width="100%" />
      </div>
      <div className='col-lg-7'>
        <h2>{found.pname}</h2>
        <h2>{found.PPrice}</h2>
        <hr />
        <h4>{found.PDesc}</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-7">
        <p>{found.PDesc}</p>
        <p>{found.PDesc}</p>
      </div>
      <div className="col-lg-5">
        <img src={found.img} alt="" width="100%" />
      </div>
    </div>

  </div>


  )
}
