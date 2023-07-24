import React from 'react'
import useProducts from '../hooks/useProducts'
import { Link } from 'react-router-dom'

const SkinCare = () => {
    const proucts = useProducts()
    const skinCareItems = proucts.filter((items)=> items.type.includes("skinCare"))
    return (
      <div className='host_layout_prouducts'>
      {
          skinCareItems.map(item=>{
              return(
                  <Link to={':id'} key={item.id}>
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
    )
} 

export default SkinCare