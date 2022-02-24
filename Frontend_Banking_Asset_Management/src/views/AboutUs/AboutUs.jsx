import React from 'react'
import cardRobin from '../../assets/images/db-bank-AbouUs-Robin.png'
import cardAndrejs from '../../assets/images/db-bank-AbouUs-Andrej.png'
import aboutuslinkedin from "../../assets/images/db-bank-AbouUs-Icons-LinkedIn.png"
import aboutusmail from "../../assets/images/db-bank-AbouUs-Icons-Email.png"
import aboutusgit from "../../assets/images/db-bank-AbouUs-Icons-GitHub.png"


export default function AboutUs() {
    return (
        <div className='aboutUsContainer'>

            <div className='cardContainer1'>
                <div className='cardRobin'>
                    <img className='image-robin' src={cardRobin} alt='contact person image'/> 

                    <div className='aboutus-card-texts-links'>
                    <h2 className='about-us-card-header-robin'>Robin Skladny</h2>
                    <p className='about-us-card-text'>Backend/Frontend</p>
                    <div className='socialmedia-icons-block'>
                    
               <a href="https://www.linkedin.com/in/robin-skladny-647a1b229/" target="_blank"><img className= 'aboutus-socmediaicon'   src={aboutuslinkedin} alt='social media icon'></img></a>
                <a href="https://github.com/Robynio" target="_blank"><img className= 'aboutus-socmediaicon'   src={aboutusgit} alt='social media icon'></img></a>
                 <a href="mailto:robin_skladny@gmx.de" ><img className='aboutus-socmediaicon' src={aboutusmail} alt='social media icon'></img></a>
                 </div>
                   </div>




                </div>
                     <div>
                    

                     </div>


                <div className='cardAndrejs'>

                     <img className='image-andrejs' src={cardAndrejs} alt='contact person image'/> 
                     <div className='aboutus-card-texts-links'>
                         <h2 className='about-us-card-header-andrejs'>Andrejs Grocs</h2>
                         <p className='about-us-card-text'>Frontend/Backend</p>
                                <div className='socialmedia-icons-block'>
                                <a href="https://www.linkedin.com/in/andrejs-grocs-andrey-detochkin-ab2106141" target="_blank"><img className= 'aboutus-socmediaicon'   src={aboutuslinkedin} alt='social media icon'></img></a>
                <a href="https://github.com/AndrejsGrocs" target="_blank"><img className= 'aboutus-socmediaicon'   src={aboutusgit} alt='social media icon'></img></a>
                 <a href="mailto:andrey.detochkin@gmail.com" ><img className='aboutus-socmediaicon' src={aboutusmail} alt='social media icon'></img></a>
                 </div>
                 </div>
                </div>




            </div>
        </div>
    )
}