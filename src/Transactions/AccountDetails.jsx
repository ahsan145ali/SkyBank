import React, { useEffect, useState } from 'react'
import BankCard from './card.jpeg'
import { useNavigate } from "react-router-dom"
import { useUserContext } from '../Context/UserContext';
import axios from 'axios';


function AccountDetails() {
    const navigate = useNavigate()
    const [customerDetails, setCustomerDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {userDetails} = useUserContext();
    const goToPayee=()=>{
        navigate("/PayeeList");
    }

    useEffect(() => {
        async function getCustomerDetails(){
            await axios.get(`http://localhost:8081/customer/get/email/${userDetails.email}`)
            .then(({data}) => {
                setCustomerDetails({
                    accountNumber: data.accountNumber, 
                    sortCode: data.sortCode,
                    balance: data.balance,
                    cardName: `${data.firstName}'s Card`
                })
                setTimeout(setIsLoading(false), 10000)
                
            }).catch(error => {
                //If wrong endpoint then take to homepage
                if(error) navigate("/homepage")
            })
        }
        getCustomerDetails()
    },[])

    // function stringifySortCode(sortCode) {
    //     let stringifySortCode = sortCode.toString();
        
    //     if (stringifySortCode.length !== 6) {
    //         console.log("Invalid sort code");
    //         return "";
    //     } else {
    //         let formattedSortCode = stringifySortCode.slice(0, 2) + "-" +
    //                                 stringifySortCode.slice(2, 4) + "-" +
    //                                 stringifySortCode.slice(4, 6);
    //         return formattedSortCode;
    //     }
    // }
    


    return (
        <section className='tw-flex tw-flex-col tw-mx-6 tw-p-4 tw-shadow-md'>
            <div className='md:tw-block md:tw-min-h-44'>
                {isLoading && (
                    <div className='tw-mx-auto'>
                        <p>Fetching data....</p>
                    </div>
                    )}
                {!isLoading && 
                <div className='md:tw-grid md:tw-grid-cols-12'>
                    <div className='md:tw-grid md:tw-col-span-6'>
                        <img src={BankCard} className='tw-hidden md:tw-block tw-row-start-1 tw-row-span-2' />
                        <div className='tw-hidden md:tw-flex md:tw-flex-col md:tw-col-start-2 md:tw-gap-2 md:tw-justify-center'>
                            <p className=''>{customerDetails.cardName}</p>
                            <p className=''>{customerDetails.sortCode}</p>
                            <p className=''>{customerDetails.accountNumber}</p>
                        </div>
                        <div className='md:tw-row-start-2'>
                            <p>Available Balance: </p>
                            <p>£{customerDetails.balance}</p>
                        </div>
                    </div>
  
                    <div className='md:tw-row-start-4 md:tw-col-start-4 md:tw-col-span-3 md:tw-flex md:tw-gap-2'>
                        <button className='tw-bg-blue-700 tw-text-white md:tw-min-w-48 tw-p-2 tw-rounded-lg tw-self-center' onClick={() => goToPayee()}>Make a Payment</button>
                    </div>
                </div>}
            </div>
        </section>
    )
}

export default AccountDetails