import React from 'react'
import BlogHome from './BlogHome'
import BlogDetail from './BlogDetail'
import { Routes, Route, Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>

    <div className="container">
      <div className="row text-center">
        <h2>Simple Blog</h2>
        <p>Online Blog By Suresh</p>
      </div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/BlogDetail">Blog</Link>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>

    </div>
  )
}
