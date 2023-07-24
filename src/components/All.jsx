import React from 'react'
import useProducts from '../hooks/useProducts';
import '../style/pages/All.sass'
import { Link } from 'react-router-dom';
const All = () => {
  const  items = useProducts();
  const products = items.filter(i => i.id > 5);
  return (
    <div className='host_all_layout_prouducts'>
        {products.map((i) => {
          if (i.id === 10 ) {
            return (
              <div className="inner-box-products" key={i.id} id='i10'>
                <Link>
                <div className="imgException">
                  <img className="goldLamp" src={i.img} alt="goldlamp"></img>
                </div>
                <div className="goldContent">
                  <p className="goldtext">Gold Is The New Good</p>
                  <button className="goldbutton">VIEW MORE</button>
                </div>
                </Link>
                
              </div>
            );
          }
          else if (i.id === 15 ){
            return (
                <div className="inner-box-products" key={i.id} id='i15'>
                  <Link>
                  <div className="imgException">
                    <img className="goldLamp" src={i.img} alt="goldlamp"></img>
                  </div>
                  <div className="goldContent">
                    <p className="goldtext">Traditional Boomerang</p>
                    <button className="goldbutton">VIEW MORE</button>
                  </div>
                  </Link>
                  
                </div>
              );
          }
          else if (i.id=== 17 ){
            return (
                <div className="inner-box-products" key={i.id} id='i17'>
                  <Link>
                  <div className="imgException">
                    <img className="goldLamp" src={i.img} alt="goldlamp"></img>
                  </div>
                  <div className="goldContent">
                    <p className="goldtext">Simple is Beautiful</p>
                    <button className="goldbutton">VIEW MORE</button>
                  </div>
                  </Link>
                  
                </div>
              );
          }
          else if (i.id === 23){
            return (
                <div className="inner-box-products" key={i.id} id='i23'>
                  <Link>  
                  <div className="imgException">
                    <img className="goldLamp" src={i.img} alt="goldlamp"></img>
                  </div>
                  <div className="goldContent">
                    <p className="goldtext">Wall Lights</p>
                    <button className="goldbutton">VIEW MORE</button>
                  </div>
                  </Link>
                  
                </div>
              );
          }
          else if (i.id === 26 ){
            return (
                <div className="inner-box-products" key={i.id} id='i26'>
                  <Link>
                  <div className="imgException">
                    <img className="goldLamp" src={i.img} alt="goldlamp"></img>
                  </div>
                  <div className="goldContent">
                    <p className="goldtext">Best Selling Chair</p>
                    <button className="goldbutton">VIEW MORE</button>
                  </div>
                  </Link>
                  
                </div>
              );
          }
          else {
            return (
              <Link>
                <div className="inner-box-products" key={i.id}>
                <img src={i.img} alt="" />
                <div>
                  <p className="name">{i.name}</p>
                  <p className="price">{i.price}$</p>
                </div>
              </div>
              </Link>
              
            );
          }
        })}
    </div>
  )
}

export default All