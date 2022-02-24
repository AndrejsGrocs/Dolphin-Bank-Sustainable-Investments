import React from 'react';

function AccountPage() {
  return <div className='account-page'>
  <div className='account-texts'>
            <h1 className='acc-header'>Dolphin Bank offers the convenience of mobile banking - without compromising on 
your values. </h1>
            <p className='account-page-text'>We use modern technologies that make your everyday life easier and contribute to the 
future of us all. <button
            className="acbutton1"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/signup";
            }}
          >
            Sign Up
          </button></p>
  
</div>
        </div>
}

export default AccountPage;
