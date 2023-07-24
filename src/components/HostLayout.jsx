import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import '../style/components/HostLayout.sass'
const HostLayout = () => {
  const active={
    fontWeight:'800'
  }
  return (
    <div className='categoryNav'>
        <nav >
          <ul>
            <li><NavLink style={({isActive})=>isActive? active: null} end to={'.'}>All</NavLink></li>
            <li><NavLink to={'lamp'} style={({isActive})=>isActive? active: null}>Lamps</NavLink></li>
            <li><NavLink to={'furnitures'} style={({isActive})=>isActive? active: null}>Furniture</NavLink></li>
            <li><NavLink to={'tech'} style={({isActive})=>isActive? active: null}>Electronics</NavLink></li>
            <li><NavLink to={'kitchen'} style={({isActive})=>isActive? active: null}>Kitchen</NavLink></li>
            <li><NavLink to={'chair'} style={({isActive})=>isActive? active: null}>Chair</NavLink></li>
            <li><NavLink to={'skinCare'} style={({isActive})=>isActive? active: null}>Skin Care</NavLink></li>
          </ul>
        </nav>    

        <div className='outlet'>
            <Outlet/>
        </div>
    </div>
  )
}

export default HostLayout