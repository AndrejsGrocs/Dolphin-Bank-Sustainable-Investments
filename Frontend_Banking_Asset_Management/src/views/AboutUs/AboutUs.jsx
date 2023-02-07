import React from 'react'
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