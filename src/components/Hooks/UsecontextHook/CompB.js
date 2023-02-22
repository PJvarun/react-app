import React from 'react'
import CompC from './CompC'


function CompB() {
  return (
    <div>
        <h2>  CompB</h2>
        {/* <UserContext.Consumer>

    {value => <div>{value}</div>}
     </UserContext.Consumer> */}
      <CompC />    { /* reusable component*/ }
        </div>
  )
}

export default CompB