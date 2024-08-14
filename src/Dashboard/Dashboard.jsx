import React, { useEffect, useState } from 'react';
import './css/Dashboard.css';
import logo from '../Transactions/sky-logo.png'
import { useNavigate } from "react-router-dom"
import { useUserContext } from '../Context/UserContext';
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate()
    const {userDetails} = useUserContext();
    const [balance, setBalance] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const goToTransactions=()=>{
        navigate("/transactions");
    }

    const goToPayeeList=()=>{
        navigate("/Payeelist");
    }

    const goToSettingsPage=()=>{
        navigate("/settings");
    }

    useEffect(() => {
        setBalance(userDetails.balance);
    },[])

    return (
        <>
        <div className="container">
            
            <div className="card" onClick={()=> goToTransactions()}>
                <div className="content" >
                    <p className="heading">Balance
                        <span className="balance" >
                         £{balance}
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
                            <p className="smallheading">Payee List &rsaquo;</p>
                    </div>
                    </div>
                </div>
                <div className ="columncontainer">
                <div className="smallcard" onClick={goToTransactions}>
                    <div className="content">
                    <p className="smallheading">Account &rsaquo;</p>
                    </div>
                </div>
                <p>&nbsp;</p>
                <div className="smallcard" onClick={goToSettingsPage}>
                    <div className="content">
                    <p className="smallheading">Settings &rsaquo;</p>
                    </div>
                </div>
                </div>
                </div>
        </div>
        </>
    );
};

export default Dashboard;                           
