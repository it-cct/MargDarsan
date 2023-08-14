import React from 'react'
import useProducts from '../hooks/useProducts'
import { Link } from 'react-router-dom'

const Tech = () => {
  const proucts = useProducts()
  const techItems = proucts.filter((items)=> items.type.includes("electronic"))
  return (
    <div  className='host_layout_prouducts'>
    {
        techItems.map(item=>{
            return(
                <Link to={`/${item.name}`} key={item.id}>
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

export default Tech