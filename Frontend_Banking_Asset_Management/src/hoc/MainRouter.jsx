import React, { useContext } from 'react'
import { BrowserRouter as Router, Route ,Routes, Redirect, Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import AboutUs from '../views/AboutUs/AboutUs'
import Analytics from '../views/Analytics/Analytics'
import Landing from '../views/Landing/Landing'
import Login from '../views/Login/Login'
import Logout from '../../src/views/Logout/Logout'
import Profile from '../views/Profile/Profile'
import SignUp from '../views/SignUp/SignUp'
import BankPrioritiesPage from '../views/BankPrioritiesPage/BankPrioritiesPage'
import AccountPage from '../views/AccountPage/AccountPage'
import Investment from '../views/InvestmentAssets/InvestmentAssets'
import InvestmentPage from '../views/InvestmentPage/InvestmentPage'
import LoanPage from '../views/LoanPage/LoanPage'
import MoneyTransfer from '../views/MoneyTransferPage/MoneyTransferPage'
import { AppContext } from '../App'
import ProtectedRoute from '../components/Common/ProtectedRoute/ProtectedRoute'

export default function MainRouter() {

    const{loggedIn} = useContext(AppContext)

    return (

        <Router>
        <nav> </nav>


            
       
        <Navbar/>
        
        <Routes>
              <Route path='/' element = {<Landing/>}/>
              <Route path='/mission' element = {<BankPrioritiesPage/>}/>
              <Route path='/account' element = {<AccountPage/>}/>
              <Route path='/loan' element = {<LoanPage/>}/>
              <Route path='/investment' element = {<InvestmentPage/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/profile' element={
<ProtectedRoute auth={loggedIn}><Profile /></ProtectedRoute>}/>
              {/* <Route path='/transfer' element = {<MoneyTransfer/>}/> */}
              <Route path='/logout' element={<Logout/>}/>



        

        </Routes>
          
          
        </Router>
    )
}
