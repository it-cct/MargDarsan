import React from 'react'
import useProducts from '../hooks/useProducts'
import { Link } from 'react-router-dom'

const Chair = () => {
  const proucts = useProducts()
  const chairItems = proucts.filter((items)=> items.type.includes("chair"))
  return (
    <div className='host_layout_prouducts'>
    {
        chairItems.map(item=>{
            return(
                <Link to={`/${item.name}`} key={item.id}>
                  <div  className="inner-box-products" key={item.id}>
                <img src={item.img} alt="" />
                <div>
                  <p className='text'>{item.name}</p>
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


export default Chair