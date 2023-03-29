import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <div className="container-fluid ">
            <div className="row mt-2">
                <div className="col-lg-3 text-center">
                    <img src="https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/online-shop-logo.png" alt="logo" />
                </div>
                <div className="col-lg-6">
                    <img src="https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/bosa-shop-banner-730-90.jpg" alt="" />
                    </div>
                <div className="col-lg-3 text-center">
                <button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>
                </div>
            </div>
     </div>
<div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link >
                                </li>
                                <li className="nav-item">
                                <Link  className="nav-link" to="/Shop">Shop</Link >
                                </li>
                                <li className="nav-item">
                                <Link  className="nav-link" to="/Blog">Blog</Link >
                                </li>
                                <li className="nav-item">
                                <Link  className="nav-link" to="/About">About</Link >
                                </li>                                                             
                             
                                


                               <li className="nav-item dropdown">
                                <Link  className="nav-link dropdown-toggle" to="page" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                                </Link >
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link  className="dropdown-item" to="#">Action</Link ></li>
                                    <li><Link  className="dropdown-item" to="#">Another action</Link ></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link  className="dropdown-item" to="#">Something else here</Link ></li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <Link  className="nav-link" to="/Contact">Contact</Link >
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
