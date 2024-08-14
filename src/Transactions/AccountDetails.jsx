import React, {  } from 'react'
import BankCard from './card.jpeg'
import { useNavigate } from "react-router-dom"
import { useUserContext } from '../Context/UserContext';


function AccountDetails() {
    const navigate = useNavigate()
    const {userDetails} = useUserContext();
    const goToPayee=()=>{
        navigate("/PayeeList");
    }

    return (
        <section className='tw-flex tw-flex-col tw-mx-6 tw-p-4 tw-shadow-md'>
            <div className='md:tw-block md:tw-min-h-44'>
                <div className='md:tw-grid md:tw-grid-cols-12'>
                    <div className='md:tw-grid md:tw-col-span-6'>
                        <img src={BankCard} className='tw-hidden md:tw-block tw-row-start-1 tw-row-span-2' />
                        <div className='tw-hidden md:tw-flex md:tw-flex-col md:tw-col-start-2 md:tw-gap-2 md:tw-justify-center'>
                            <p className=''>{userDetails.firstName + " " + userDetails.lastName}'s Card</p>
                            <p className=''>{userDetails.sortCode}</p>
                            <p className=''>{userDetails.accountNumber}</p>
                        </div>
                        <div className='md:tw-row-start-2'>
                            <p>Available Balance: </p>
                            <p>£{userDetails.balance}</p>
                        </div>
                    </div>
  
                    <div className='md:tw-row-start-4 md:tw-col-start-4 md:tw-col-span-3 md:tw-flex md:tw-gap-2'>
                        <button className='tw-bg-blue-700 tw-text-white md:tw-min-w-48 tw-p-2 tw-rounded-lg tw-self-center' onClick={() => goToPayee()}>Make a Payment</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccountDetails