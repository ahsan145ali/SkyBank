import React from 'react'
import TransactionDetails from './TransactionDetails'
import History from './History'

function TransactionHistory() {

  return (
      <div className='tw-container tw-min-w-96 md:tw-w-[90%] tw-m-auto'>
        <TransactionDetails balance={"2000.00"}/>
        <History />
      </div>
  )
}

export default TransactionHistory