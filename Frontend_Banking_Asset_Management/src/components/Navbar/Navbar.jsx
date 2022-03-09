import React, {useContext} from 'react' 
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import logoimg from '../../assets/images/db-bank-logo-navbar150-1.png'




export default function Navbar() {
    const {loggedIn} = useContext(AppContext)
    
    return (
        <nav className='nav'>
        
        <div className='bank-logo-section'>
           <a className='bank-logo' href="/" >{<img className='nav-logo-img' src={logoimg} alt='dolphin bank logo'></img>}</a>   
        </div>
        
       <div></div>

        <ul className='nav-list'>
        {loggedIn?( 
            <>
            <li><Link to='/' activeclassname='active' className='nav-link'> Bank</Link></li>
            <li><Link to='/mission' activeclassname='active' className='nav-link'> Mission</Link></li>
               <li><Link to='/account' activeclassname='active' className='nav-link'> Account</Link></li>
               <li><Link to='/loan' activeclassname='active' className='nav-link'>Loan</Link></li>
            <li><Link to='/investment' activeclassname='active' className='nav-link'>Investment</Link></li>
            
         
            <li><Link to='/aboutus' activeclassname='active' className='nav-link'>About Us </Link></li> 
            <li><Link to='/profile' activeclassname='active' className='nav-link'> Profile</Link></li>
            {/* <li><Link to='/transfer' activeclassname='active' className='nav-link'> Transfer Money</Link></li> */}
        
          
               </>
        ):(
            <>
        <li><Link to='/'  activeclassname='active' className='nav-link'> Bank</Link></li>
        <li><Link to='/mission'  activeclassname='active' className='nav-link'> Mission</Link></li>
        <li><Link to='/account'  activeclassname='active' className='nav-link'> Account</Link></li>
        <li><Link to='/loan'  activeclassname='active' className='nav-link'>Loan</Link></li>
        <li><Link to='/investment'  activeclassname='active' className='nav-link'>Investment</Link></li>
        <li><Link to='/aboutus'  activeclassname='active' className='nav-link'>About Us </Link></li> 
        
        
       
        </>

        )}
        
       
        </ul>
        {!loggedIn?(
<div className='nav-buttons-section'> 

 <label className='hamburger' for="toggle">&#9776;</label>
        <input type='checkbox' className='toggle' id='toggle'></input>
        <li><button className='button-nav-login' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/login';
      }}> Login</button></li>
        <li><button className='button-nav-signup' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/signup';
      }}>Sign Up</button></li>


    
        </div>


        ):(
            <div className='nav-buttons-section'>
            <button className='button-nav-logout' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/logout';
      }}>Logout</button>

            </div>
        )}
          

       
           
        </nav>
    )
}
