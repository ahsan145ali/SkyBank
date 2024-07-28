import React, { useEffect } from 'react'
import axios from 'axios';
import {sha256} from 'js-sha256';
import './Login.css';
import { useState } from 'react';
import skylogo from '../UI/sky_logo.png';
import CustomerModel from '../Components/Utils/Customer.model';
import 'devextreme/dist/css/dx.light.css';
import {Popup} from 'devextreme-react/popup'; 
import {useAuth} from '../Context/AuthContext';
import { Link } from 'react-router-dom';
 
const Login = () => {
    const baseCustomerUrl = "http://localhost:4000/Customers";
    const token = process.env.JWT_TOKEN; // get it from .env.local file
    const {storeContextToken} = useAuth();
  
    //States
    const [isSignUp, setIsSignUp] = useState(false);
    const [customerName,setCustomerName] = useState('');
    const [customerPassword,setCustomerPassword] = useState('');
    const [customerEmail,setCustomerEmail] = useState('');
    const [isPopupvisible,setPopupVisible] = useState(false);
    const [content,setContent] = useState('');
    const [title , setTitle]= useState('');
    //States End

    let customer = new CustomerModel;

  const togglePopup = () =>{
    setPopupVisible(!isPopupvisible);
  }

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setStatesToDefault();
    
    //check if user exists
    //create user and store in db
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    setStatesToDefault();
    //Match password with hash
    //Generate JWT and store in session
  };

  const setStatesToDefault = ()=>{
    setCustomerEmail('');
    setCustomerName('');
    setCustomerPassword('');
  }


  const handleSubmitSignUp =  (event) => {
    event.preventDefault();
    customer = new CustomerModel(customerName,customerEmail, customerPassword);
    CheckIfUserExists("SignUp");
    togglePopup(); 
  };

  const handleSubmitSignIn =  (event) => {
    event.preventDefault();
    CheckIfUserExists("SignIn");
    //togglePopup(); 
  };


  const renderContent = () =>{
    return(
      <>
        <p>{content}</p>
      </>
    )
  }

  /// Database Functions
  const SendUserToDatabase = async()=>{ 
    customer.customerPassword = getPasswordHash(customer.customerPassword); 
   await axios.post(baseCustomerUrl,customer).then((res)=>{
     console.log("Posted to database");
     setContent("SignUp Success");
     setTitle("Success");
   }).catch((e)=>{
     console.log(`There was a problem adding: ${e.message}`);
     setContent("SignUp Failed " + e.message);
     setTitle("Error");
   })
 }
  
  const CheckIfUserExists = async(action)=>{
    await axios.get(baseCustomerUrl +"?customerEmail="+customerEmail).then((res)=>{
      if(res.data.length != 0){ //  User exists , do not send to database
        if(action == "SignUp"){
        setTitle("OOPS...");
        setContent("This email is already used by another user , try signing in");}
        else{
            //Checking if password match
            const hashPass = getPasswordHash(customerPassword);
            if(hashPass == res.data[0].customerPassword){
              console.log("Password Match");
              setPopupVisible(false);
              //Creating and storing JWT in cookies
              const sessionToken = sha256(res.data[0].customerEmail + token);
              sessionStorage.setItem("sessionToken" , sessionToken)
              storeContextToken(sessionToken);

              console.log("token: " , sessionToken);
           
              // Navigate to page after Login
            }else{
              setTitle("OOPS...");
              setContent("Incorrect Password , Try Again");
              togglePopup();
      
            }
        }
      }else{ //  User does not exists, send to database
        if(action == "SignUp")    
          SendUserToDatabase();
        else{
          setTitle("OOPS...");
          setContent("Email not recognized, try creating an account");
          togglePopup();
        }
      }
    }).catch((e)=>{
      setTitle("Error");
      setContent(e.message);

    })
  }

  const getPasswordHash = (password)=>{
    return sha256(password);
  }
  
  useEffect(()=>{
    const getToken = sessionStorage.getItem("sessionToken");
   
  },[])
  //Database Functions End
  return (
    <>
    <div className='logo-container'>
        <img src={skylogo} width={'100px'} className='skylogo'></img>
    </div>
    <div className={`container ${isSignUp ? 'active' : ''}`} class="container" id="container">
        <div class="form-container sign-up">
            <form onSubmit={handleSubmitSignUp} >
                <h1>Create Account</h1>
                <span>use your email for registration</span>
                <input type="text" placeholder="Name" value = {customerName} onChange={event=>setCustomerName(event.target.value)} required/>
                <input type="email" placeholder="Email" value = {customerEmail} onChange={event=>setCustomerEmail(event.target.value)} required/>
                <input type="password" placeholder="Password" value={customerPassword} onChange={event=>setCustomerPassword(event.target.value)} required/>
                <button>Sign Up</button>
                <Popup contentRender={renderContent}
                    visible={isPopupvisible}
                    hideOnOutsideClick={true}
                    onHiding={togglePopup}
                    showTitle={true}
                    title={title}
                    defaultWidth={700}
                    defaultHeight={150}
                 />
            </form>
        </div>
        <div class="form-container sign-in">
            <form onSubmit={handleSubmitSignIn}>
                <h1>Sign In</h1>
                <span>use your email password</span>
                <input type="email" placeholder="Email" value = {customerEmail} onChange={event=>setCustomerEmail(event.target.value)} required/>
                <input type="password" placeholder="Password" value = {customerPassword} onChange={event=>setCustomerPassword(event.target.value)} required/>
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
                <Popup contentRender={renderContent}
                    visible={isPopupvisible}
                    hideOnOutsideClick={true}
                    onHiding={togglePopup}
                    showTitle={true}
                    title={title}
                    defaultWidth={700}
                    defaultHeight={150}
                 />
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