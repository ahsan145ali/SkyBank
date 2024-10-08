import React, { useEffect, useState } from 'react';
import AddPayee from './AddPayee';
import PayPayee from './PayPayee';
import { useUserContext } from '../../Context/UserContext';
import axios from 'axios';
import CustomerModel from '../../Components/Utils/Customer.model'

const PayeeList = () => {
  const {userDetails} = useUserContext();
  const {storeUserDetails} = useUserContext();
  const [payees, setPayees] = useState([]);
  const [recentPayees, setRecentPayees] = useState([]);
  const [showAddPayee, setShowAddPayee] = useState(false);
  const [showPayPayee, setShowPayPayee] = useState(false);
  const [selectedPayee, setSelectedPayee] = useState(null);
  const [balance, setBalance] = useState(userDetails.balance);
  const baseCustomerUrl = "http://3.254.23.71:8081/transaction";
  const basePayeeUrl = "http://3.254.23.71:8081/payee";
  let currentDate = new Date();
 

   const fetchPayees = async () => {
    const response = await axios.get(basePayeeUrl + "/getAll" + "/" + userDetails.email,{withCredentials: true});
    setPayees(response.data);
    setRecentPayees(response.data);
   } 

   const updateBalance = async () => {
    const response = await axios.get("http://3.254.23.71:8081/customer" + "/get/email" + "/" + userDetails.email,{withCredentials: true});
    console.log("Update user: " + response);
    storeUserDetails(response.data)
    setBalance(response.data.balance);
   } 

  let TransactionDetails ={
    "description": "",
    "transactionDate":"" ,
    "amountIn": null,
    "amountOut": null,
    "payeeAccountNumber":"",
    "payeeSortCode":"",
    "customerEmail": userDetails.email
  }
    // Payee details structure
    const PayeeDetails = {
      firstName: "",
      lastName: "",
      sortCode: "",
      accountNumber: "",
      customerEmail: userDetails.email, 
  };

  // Function to add a new payee
  const addPayee = (payee) => {
    setShowAddPayee(false);
    PayeeDetails.firstName = payee.name;
    PayeeDetails.lastName = payee.name;
    PayeeDetails.sortCode = payee.sortCode;
    PayeeDetails.accountNumber = payee.accountNumber;
    console.log(PayeeDetails);
    sendPayeeToDatabase();
  };

   // Function to send payee details to the backend
   const sendPayeeToDatabase = async () => {
    try {
        const response = await axios.post(basePayeeUrl + "/create", PayeeDetails,{withCredentials: true});
        console.log(response);
    } catch (e) {
        window.alert(e);
        console.log("Error: ", e);
    }

    fetchPayees();
};
  const removePayeeFromDatabase = async (todeletePayee)=>{
    console.log('todel: ' + todeletePayee.accountNumber);
    await axios.delete(basePayeeUrl +"/remove/" +todeletePayee.accountNumber + "/" + userDetails.email,{withCredentials:true}).then((response)=>{
      console.log("del response: " + response)
    }).catch((error)=>{
      console.log("error: " + error);
    })

    fetchPayees();
  }

  // Function to handle a payment
  const handlePayment = (amount, payeeName, reference) => {
    if(amount < userDetails.balance){ 
        const payee = payees.find(p => p.firstName === payeeName);
        if (payee) {
          setRecentPayees([payee, ...recentPayees.filter(p => p.firstName !== payeeName)]);
        }
        TransactionDetails["description"] = reference;
        TransactionDetails["amountOut"] = Number(amount);
        TransactionDetails["payeeAccountNumber"]= payee["accountNumber"];
        TransactionDetails["payeeSortCode"]= payee["sortCode"];
        TransactionDetails["transactionDate"] = currentDate;

        console.log(`Payment to ${payeeName}, Amount: $${amount}, Reference: ${reference}`);
        sendTransactionToDatabase();
        setShowPayPayee(false);
    }
    else{
      window.alert("Insufficient Balance");
    }
 
  
  }
  
 const sendTransactionToDatabase = async ()=>{
  await axios.post(baseCustomerUrl +"/create",TransactionDetails,{withCredentials: true}).then((res)=>{
    console.log(res)
    updateBalance();
  }).catch((e)=>{
    window.alert(e);
    console.log("Error: ",e );
  })
 }
  // Function to show the Add Payee form
  const handleShowAddPayee = () => {
    setShowAddPayee(true);
    setShowPayPayee(false);
  };

  // Function to show the Pay Payee form
  const handleShowPayPayee = (payeeName = null) => {
    setSelectedPayee(payeeName);
    setShowPayPayee(true);
    setShowAddPayee(false);
  };

  // Function to hide both forms
  const handleBack = () => {
    setShowAddPayee(false);
    setShowPayPayee(false);
  };

  useEffect(() => {
    fetchPayees();
    setRecentPayees(payees);
  }, []);

  return (
    <div className='tw-min-h-[675px] tw-p-5 tw-text-center'>
      <div style={styles.buttonContainer}>
        <button onClick={handleShowAddPayee} style={styles.button}>Add Payee</button>
        <button onClick={() => handleShowPayPayee()} style={styles.button}>Pay Payee</button>
      </div>
      {showAddPayee ? (
        <>
          <AddPayee onAddPayee={addPayee} />
          <button onClick={handleBack} style={styles.button}>Back</button>
        </>
      ) : showPayPayee ? (
        <>
          <PayPayee payees={payees} onPayment={handlePayment} selectedPayee={selectedPayee} userbalance={userDetails.balance}/>
          <button onClick={handleBack} style={styles.button}>Back</button>
        </>
      ) : (
        <>
          <h3 style={styles.balance}>Balance: ${userDetails.balance}</h3>
          <h2 style={styles.header}>Recent Payees</h2>
          {recentPayees.map((payee, index) => (
            <div key={index} style={styles.payeeCard}>
              <h3 style={styles.payeeName}>{payee.firstName}</h3>
              <p style={styles.payeeAccount}>Sort Code: {payee.sortCode}</p>
              <p style={styles.payeeAccount}>Account Number: {payee.accountNumber}</p>
              <div style={styles.cardButtons}>
                <button onClick={() => handleShowPayPayee(payee.firstName)} style={styles.payButton}>Pay</button>
                <button onClick={() => removePayeeFromDatabase(payee)} style={styles.deleteButton}>Delete</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '10px',
  },
  balance: {
    fontSize: '20px',
    color: '#007bff',
    margin: '20px 0',
  },
  payeeCard: {
    margin: '10px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: 'white',
    width: '80%',
    maxWidth: '400px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  payeeName: {
    margin: '0 0 10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  payeeAccount: {
    margin: 0,
    fontSize: '16px',
    color: '#555',
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
  payButton: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4d4d',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default PayeeList;