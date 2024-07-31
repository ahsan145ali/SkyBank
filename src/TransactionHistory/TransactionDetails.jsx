import React from 'react'

function TransactionDetails({balance}) {
    return (
        <section className='tw-flex tw-flex-col tw-mx-6 tw-p-4 tw-shadow-md'>
            <div>
                <p>Available Balance: </p>
                <p>£{balance}</p>
            </div>
            <button className='tw-bg-blue-700 tw-text-white tw-w-3/4 tw-rounded-lg tw-self-center'>Move Money</button>
        </section>
    )
}

export default TransactionDetails