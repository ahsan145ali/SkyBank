import React from 'react';
import './css/Dashboard.css';
import logo from '../TransactionHistory/sky-logo.png'
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
    const navigate = useNavigate()

    const goToTransactions=()=>{
        navigate("/homepage");
    }

    const goToPayeeList=()=>{
        navigate("/Payeelist");
    }

    useEffect(()=>{
        const getToken = sessionStorage.getItem("sessionToken");
      },[])

    return (
        <>
        <div class="container">
            <p>&nbsp;</p>
            <div class="card" onClick={()=> goToTransactions()}>
                <div class="content" >
                    <p class="heading">Balance
                        <span class="balance" >
                            £20,000
                        </span>
                        </p>

                    <p class="para" >
                        Click here to view your transactions &rsaquo;
                   </p>
                </div>
            </div>
            <p>&nbsp;</p>
            <div class="secondrowcontainer">
                <div class="imagecard" onClick={()=> goToPayeeList()}>
                    
                    <div class="imagecontent">
                         <div class="aligner">
                         <img src={logo} class="imgdashboard" alt="Logo" /> &nbsp;
                         <br></br> &nbsp;
                            <p class="smallheading">Payee List &#40;template&#41; &rsaquo;</p>
                    </div>
                    </div>
                </div>
                <div class ="columncontainer">
                <div class="smallcard">
                    <div class="content">
                    <p class="smallheading">Account &rsaquo;</p>
                    </div>
                </div>
                <p>&nbsp;</p>
                <div class="smallcard">
                    <div class="content">
                    <p class="smallheading">Direct Debits &rsaquo;</p>
                    </div>
                </div>
                </div>
                </div>
        </div>
        </>
    );
};

export default Dashboard;                           
