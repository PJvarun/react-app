import React, { useReducer } from 'react'

function UseReducerHook() {
    const reducer = (currentState, action)=>{
        // reducer is used  to update the state based on action
        //and return the updated state

        //The useReducer Hook is similar to the useState Hook.
        //The useReducer Hook accepts two arguments.

        //useReducer(<reducer>, <initialState>)

       //The reducer function contains your custom state logic and the initialStatecan be a simple value but  generally    will contain an object.

       //The useReducer Hook returns the current stateand a dispatchmethod.


        switch(action){
          case "INCREMENT":
             return currentState + 1
        
         case "DECREMENT":
            return currentState  - 1
  
           default:
           return currentState;
            
        }

    }

    const[count,dispatch] = useReducer(reducer,0)
  return (
    <div>

        <h2 className="mt-5 bg-primary text-white  ">UseReducerHook</h2>
        <h3 className='mt-4 bg-dark text-white '>{count}</h3> 

        <button className="btn btn-primary me-5 circle " onClick={()=>{dispatch("INCREMENT")}}>Increment</button>
        <button className="btn btn-secondary rounded-pill" onClick={()=>{dispatch("DECREMENT")}}>Decrement</button>
        <br/><br/>
        <div className='d-flex w-25'>
        <img  src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="img-fluid" alt="image"></img>
        <img src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="img-fluid" alt="image"></img>
        <img   src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="img-fluid" alt="image"></img>
         
        </div>
        
   </div>
  )

}

export default UseReducerHook




