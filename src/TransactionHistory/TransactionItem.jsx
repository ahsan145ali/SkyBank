import React from 'react'

function TransactionItem({date, description, inAmount, outAmount, balance}) {
    return (
        <div className='grid col-span-12 my-4 px-4 py-2 shadow-md'>
            <div className='row-span-2 col-span-2 grid text-center'>
                <p className=' col-start-1 order-2'>{date}</p>
                <p className=' col-start-1'>{description}</p>
                <p className=' hidden'></p>
                <p className=' col-start-2'>{inAmount ? `£${inAmount}` : `-£${outAmount}`}</p>
                <p className=' col-start-2 order-4'>£{balance}</p>
            </div>
        </div>
    )
}

export default TransactionItem