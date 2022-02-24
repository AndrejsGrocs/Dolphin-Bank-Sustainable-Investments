import React from 'react'
import { useContext, useState } from 'react'
import {AppContext} from '../../App'
import { useNavigate } from 'react-router-dom'
import axios from "../../util/axiosInstance"; 
import FormWrapper from '../../components/Common/Wrapper/wrapper'
import ErrorMessage from '../../components/Common/ErrorMessage/errorMessage'

export default function Login() {
      const navigate = useNavigate()
      const {handleLogin} = useContext(AppContext)
      const [isError, setIsError] = useState(false)
      const [errorMessage, setErrorMessage] = useState('')

      const handleSubmit = async(event)=>{
          event.preventDefault()
          const formData = new FormData(event.target)
          const data = {
              email: formData.get('email'),
              password: formData.get('password'),
              PIN:formData.get('pin')
          }
          try{
              
              const response = await axios.post('/api/user/login', data)
             
              
             
              handleLogin(response.data.user)
              navigate('/profile')
          }catch (error){
              /* setIsError(true)
              setErrorMessage(error.response.data) */
              console.log(error)

          }
      }


    return (
       
        <div className='loginContainer'>
        
            
            
            <form onSubmit={handleSubmit} className='login-form'>
               <label>
                 
                 <input className='input-login' name='email' type='email'  placeholder='Enter email' required={true} />
               </label>
               
               <label>
                 
                 <input className='input-login' name='password' type='password' placeholder='Password' required={true}/>
               </label>

               <label>
                
                 <input className='input-login' name='pin' type='password' placeholder='PIN' required={true}/>
               </label>
                 
                 <label>
                     <ErrorMessage isVisible={isError} errorMessage={errorMessage}/>

                 </label>

                 <button className='login-button'>Login</button>




            </form>
           
            
        </div>
         
    )
}