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
        case 'Lamp':
          return <Lamp />;
        case 'Furnitures':
          return <Furnitures />;
        case 'Tech':
          return <Tech />;
        case 'Kitchen':
          return <Kitchen />;
        case 'Chair':
          return <Chair />;
        case 'SkinCare':
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
            <li><NavLink to={'?type=Lamp'} className={()=>typefilter === "Lamp" ? "active": null}>Lamps</NavLink></li>
            <li><NavLink to={'?type=Furnitures'} className={()=>typefilter=== "Furnitures" ? "active": null}>Furniture</NavLink></li>
            <li><NavLink to={'?type=Tech'} className={()=>typefilter === "Tech"? "active": null}>Electronics</NavLink></li>
            <li><NavLink to={'?type=Kitchen'} className={()=>typefilter === "Kitchen" ? "active": null}>Kitchen</NavLink></li>
            <li><NavLink to={'?type=Chair'} className={()=>typefilter === "Chair" ? "active": null}>Chair</NavLink></li>
            <li><NavLink to={'?type=SkinCare'} className={()=>typefilter=== "SkinCare" ?"active": null}>Skin Care</NavLink></li>
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

