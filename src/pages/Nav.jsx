import { Link } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import { MdShoppingCart,MdSegment } from 'react-icons/md'
import '../style/pages/Nav.sass'
import { useScrollEvent } from '../hooks/useScrollEvent'
const Nav = () => {
// fetching logo from the useProduct hook
const item = useProducts();
const [logo] =  item.filter((elem)=>elem.type==="logo")


const scrollPosition = Math.ceil(useScrollEvent());
  return (
    <div className={ scrollPosition >=5? 'fixedNav':'nav-page'} >
        <nav className='navigation'>
            <div className='logo'>
                <Link to='/'><img src={logo.img} alt="LogoIMG" /></Link>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><Link to={"category"}>Categories</Link></li>
                    <li><Link to={"/sign-up"}>Sign-Up</Link></li>
                    <Link><MdShoppingCart></MdShoppingCart></Link>
                </ul>
            </div>
            <div className='mobile-size'>
                <Link><MdShoppingCart className='i'></MdShoppingCart></Link>
                <Link><MdSegment className='i'></MdSegment></Link>

            </div>
        </nav>
    </div>
  )
}

export default Nav