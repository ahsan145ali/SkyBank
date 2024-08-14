import React, { useEffect, useState } from 'react'
import TransactionItem from './TransactionItem'
import { useUserContext } from '../Context/UserContext';
import axios from 'axios';


function TransactionContainer() {
    const {userDetails} = useUserContext();
    const [transactions, setTransactions] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    let renderTransactions;

    useEffect(() => {
        axios.get(`http://localhost:8081/transaction/getAll/${userDetails.email}`,{withCredentials: true})
        .then(({data}) => {
            console.log(data);
            setTransactions(data)
            setIsLoading(false);
        })
    },[])

    renderTransactions = transactions?.map(({transactionDate, description, amountIn, amountOut, id}) => {
        return (
            <TransactionItem transactionDate={transactionDate} description={description} amountIn={amountIn} amountOut={amountOut} key={id}/>
        )
    })

    return (
        <section className='tw-mx-6 tw-p-4 tw-shadow-md'>
            <div className='tw-grid tw-grid-cols-12'>
                <h1 className='tw-col-span-12 tw-text-center tw-font-bold'>Recent Transactions</h1>
                <div className='tw-col-span-12 tw-grid'>
                    {!isLoading ? renderTransactions : <p>Loading...</p>}
                    {!isLoading && renderTransactions.length === 0 && <p className='tw-text-center'>No transactions to show</p>}
                </div>
            </div>
        </section>
    )
}

export default TransactionContainer