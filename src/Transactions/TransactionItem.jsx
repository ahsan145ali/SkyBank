import React from 'react'

function TransactionItem({transactionDate, description, amountIn, amountOut}) {
    return (
        <div className='tw-grid tw-col-span-12 tw-my-4 tw-px-4 tw-py-2 tw-shadow-md'>
            <div className='tw-row-span-2 tw-grid tw-text-center'>
                <p className='tw-col-start-1'>{transactionDate}</p>
                <p className='tw-col-start-2'>{description}</p>
                <p className='tw-col-start-3'>{amountIn ? `£${amountIn}` : `-£${amountOut}`}</p>
                {/* <p className='tw-col-start-2 tw-order-4'>£{balance}</p> */}
            </div>
        </div>
    )
}

export default TransactionItem