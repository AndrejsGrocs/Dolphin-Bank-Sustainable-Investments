import React from 'react';
import maillogo from "../../assets/images/db-bank-Email.png"
import instalogo from "../../assets/images/db-bank-Insta.png"
import telegramlogo from "../../assets/images/db-bank-Telegram.png"
import linkedinlogo from "../../assets/images/db-bank-Linkedin.png"
import facebooklogo from "../../assets/images/db-bank-FB.png"

function SiteMapAndContacts() {
  return <div className='sitemap'>
             
             

             <div className='icon-list'>
               <a href="mailto:info@dolphinbank.com" ><img className='socmediaicon' src={maillogo} alt='social media icon'></img></a>
               <a href="https://www.instagram.com/" target="_blank"><img className= 'socmediaicon'   src={instalogo} alt='social media icon'></img></a>
               <a href="https://web.telegram.org/z/" target="_blank"><img className= 'socmediaicon'   src={telegramlogo} alt='social media icon'></img></a>
               <a href="https://www.linkedin.com/in/robin-skladny-647a1b229" target="_blank"><img className= 'socmediaicon'   src={linkedinlogo} alt='social media icon'></img></a>
               <a href="https://de-de.facebook.com/" target="_blank"><img className= 'socmediaicon'  src={facebooklogo} alt='social media icon'></img></a>
              
               
               
            </div>
            <div className='list-flex'>
            
            

            <ul className='link-list'>
            <p>Customer</p>
              <li className='li-list'>Support</li>
              <li>Forum</li>
              <li>Contact</li>
              <li>Invite Friends</li>
            </ul>

               <ul className='link-list'>
               <p>Partners</p>
              <li className='li-list'>Name with link</li>
              <li>Name with link</li>
              <li>Name with link</li>
              <li>Name with link</li>
            </ul>


             <ul className='link-list'>
               <p>Reports</p>
              <li className='li-list'>Report 2021</li>
              <li>Eco Projects Report</li>
              <li>Ocean Projects Report</li>
              
            </ul>


                <ul className='link-list'>
                <p>Contacts</p>
                
              <li className='li-list'>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
             
            </ul>
             
         
            </div>
    
          
            
        </div>
        
}

export default SiteMapAndContacts;