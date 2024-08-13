import React, { useEffect } from 'react';
import './css/Dashboard.css';
import logo from '../Transactions/sky-logo.png'
import { useNavigate } from "react-router-dom"
import { useUserContext } from '../Context/UserContext';
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate()
    const {userDetails} = useUserContext();

    const goToTransactions=()=>{
        navigate("/transactions");
    }

    const goToPayeeList=()=>{
        navigate("/Payeelist");
    }


    return (
        <>
        <div className="container">
            
            <div className="card" onClick={()=> goToTransactions()}>
                <div className="content" >
                    <p className="heading">Balance
                        <span className="balance" >
                            {`£${userDetails.balance}`}
                        </span>
                        </p>

                    <p className="para" >
                        Click here to view your transactions &rsaquo;
                   </p>
                </div>
            </div>

            <div className="secondrowcontainer">
                <div className="imagecard" onClick={()=> goToPayeeList()}>
                    
                    <div className="imagecontent">
                         <div className="aligner">
                         <img src={logo} className="imgdashboard" alt="Logo" /> &nbsp;
                         <br></br> &nbsp;
                            <p className="smallheading">Payee List &#40;template&#41; &rsaquo;</p>
                    </div>
                    </div>
                </div>
                <div className ="columncontainer">
                <div className="smallcard">
                    <div className="content">
                    <p className="smallheading">Account &rsaquo;</p>
                    </div>
                </div>
                <p>&nbsp;</p>
                <div className="smallcard">
                    <div className="content">
                    <p className="smallheading">Direct Debits &rsaquo;</p>
                    </div>
                </div>
                </div>
                </div>
        </div>
        </>
    );
};

export default Dashboard;                           
