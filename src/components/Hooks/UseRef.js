
// import React, { useEffect } from 'react'
// import { useRef } from 'react';

// function UseRef() {
//   const data =useRef(null)
//   console.log(data);
//   const submithandler = (e)=>{
//       e.preventDefault();

//   }
//   useEffect(()=>{
//     data.current.focus()
//   })


//   return (
//     <>
    
//     <h2> UseRef Hook </h2>
//     <form className='mt-5' onSubmit={submithandler}>
//       <input type="text" ref={data} placeholder="Enter your name"/>
//       <button className='btn btn-secondary ms-3'>Submit</button>

//     </form>
    
//     </>
//   )
// }

// export default UseRef



  import React, { useEffect } from 'react'
import { useRef } from 'react'
const UseRef = () => {
  const data = useRef(null)

  useEffect=(()=>{
   data.current.focus()
  })

  const submithandler=(e)=>{
     e.preventdefault()
  }

 
    return (
      <div>
        <h2>UseRef</h2>
        <form className='' onSubmit={submithandler}>
             <input className='bg-light me-4 text-light'  type="text"  ref={data} placeholder="enter your name" />
             <button className='bg-primary text-light' > Submit </button>
        </form>
      </div>
    )
  }
  
  export default UseRef

// import React, { useEffect, useRef } from 'react'




// function UseRef() {
//   const data = useRef(null)

//   useEffect =(()=>{
//     data.current.focus()
//   })

//    const submithandler=(e)=>{
//     e.preventdefault()
//    } 

//   return (
//     <div>
//       <h2>UseRef</h2>
//       <form className="mt-5" onSubmit={submithandler}>
//         <input className='rounded' type="text" ref={data} placeholder="Enter your name" />
//         <button className="ms-3 bg-primary rounded-pill text-light" >Submit</button>
//       </form>
//     </div>
//   )
// }

// export default UseRef





// import React, { useEffect, useRef } from 'react'  // autofocus


// function UseRef() {
//     const data= useRef(null);
//     console.log(data);
//       //
//        const submithandler = (e) =>{
//             e.preventDefault();
//             console.log(data.current.value);
//     } 

//     useEffect(()=>{
//         data.current.focus()
//     })
//   return (
//     <div> 
//         <h2>UseRef Hook</h2>
//       <form className='mt-5' onSubmit={submithandler}>
//         <input type="text" ref={data} placeholder='Enter your name'/>
      
//         <button className='btn btn-secondary ms-3'> Submit </button>

//       </form>    
//     </div>

   
//   )
// }

// export default UseRef
// /* 
// UseState will re-render when the content change and update in UI

// UseREf  doesn't notify you when its content changes . MUtating the (.current) property
//   doesn't cause a re- render
//   use Ref is used to get the reference of particular element in the DOM 

//   The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 


//   In order to work with refs in React you need to first initialize a ref which is what the useRef hook is for. This hook is very straightforward, and takes an initial value as the only argument. This hook then returns a ref for you to work with
// */

