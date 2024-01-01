import React from 'react'
import './Footer.css'
import People from './People'
const Footer = () => {
    return(
        <div className='footer' id='footer'>
            <div className='footer__left'>
                <img src="/iitmlogo.png" />
            </div>
            <div className='footer__center'>
                <h1>Contact Us</h1>
                <ul className='footer__lists'>
                    <li><a>Email : metsa_sec@smail.iitm.ac.in</a></li>
                    <li><People name='Devendra Narsale' position='UG MetSA Secretary' email='mm20b015@smail.iitm.ac.in' phone='+91 7744042986' /></li>
                    <li><People name='Subrata Sarkar' position='PG MetSA Secretary' email='mm21s003@smail.iitm.ac.in' phone='+91 8777693485' /></li>
                    <li><a href='https://www.linkedin.com'><img src="/linkedinlogo.png" /></a></li>
                    <li><a href='https://www.instagram.com/'><img src="/instalogo.png" /></a></li>
                </ul>
            </div>
            <div className='footer__right'>
                <img src="/metsalogo.jpg" />
            </div>
        </div>
    )

}
export default Footer;