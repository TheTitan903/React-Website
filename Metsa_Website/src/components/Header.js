import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="/iitmlogo.png" />
                <h1>Indian Institute of Technology Madras</h1>
            </div>
            <div className='header__center'>
                <ul className='header__lists'>
                    <li><a href='/home#'>About Us</a></li>
                    <li><a href='/home#amal'>Amalgam</a></li>
                    <li><a href='/home#events'>Events</a></li>
                    <li><a href='initiatives'>Initiatives</a></li>
                    <li><a href='/home#footer'>Contact Us</a></li>
                </ul>

            </div>
            <div className='header__right'>
                <button>Sign Up</button>
                <button>Sign In</button>
            </div>

        </div>
    )
}
export default Header;