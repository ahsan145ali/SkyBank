import axios from 'axios'
import {sha256} from 'js-sha256';
const baseCustomerUrl = "http://localhost:4000/Customers";

export const SendUserToDatabase = async(customer)=>{ 
   customer.customerPassword = getPasswordHash(customer.customerPassword); 
  await axios.post(baseCustomerUrl,customer).then(()=>{
    console.log("Posted to database");
  }).catch((e)=>{
    console.log(`There was a problem adding: ${e.message}`);
  })
}

export const getPasswordHash = (password)=>{
  return sha256(password);
}