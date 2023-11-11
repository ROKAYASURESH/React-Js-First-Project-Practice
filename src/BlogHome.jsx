import React from 'react'

export default function BlogHome() {
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
                  <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/BlogDetail">Blog</a>
                </li>

              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        
        <div className="container my-3">
          <div className="row">
            <div className="col-lg-3 m-2 ">
              <div className="row">
                <div className="col-lg-8 m-0">
                  <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main5.png" alt="" />
                </div>
                <div className="col-lg-8">
                  <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main8.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 m-5">
            <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main-12.png" className="d-block w-100" alt="..." width="100%" height={"100%"}/>


            </div>

            <div className="col-lg-3 ">
              <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main7.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
