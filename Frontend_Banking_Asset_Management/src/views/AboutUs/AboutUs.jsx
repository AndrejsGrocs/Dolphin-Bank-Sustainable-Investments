import React from 'react'
import cardRobin from '../../assets/images/db-bank-AbouUs-Robin.png'
import cardAndrejs from '../../assets/images/db-bank-AbouUs-Andrej.png'
import aboutuslinkedin from "../../assets/images/db-bank-AbouUs-Icons-LinkedIn.png"
import aboutusmail from "../../assets/images/db-bank-AbouUs-Icons-Email.png"
import aboutusgit from "../../assets/images/db-bank-AbouUs-Icons-GitHub.png"
import aboutusimage from "../../assets/images/db-bank-AbouUs-Image-Background.png";
import AndrejsContactCard from '../../components/AndrejsContactCard/AndrejsContactCard'
import RobinContactCard from '../../components/RobinContactCard/RobinContactCard'



export default function AboutUs() {
    return (
        
        <div className='aboutUsContainer'>
        
              <img className="image-aboutus-page" src={aboutusimage} />
              <AndrejsContactCard/>
              <RobinContactCard/>
              


          
        </div>
    )
}