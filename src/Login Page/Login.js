import React from 'react'
import './Login.css';
import { useState } from 'react';
import skylogo from '../UI/sky_logo.png';
const Login = () => {

    const [isSignUp, setIsSignUp] = useState(false);
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setStatesToDefault();
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    setStatesToDefault();
  };

  const setStatesToDefault = ()=>{
    setEmail('');
    setName('');
    setPassword('');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };
  return (
    <>
    <div className='logo-container'>
        <img src={skylogo} width={'100px'} className='skylogo'></img>
    </div>
    <div className={`container ${isSignUp ? 'active' : ''}`} class="container" id="container">
        <div class="form-container sign-up">
            <form onSubmit={handleSubmit} >
                <h1>Create Account</h1>
                <span>use your email for registration</span>
                <input type="text" placeholder="Name" value = {name} onChange={event=>setName(event.target.value)}/>
                <input type="email" placeholder="Email" value = {email} onChange={event=>setEmail(event.target.value)}/>
                <input type="password" placeholder="Password" onChange={event=>setPassword(event.target.value)}/>
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <span>use your email password</span>
                <input type="email" placeholder="Email" value = {email} onChange={event=>setEmail(event.target.value)}/>
                <input type="password" placeholder="Password" onChange={event=>setPassword(event.target.value)} />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="login" onClick={handleSignInClick}>Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button class="hidden" id="register" onClick={handleSignUpClick}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login