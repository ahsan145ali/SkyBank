import React from 'react'

function TransactionItem({date, description, inAmount, outAmount, balance}) {
    return (
        <div className='tw-grid tw-col-span-12 tw-my-4 tw-px-4 tw-py-2 tw-shadow-md'>
            <div className='tw-row-span-2 tw-col-span-2 tw-grid tw-text-center'>
                <p className='tw-col-start-1 tw-order-2'>{date}</p>
                <p className='tw-col-start-1'>{description}</p>
                <p className='tw-hidden'></p>
                <p className='tw-col-start-2'>{inAmount ? `£${inAmount}` : `-£${outAmount}`}</p>
                <p className='tw-col-start-2 tw-order-4'>£{balance}</p>
            </div>
        </div>
    )
}

export default TransactionItem