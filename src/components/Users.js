import React, { Component } from 'react'




export class Users extends Component {    // class component should have  props constructor(props) and super(props)
    constructor(props){
    super(props)
        console.log("construtor executed");
}
static getDerivedStateFromProps(){
    console.log('static get derived state form props');
    return null
}
state ={
    UserData :[],
}

componentDidMount(){  // calling api
    // console.log('componentdidmount');
    this.getUserData();
}
getUserData = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // fetch is web api / browers api to make api call
    const data = await response.json()
    this.setState({UserData:data})
     console.log(data);
}


  render() {
 

    console.log("render executed")
    
    console.log("render executed");
   
    return (
     
      <>
     
        <h2> Users </h2>
        <table className="table">
        
          
  {/* <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
    </tr>
    </thead> */} 
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  
  <tbody>
  {
    this.state.UserData.length?
    (this.state.UserData.map((user)=>(
      <tr key={user.id} >
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    ))):<p> Loading...</p>
  }
  </tbody>
</table>
</> 
    
    )
  }
}

export default Users