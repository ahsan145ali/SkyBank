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
    
    const baseCustomerUrl = "http://localhost:8081/customer";
    const token = process.env.JWT_TOKEN; // get it from .env.local file
    const {storeContextToken} = useAuth();

    //States
    const [isSignUp, setIsSignUp] = useState(false);
    const [customerFirstName,setCustomerFirstName] = useState('');
    const [customerlastName,setCustomerLastName] = useState('');
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
    setCustomerFirstName('');
    setCustomerLastName('');
    setCustomerPassword('');
  }


  const handleSubmitSignUp =  (event) => {
    event.preventDefault();
    customer = new CustomerModel(customerFirstName,customerlastName,customerEmail, customerPassword,123456,9876543,1000);
    console.log(customer);
    //SendUserToDatabase();
    CheckIfUserExists("SignUp");
    //togglePopup(); 
  };

  const handleSubmitSignIn =  (event) => {
    event.preventDefault();
    //CheckIfUserExists("SignIn");
    Login();
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
    //customer.customerPassword = getPasswordHash(customer.customerPassword); 
   await axios.post(baseCustomerUrl +"/create",customer).then((res)=>{
     console.log("Posted to database" , res);
     window.alert("SignUp Success");
   }).catch((e)=>{
     console.log(`There was a problem adding: ${e.message}`);
     window.alert("SignUp Failed " + e.message);
   })
 }
  
  const CheckIfUserExists = async(action)=>{
    await axios.get(baseCustomerUrl + "/get/email/"+customerEmail).then((res)=>{
      console.log("Result: " , res);
      if(res.data.length != 0){ //  User exists , do not send to database
        if(action == "SignUp"){
          window.alert("This email is already used by another user , try signing in");
      }
      }
    }).catch((error)=>{
      if(error.response.data.status == 404){
        if(action == "SignUp"){    
          SendUserToDatabase();
        }
      }else{
        console.log("Error: " , error);
        window.alert(error);
      }

    })
  }


  const Login = async ()=>{
    const loginRequest = {
      "loginEmail": customerEmail,
      "loginPassword":customerPassword
    }
    await axios.post(baseCustomerUrl + "/login",loginRequest).then((res)=>{

      console.log(res);
    }).catch((error)=>{
      window.alert(error);
      console.log("Error: " , error);
    })
  }
  useEffect(()=>{
    const getToken = sessionStorage.getItem("sessionToken");
   
  },[])
  //Database Functions End
  return (
    <>
    <div className="MainContainer">
    <div className={`container ${isSignUp ? 'active' : ''}`} class="container" id="container">
        <div class="form-container sign-up">
            <form onSubmit={handleSubmitSignUp} >
                <h1>Create Account</h1>
                <span>use your email for registration</span>
                <input type="text" placeholder="First Name" value = {customerFirstName} onChange={event=>setCustomerFirstName(event.target.value)} required/>
                <input type="text" placeholder="Last Name" value = {customerlastName} onChange={event=>setCustomerLastName(event.target.value)} required/>
                <input type="email" placeholder="Email" value = {customerEmail} onChange={event=>setCustomerEmail(event.target.value)} required/>
                <input type="password" placeholder="Password" value={customerPassword} onChange={event=>setCustomerPassword(event.target.value)} required/>
                <button>Sign Up</button>
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
    </div>
    </>
  )
}

export default Login