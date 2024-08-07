import React from 'react'
import AccountDetails from './AccountDetails'
import TransactionContainer from './TransactionContainer'

function TransactionPage() {

  return (
      <div className='tw-container tw-min-w-96 md:tw-w-[90%] tw-m-auto'>
        <AccountDetails balance={"2000.00"}/>
        <TransactionContainer />
      </div>
  )
}

export default TransactionPage