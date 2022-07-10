import React from 'react'
import {SiBitcoinsv} from 'react-icons/si'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <SiBitcoinsv className='icon' />
                <h1> Coin <span className='purple'>Finder</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
