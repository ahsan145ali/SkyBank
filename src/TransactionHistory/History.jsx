import React from 'react'
import TransactionItem from './TransactionItem'

function History() {
    return (
        <section className='tw-mx-6 tw-p-4 tw-shadow-md'>
            <div className='tw-grid tw-grid-cols-12'>
                <h1 className='tw-col-span-12 tw-text-center tw-font-bold'>July 2024</h1>
                {/* Transaction table */}
                <div className='tw-col-span-12'>
                    {/* Record */}
                    <TransactionItem date="23 July" description="Just Eat" outAmount={"25.00"} balance={"2000.00"}/>
                    <TransactionItem date="22 July" description="British Gas" outAmount={"175.00"} balance={"2025.00"}/>
                    <TransactionItem date="15 July" description="Sky TV" outAmount={"75.00"} balance={"20200.00"}/>
                    <TransactionItem date="1 July" description="British Gas" outAmount={"100.00"} balance={"2275.00"}/>
                    <TransactionItem date="1 July" description="Wage" inAmount={"2275.00"} balance={"0.00"}/>
                </div>
            </div>
        </section>
    )
}

export default History