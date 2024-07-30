import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import skylogo from '../UI/sky_logo.png';
import './Navbar.css';
import {useNavigate } from 'react-router-dom';
const Navbar = () => {
    let pageLocation = useLocation();
    const navigate = useNavigate();
    
    const LoadNavBar = ()=>{

        const goToLogin = ()=>{
           navigate("/");
        }
        const goToHomePage = ()=>{
            navigate("/homepage");
         }
        if(pageLocation.pathname !="/" && pageLocation.pathname !='/homepage'){
           return(
            <>
            {
             <div className='logo-container'>
                 <img src={skylogo} width={'80px'}  className='skylogo'></img>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="optionBars" width={'40px'}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width={'35px'}viewBox="0 0 24 24" fill="currentColor" className="userCircle">
                  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                </svg>    
                <p className='userName'>USER NAME</p>     
            </div>}
            </>
           )
        }
        else if ( pageLocation.pathname == '/'){
            return(
                <>
                    <div className='login-logo-container'>
                        <img src={skylogo} width={'100px'} className='login-skylogo' onClick={goToHomePage}></img>
                    </div>
                </>
            )
        }
        else if( pageLocation.pathname == '/homepage'){
            return(
                <>
                {
             <div className='logo-container'>
                 <img src={skylogo} width={'80px'}  className='skylogo'></img>
                 <button className="button" style={{position: "fixed", top: "1%", right: "2%"}} onClick={goToLogin}>Login</button>
                   
            </div>}
                
                </>
            )
        }
    }
  return (
    
    <div>
        <LoadNavBar/>
    </div>
  )
}

export default Navbar