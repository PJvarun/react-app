import React from "react";
class ClassComp extends React.Component{

  // constructor(props){
  //     super(props) 
  // }
  // this.state ={
  //   counter:0
  // }
  // }

   state= {
    counter:0
   }

   handleIncrement = () =>{
    this.setState({counter:this.state.counter+1})//{counter:this.state.counter+1} > to present the data.
   }
   handleDecrement = () =>{
    this.setState({counter:this.state.counter-1}) // setstate is use to update the state
   }
  render(){
    return(
    <div>
     <h2> Counter App</h2>
     <h3>Count: {this.state.counter}</h3>
     <button className="btn btn-warning me-4" onClick={this.handleIncrement}>Increment </button>
     <button className="btn btn-danger" onClick={this.handleDecrement}>Decrement</button>
    </div>
    )
  }
}
export default ClassComp
















// import React, { Component } from 'react'

// export class ClassComp extends Component {
//   render() {
//     return (
//       <div>ClassComp
//         <h2>{this.props.courseName}hii</h2>
//       </div>

//     )
//   }
// }
 
// export default ClassComp
// // In class component this keyword