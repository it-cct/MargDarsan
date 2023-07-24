import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../style/pages/Home.sass";
import useProducts from "../hooks/useProducts";
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
const Home = () => {
  // const id = useParams();
  const item = useProducts();

  // landing page items
  const product = item.filter(item=> item.type.includes("landingPage"));

  //proudpage items.
  const proudItems = item.filter(item => item.type.includes("ProudContents"));

  // horizontal scrolling
    // left
    const ref = useRef()
    const scroll= (scrollOffset)=>{
      ref.current.scrollLeft +=scrollOffset;
    }

  return (
    <>
    <div className="home">
      <section className="home-page">
          {
            //rendering items in landing page
            product.map(item=>(
              <div key={item.id} className={`item${item.id+1}`}>
                <Link to={`category/${item.type[1]}`}>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                </Link>
              </div>
          
            
            ))
          }
      </section>
    </div>

    {/* Proud ProudctSection */}
    <div className='proudSection'>
      <h1>Products we are proud of</h1>
      <section className='prouducts'>
          {
            // rendering items in proud section of landing page
            proudItems.map(i=>{
              if(i.id === 10){
                return(
                  <div className="inner-box-products"key={i.id}>
                    <Link to={`/${i.id}`} >
                    <div className="imgException">
                      <img className="goldLamp" src={i.img} alt="goldlamp"></img>

                    </div>
                    <div className="goldContent">
                      <p className="goldtext">Gold Is The New Good</p>
                      <button className="goldbutton">VIEW MORE</button>
                    </div>
                    </Link>
                  </div>
                  
                )
              }
              else{
                return(
                  <Link to={`${i.id}`}>
                      <div  className="inner-box-products" key={i.id}>
                    <img src={i.img} alt="" />
                    <div>
                      <p>{i.name}</p>
                      <p className="price">{i.price}$</p>
                    </div>
                  </div>
                  </Link>
                  
              );
              }
              
            })

          }
      </section>
      {/* for banner */}
      <div className="banner">
          <div className="banner-contant">
            <h1>Creative harmonious living</h1>
            <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
           <Link><button>Shope Now</button></Link> 
          </div>
          <div className="bannerImg">
            <img src="img/banner/banner1.jpg" alt="" />
          </div>
      </div>  
    </div>

    {/* Trending section */}
          <section className="trending">
            <div className="trending-top-section">
              <div className="heading-h1">
                <h1>Trending Now</h1>
              </div>
              <div className="sliding-buttons">
                <div onClick={()=> scroll(-240)}><AiOutlineArrowLeft size={20} color="white"> </AiOutlineArrowLeft></div>
                <div onClick={()=> scroll(240)}><AiOutlineArrowRight size={20} color="white"> </AiOutlineArrowRight></div>
              </div>
            </div>
            <div className="trending-products" ref={ref}>
                {proudItems.map(item=>{
                  return(
                      <Link to={`${item.id}`}>
                        <div  className="inner-box-products" key={item.id}>
                          <img src={item.img} alt="" />
                          <div>
                            <p>{item.name}</p>
                            <p className="price">{item.price}$</p>
                          </div>
                        </div>
                      </Link>
                   
                  )
                })
                  }
            </div>
          </section>


      {/* for Second banner */}
      <div className="outerBanner">
        <div className="banner">
          <div className="bannerImg">
            <img src="img/banner/banner2.jpg" alt="" />
          </div>
          <div className="banner-contant">
            <h1>Comfortable & Elegante Living</h1>
            <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
            <Link><button>Shope Now</button></Link>
          </div>
        </div>  
      </div>
      
          

    </>
  );
};

export default Home;
