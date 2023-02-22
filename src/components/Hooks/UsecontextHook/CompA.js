import React from 'react'
import { UserContext } from './Usecontext'

function CompA() {
  return (
    <div>
      <UserContext.Consumer>
          {value=><div>{value}</div>}
      </UserContext.Consumer>
    </div>
  )
}

export default CompA



// import React from 'react'
// import { UserContext } from './Usecontext'

// function CompA() {
//   return (
//     <div>
//         <h2>CompA</h2>
//         <UserContext.Consumer>

//             {value => <div>{value}</div>}
           
//         </UserContext.Consumer>
//         </div>
//   )
// }

// export default CompA

/*Context provides a way to pass data through the component tree without having to pass props down manually at every level.

It is a hook which is used to pass data from main component to any component


*/