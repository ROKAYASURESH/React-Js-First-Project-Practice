import React from 'react'
const Category3 = [
  {
    id: 1,
    image: "https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product1-300x300.jpg",
    name: "Black coat",
    Price: "22"
  },
  {
    id: 1,
    image: "https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product2-300x300.jpg",
    name: "Black coat",
    Price: "22"
  },
  {
    id: 1,
    image: "https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product3-300x300.jpg",
    name: "Black coat",
    Price: "22"
  }
]


export default function Footer() {
  return (
    <div className='container-fluid bg-dark text-white text-center'>
          <div className='row bg-primary' >
        <hr />
        <div className='col-lg-3'>
          <img src='https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/online-shop-logo.png' className='m-4' />
          <p>Dolor sit amet, cons aring elit sed dllao the eimod tempor inciunt ullaco laboris aliquip alora. illo eiusmod id imperdiet sunt fusce incidunt excepteur nobis nisl aliquid ipsa veritatis.</p>
        </div>
        <div className='col-lg-3'><h3>I Latest Posts</h3>
          <ul>
            <li>Product list </li>
            <li>Service</li>
          </ul>
        </div>
        <div className='col-lg-3'><h3>I Recent Products</h3>
          <div className='row border'>
            <div className='col-lg-4 border'>
              {Category3.map((rty) => (
                <div className='col-lg-8'><img src={rty.image} width="100%" /></div>
              ))}
            </div>
            <div className='col-lg-8 border-primary'>
              {Category3.map((ee) => (
                <div className='col-lg-12'>{ee.name}<br />{ee.Price} </div>
              ))}
              dfghf
            </div>
          </div>
        </div>
        <div className='col-lg-3'><h3>I Useful Links</h3></div>
      </div>
        <h2>©Suresh Rokaya </h2>


    </div>
    )
}
