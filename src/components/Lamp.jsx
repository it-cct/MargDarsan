import React from 'react'
import useProducts from '../hooks/useProducts'
import { Link } from 'react-router-dom'
const Lamp = () => {
  const proucts = useProducts()
    const lampItems = proucts.filter((items)=> items.type.includes("lamp"))
  return (
    <div className='host_layout_prouducts'>
    {
        lampItems.map(item=>{
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

export default Lamp