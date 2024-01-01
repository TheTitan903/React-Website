import React from 'react'
import './Events.css'
const Events = () => {
    return(
        <div className='events' id='events'>
            <h1 className='heading'>Events</h1>
            <h3 className='para'>
                Metsa organises a host of events every year that cater to the curiosity and 
                professional development of our members. From engaging seminars featuring 
                industry experts to hands-on workshops that delve into the intricacies of 
                metallurgical processes, we provide a platform for students to expand their 
                knowledge and skills. Our networking events create opportunities for students to 
                connect with peers, professors, and professionals in the field.
                <br></br>
                Below is a the list of events we conduct annually : 
                    <li>Meta Day</li>
                    <li>Industrial Visit</li>
                    <li>Meta Premier League</li>
                    <li>Freshie Night</li>
            </h3>
        </div>
    )
}
export default Events;