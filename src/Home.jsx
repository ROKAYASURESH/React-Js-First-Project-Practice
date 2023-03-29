import React from 'react'

const Category=[
  {
    id: 1,
    name:"Suresh"
  },
  {
    id:2,
    name:"Rokaya"
  },
  {
    id: 1,
    name:"Suresh"
  },
  {
    id:2,
    name:"Rokaya"
  }
]

const demend=[
  {
    id:1,
    name:"Aliquam id quam..",
    Price:"$44.00",
    image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc-320x320.png"
  },
  {
    id:2 ,
    name:"Beanie with logo",
    Price:"$14.000",
    image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc1-1-320x320.png"
  }
  ,
  {
    id:3 ,
    name:"Beanie with logo",
    Price:"$14.000",
    image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc22-1-320x320.png"
  }
  ,
  {
    id:4 ,
    name:"Beanie with logo",
    Price:"$14.000",
    image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc4-320x320.png"
  }
  ,
  {
    id:2 ,
    name:"Beanie with logo",
    Price:"$14.000",
    image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc5-320x320.png"
  }
  ,
  {
    id:2 ,
    name:"Beanie with logo",
    Price:"$14.000",
    image1:"https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/proc6-320x320.png"

  }
  

]
export default function Home() {
  return (
    <div>
      {/* <div className="container-fluid"> 
      <div className="row">
        <div className="col-lg-8"> 
        <img src="https://icms-image.slatic.net/images/ims-web/f6eb7338-b39b-4fc1-945d-f121c05afcb6.jpg_1200x1200.jpg" alt="" width="100%" height="100%"/>
        
        </div>
        <div className="col-lg-4">
              <img src="https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product8-300x300.jpg" alt="" width="100%" />
              <div className="col-lg-12">
            <img src="https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/shop-product8-300x300.jpg" alt=""width="100%" />
          </div>
        </div>
 
        </div>
        </div> */}
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-lg-3 m-0 ">
            <div className="row">
              <div className="col-lg-8 m-0">
                  <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main5.png" alt="" />
              </div>
              <div className="col-lg-8">
                <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main8.png" alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 m-0">
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main-12.png" className="d-block w-100" alt="..." width="100%" />
    </div>
    <div className="carousel-item">
      <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main-11.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

          </div>

          <div className="col-lg-3 ">
            <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/main7.png" alt="" />
          </div>
        </div>
      </div>


          <section>
            <h2>On Demend</h2>
            <hr />
           <div className="container-fluid">
             <div className="row">
               
                  {demend.map((tt)=>(
                    <div className="col-lg-2 ">
                      <img src={tt.image1} alt="" width="100%" />
                    </div>
                  ))}
               </div>
             </div>
          
          </section>

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mt-5">
          <ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  {Category.map((i)=>(
        <li class="list-group-item py-4">< img src="data:image/png;base64,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" alt="" width="20px" />{i.name} </li>
      ))}
 
</ul>
          </div>
          <div className="col-lg-8"><img src="https://demo.bosathemes.com/bosa/online-shop/wp-content/uploads/sites/58/2022/04/online-shop-logo.png" alt=""  width="100%"/></div>
        </div>
      </div> */}
    </div>
  )
}
