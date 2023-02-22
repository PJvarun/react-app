import React from 'react'
import CompA from './CompA'
export const UserContext = React.createContext
function Usecontext() {
  return (
    <div>
        <UserContext.Provider value={'React Js'}>
            <CompA />
        </UserContext.Provider>
    </div>
  )
}

export default Usecontext




// import React from 'react'
// import CompA from './CompA'
// export const UserContext = React.createContext();
// function Usecontext() { 
//   return (
//     <div>
//       <UserContext.Provider value={"ReactJs"}>
//         <CompA />
//       </UserContext.Provider>
//     </div>
//   )
// }

// export default Usecontext


// import React from 'react'
// import CompA from './CompA';
// import CompB from './CompB';
// export const UserContext =React.createContext();


// function Usecontext() {
 
  
//   return (
//     <div>
      
//       <UserContext.Provider value={"ReactJs"}>
//           <CompA />
//           <CompB />
//       </UserContext.Provider>

//     </div>
//   )
// }

// export default Usecontext


/*
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

It is a hook which is used to pass data from main component to any component.

it will be having provider and consumer.

createContext lets you create a context that components can provide or read.

createContext lets you create a context that components can provide or read.
*/