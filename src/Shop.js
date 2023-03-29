import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
const Category=[
  {
  id:1,
  pname:"Black Coat",
  PPrice:"$35.00",
  PDesc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
  img:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product1-300x300.jpg"
  },
  {
    id:2,
    pname:"Black Dress",
    PPrice:"$23.00",
    PDesc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
    img:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product2-300x300.jpg"
    },
    {
      id:3,
      pname:"Check Shirt",
      PPrice:"$70.00",
      PDesc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
      img:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product3-300x300.jpg"
      },
      {
        id:4,
        pname:"Black Dress",
        PPrice:"$45.00",
        PDesc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
        img:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product4-300x300.jpg"
        },
        {
          id:5,
          pname:"white Skirt",
          PPrice:"$60.00",
          PDesc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
          img:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product5-300x300.jpg"
          },
          {
            id:6,
            pname:"Black Coat",
            PPrice:"22",
            PDesc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
            img:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product6-300x300.jpg"
            },
            {
              id:7,
              pname:"Black Coat",
              PPrice:"22",
              PDesc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
              img:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product7-300x300.jpg"
              },
              {
                id:8,
                pname:"Black Coat",
                PPrice:"22",
                PDesc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
                img:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product8-300x300.jpg"
                },
                {
                  id:9,
                  pname:"Black Coat",
                  PPrice:"22",
                  PDesc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
                  img:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product9-300x300.jpg"
                  },
      
      
]

const Category2=[
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product1-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product2-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product3-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product4-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product5-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product8-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product6-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product9-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
]

const Category3=[
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product1-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product2-300x300.jpg",
    name:"Black coat",
    Price:"22"
  },
  {
    id:1,
    image:"https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product3-300x300.jpg",
    name:"Black coat",
    Price:"22"
  }
]

export default function Shop() {
  return (
      <div className='container-fluid mt-1  abc'> 
        <h2>Product list</h2>
      <div className='row'>
      <div className='col-lg-8 m-1 border '>
        <div className='row'>
              {Category.map((i)=>(
              <div className='col-lg-4 m-auto width="100%" text-center'>
                <img src={i.img} width="100%"/>
                <Link to={`/details/${i.id}`}>
                <h3>Product: {i.pname} </h3>
                </Link>
                <h2>Price: {i.PPrice}</h2>
              </div>
              ))}
        </div>    
      </div>
      
      <div className='col-lg-3 mx-5'>
        <h1>Product</h1>
        <div class="row"> 
          <div className='col-lg-4'>
              {Category2.map((y)=>(
              <div class="col-lg-6 bg-light m-2">
                <img src={y.image} width="100%"/>
                <hr></hr></div>
                ))}
        </div>
     
			 	<div class="col-lg-8 bg-light"> 
         {Category2.map((xt)=>(
            <div class="col-lg-12 bg-light">
             {xt.name}<br></br>{xt.Price}<hr></hr>
            </div>
              ))}
         </div>
       </div>
       <hr></hr>
       <h1 className='text-center'>__Gallery__</h1>
       <div className='row'>
         {Category2.map((xx)=>(
 <div className='col-lg-3'><img src={xx.image} width="100%"/></div>
         ))}
        
       </div>

       </div>
   </div>
  <br/>
  <br/>
  <br/>
  <div className='row bg-primary' >
    <hr/> 
    <div className='col-lg-3'>
      <img src='https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/online-shop-logo.png' className='m-4'/>
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
        {Category3.map((rty)=>(
          <div className='col-lg-8'><img src={rty.image} width="100%"/></div>
        ))}
      </div>
      <div className='col-lg-8 border-primary'>
        {Category3.map((ee)=>(
          <div className='col-lg-12'>{ee.name}<br/>{ee.Price} </div>
        ))}
        dfghf
      </div>
      </div>
    </div>
    <div className='col-lg-3'><h3>I Useful Links</h3></div>
  </div>

</div>
 
  )
}
