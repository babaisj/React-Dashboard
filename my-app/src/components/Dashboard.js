import React from 'react';
import Scorecard from './Scorecard';







export default function Dashboard() {
  return (
    <div>
      <h1 className='mb-2'>Dashboard</h1>
      <div className='row'>
        <div className='col-md-3'>
          <Scorecard title="Active Sessions" score="43,223" icon="local_activity" progress="60%" color="#2f419a" />
        </div>
        <div className='col-md-3'>
          <Scorecard title="Total Revenue" score="$73,293" icon="account_balance_wallet" progress="75%" color="#02c48d"/>
        </div>
        <div className='col-md-3'>
          <Scorecard title="Average Price" score="447" icon="sell" progress="79%" color="#fcbe2d"/>
        </div>
        <div className='col-md-3'>
          <Scorecard title="Add to card" score="86%" icon="layers" progress="82%" color="#fc5454"/>
        </div>
      </div>

    </div>
  )
}
