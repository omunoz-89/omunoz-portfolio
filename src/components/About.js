import React from 'react'
import me from '../media/me.png'

const About = () => {
    return (
        <div className='columns'>
        <div className='animate__animated animate__fadeIn column is-full is-mobile'>
                <img src={me} alt="me" className='animate__animated animate__fadeIn'/>
        <div className='layer column is-full'>
            <div className='welcome-text content is-medium column is-5'>
                <h3 id='intro'><strong>Hello! My name is Omar Muñoz</strong></h3> <p id='brand'>I am a full stack web developer and veteran with a passion for creating innovative, efficient solutions. With 5 years of military experience, I am resourceful, attentive to detail and can adapt to ambiguous situations. I have an endless hunger for self-improvement and challenge myself to write clean, precise code.</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default About
