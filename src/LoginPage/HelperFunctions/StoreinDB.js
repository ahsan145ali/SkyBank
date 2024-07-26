import axios from 'axios'
import {sha256} from 'js-sha256';
const baseCustomerUrl = "http://localhost:4001/Customers";

export const SendUserToDatabase = async({customerName,customerEmail,customerPassword})=>{ 
   customerPassword = getPasswordHash(customerPassword); 
  await axios.post(baseCustomerUrl,{customerName,customerEmail,customerPassword}).then(()=>{
    console.log("Posted to database");
  }).catch((e)=>{
    console.log(`There was a problem adding: ${e.message}`);
  })
}

export const getPasswordHash = (password)=>{
  return sha256(password);
}