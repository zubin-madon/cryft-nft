import React, { Fragment } from 'react'
import UserDetails from './user-details'

function TopHeader() {
  return (
    <Fragment>
    <div className='justify-between flex m-3'>
    <div>
    <h1 className='text-xl'>Gas Tank</h1>
    <h2>0.00 BNB</h2>
    </div>
    <UserDetails />
    

    </div>
      <div className="w-full flex-wrap justify-start items-center border-y-4 border-b border-purple-600 mb-10"></div>
    </Fragment>
  )
}

export default TopHeader