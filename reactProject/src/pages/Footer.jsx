import React from 'react'
import "../style/pages/Footer.sass"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className='footer'>
        <div className='upperpart'>
            <h1>Newsletter</h1>
            <div className='textDiv'>
                <input type="text" placeholder='email123@gmail.com' />
                <button>Subscribe</button>
            </div>
        </div>
        <div className='lowerpart'>
            <div className='links'>
                <Link>About</Link>
                <Link>Store Location</Link>
                <Link>FAQs</Link>
                <Link>News</Link>
                <Link>Careers</Link>
                <Link>Contact us</Link>
            </div>
            <div>
                <p>Built with Love</p>
            </div>
        </div>
    </section>
  )
}

export default Footer