import React from 'react'
import { NavLink,Outlet, useSearchParams } from 'react-router-dom'
import '../style/components/HostLayout.sass'
import Tech from './Tech'
import Furnitures from './Furnitures'
import Lamp from './Lamp'
import Chair from './Chair'
import Kitchen from './Kitchen'
import SkinCare from './SkinCare'
import All from './All'


const HostLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typefilter = searchParams.get("type");

    // Render the appropriate component based on the selected category
    const renderComponent = () => {
      switch (typefilter) {
        case 'lamp':
          return <Lamp />;
        case 'furnitures':
          return <Furnitures />;
        case 'tech':
          return <Tech />;
        case 'kitchen':
          return <Kitchen />;
        case 'chair':
          return <Chair />;
        case 'skinCare':
          return <SkinCare />;
        default:
          return <All />;
      }
    };
  const active={
    fontWeight:'800'
  }
  return (
    <div className='categoryNav'>
        <nav >
          <ul>
            <li><NavLink className={()=>typefilter=== null ? "active": null} end to={'.'}>All</NavLink></li>
            <li><NavLink to={'?type=lamp'} className={()=>typefilter === "lamp" ? "active": null}>Lamps</NavLink></li>
            <li><NavLink to={'?type=furnitures'} className={()=>typefilter=== "furnitures" ? "active": null}>Furniture</NavLink></li>
            <li><NavLink to={'?type=tech'} className={()=>typefilter === "tech"? "active": null}>Electronics</NavLink></li>
            <li><NavLink to={'?type=kitchen'} className={()=>typefilter === "kitchen" ? "active": null}>Kitchen</NavLink></li>
            <li><NavLink to={'?type=chair'} className={()=>typefilter === "chair" ? "active": null}>Chair</NavLink></li>
            <li><NavLink to={'?type=skinCare'} className={()=>typefilter=== "skinCare" ?"active": null}>Skin Care</NavLink></li>
          </ul>
        </nav>    

        <div className='outlet'>
            {
              renderComponent()
            }
        </div>
    </div>
  )
}

export default HostLayout

