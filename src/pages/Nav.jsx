import { Link } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import { MdShoppingCart,MdSegment } from 'react-icons/md'
import '../style/pages/Nav.sass'
import { useScrollEvent } from '../hooks/useScrollEvent'
import React from 'react'
import ShoopingCart from './shoopingcart/ShoopingCart'

const Nav = () => {
// fetching logo from the useProduct hook
const item = useProducts();
const [logo] =  item.filter((elem)=>elem.type==="logo")


const scrollPosition = Math.ceil(useScrollEvent());

const [showcart, setShowcart] = React.useState(false);
return (
    <div className={ scrollPosition >=5? 'fixedNav':'nav-page'} >
        <nav className='navigation'>
            <div className='logo'>
                <Link to='/'><img src={logo.img} alt="LogoIMG" /></Link>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><Link to={"category"}>Categories</Link></li>
                    <li><Link to={"sign-up"}>Sign-Up</Link></li>
                    <Link onClick={()=>{setShowcart(!showcart)}}><span>1</span><MdShoppingCart></MdShoppingCart></Link>
                </ul>
            </div>
            <div className='mobile-size'>
                <Link onClick={()=>{setShowcart(!showcart)}}><MdShoppingCart className='i'></MdShoppingCart></Link>
                <Link to="menu"><MdSegment className='i'></MdSegment></Link>

            </div>
        </nav>
        {
        showcart?
        <section className='cart'>
            <div className='cartBox'>
                <div className="cartBoxHeader">
                    <h1>Your Item is listed Here</h1>
                    <h1 onClick={()=>{setShowcart(!showcart)}}>X</h1>
                </div>
                <div className='cartBoxItems'>
                    <ShoopingCart></ShoopingCart>
                </div>
                <div className="fotter">
                    <div className='total'>
                        <p>Sub Total</p>
                        <p>0$</p>
                    </div>
                    <div className='checkout'>
                        <button>Check Out</button>
                    </div>
                </div> 
            </div>
        </section>
        : null
        }
        
    </div>
  )
}

export default Nav