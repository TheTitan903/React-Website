import React from 'react'
import './Amalgam.css'
const Amalgam = () => {
    return(
        <div className='amalgam'>
            <h1 className='heading' id='amal'>Amalgam</h1>
            <div className='image'>
                <img src="/amalgamlogo.png" />
            </div>
            <h3 className='para'>
            "Amalgam" is an annual technical event hosted by the Department of Metallurgical and 
            Materials Engineering at IIT Madras and is commonly known as the "Material Festival". 
            This event is a platform for students to showcase their technical prowess and creativity 
            through various competitions, workshops, and lectures, as well as to celebrate our culture
            and diversity through cultural events. This year, we are proud to announce the inclusion of
            a national symposium as part of Amalgam. The symposium will bring together several eminent 
            speakers from IISc, various IITs, industries and government organizations.
            <br></br>
            To know more about Amalgam refer to the official page here : <a href='https://www.amalgam.org.in/'>Amalgam</a>
            </h3>
        </div>
    )
}
export default Amalgam;