import React from 'react'

const Home = () => {
    return (
        <div className='animate__animated animate__fadeIn'>
        <div className='layer'>
            <div className='welcome-text content is-medium'>
                <h3><strong>Hello! The name is Omar Muñoz</strong></h3> <p>I am a full stack web developer and veteran with a passion for creating innovative, efficient solutions. With 5 years of military experience, I am resourceful, attentive to detail and can adapt to ambiguous situations. I have an endless hunger for self-improvement and challenge myself to write clean, precise code.</p>
            </div>
        </div>
        <img src="https://res.cloudinary.com/sei412-om/image/upload/v1625716944/B25C4C88-4251-4317-9FD2-D65E5DE838B4_e5xrdz.jpg" alt="me" className='animate__animated animate__fadeIn'/>
        </div>
    )
}

export default Home