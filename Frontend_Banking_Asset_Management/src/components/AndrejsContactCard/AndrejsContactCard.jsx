import React from 'react'
import cardAndrejs1 from '../../assets/images/db-bank-AbouUs-Andrej.png'
import aboutuslinkedin from "../../assets/images/db-bank-AbouUs-Icons-LinkedIn.png"
import aboutusmail from "../../assets/images/db-bank-AbouUs-Icons-Email.png"
import aboutusgit from "../../assets/images/db-bank-AbouUs-Icons-GitHub.png"
import aboutusimage from "../../assets/images/db-bank-AbouUs-Image-Background.png";

function AndrejsContactCard() {
  return (
    <div className='cardAndrejs'>

                     <img className='image-andrejs' src={cardAndrejs1} alt='contact person image'/> 
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
   
  )
}

export default AndrejsContactCard