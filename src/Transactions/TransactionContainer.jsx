import React, { useEffect, useState } from 'react';
import TransactionItem from './TransactionItem';
import { useUserContext } from '../Context/UserContext';
import axios from 'axios';
import  Pagination  from '@mui/material/Pagination';

function TransactionContainer() {
    const { userDetails } = useUserContext();
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 8;

    const handlePageChange = (event, selectedPage) => {
        setCurrentPage(selectedPage);
    };

    useEffect(() => {
        axios.get(`http://localhost:8081/transaction/getAll/${userDetails.email}`, { withCredentials: true })
            .then(({ data }) => {
                setTransactions(data);
                setTotalPages(Math.ceil(data.length / itemsPerPage));
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching transactions:', error);
                setIsLoading(false);
            });
    }, [userDetails.email]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedTransactions = transactions.slice(startIndex, endIndex);

    return (
        <section className='tw-mx-6 tw-p-4 tw-shadow-md tw-h-small md:tw-h-med lg:tw-h-large'>
            <div className='tw-grid tw-grid-cols-12'>
                <h1 className='tw-col-span-12 tw-text-center tw-font-bold'>Recent Transactions</h1>
                <div className='tw-col-span-12 tw-grid'>
                    {!isLoading && paginatedTransactions.map(({ transactionDate, description, amountIn, amountOut, id }) => (
                        <TransactionItem
                            transactionDate={transactionDate}
                            description={description}
                            amountIn={amountIn}
                            amountOut={amountOut}
                            key={id}
                        />
                    ))}
                    {!isLoading && paginatedTransactions.length === 0 && <p className='tw-text-center'>No transactions to show</p>}
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </div>
            </div>
        </section>
    );
}

export default TransactionContainer;
