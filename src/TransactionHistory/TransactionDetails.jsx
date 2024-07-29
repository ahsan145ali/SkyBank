import React from 'react'

function TransactionDetails({balance}) {
    return (
        <section className='flex flex-col mx-6 p-4 shadow-md'>
            <div>
                <p>Available Balance: </p>
                <p>£{balance}</p>
            </div>
            <button className=' bg-blue-700 text-white w-3/4 rounded-lg self-center'>Move Money</button>
        </section>
    )
}

export default TransactionDetails