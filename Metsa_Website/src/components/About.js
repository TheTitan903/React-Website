import React from 'react'
import './About.css'
const About = () => {
    return(
        <div className='about'>
            <h1 className='heading'>Metallurgical Students Association (MetSA)</h1>
            <div className='image'>
                <img src="/metsalogo.jpg" />
            </div>
            <h3 className='para'>
                MetSA is a student-led organization at IIT Madras, focused on promoting a strong sense of community 
                among MME students. The group organises various events, including Industrial Visit, Fresher’s Night, 
                Farewell, and Informal Games, to provide opportunities for students to excel academically and socially. Their 
                flagship event is the annual technical festival Amalgam, which is a platform for MME students to showcase their 
                talents and innovative ideas. MetSA is committed to promoting excellence and camaraderie within the department 
                and is an integral part of the overall MME student experience.
            </h3>
        </div>
    )
}
export default About;