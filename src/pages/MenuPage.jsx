import React from 'react'
import { Link } from 'react-router-dom'
import {MdClear} from 'react-icons/md'
const MenuPage = () => {
  return (
    <div className='mobile-nav-page'>
        <nav className='navigation'>
        <Link to={".."} className='backbutton'><MdClear></MdClear></Link>
            <ul>
                {/* <li><Link to="..">Back</Link></li> */}
                <li><Link to={"/category"}>Categories</Link></li>
                <li><Link to={"/sign-up"}>Sign-Up</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default MenuPage