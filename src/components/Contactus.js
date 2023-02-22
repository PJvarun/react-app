import React from "react";


class Contactus extends React.Component {
    state = {
      firstName:"",
      lastName:"",
      email:"",
      phone:""

    }

   handleChange = (e)=> {
  // console.log(e.target.value);
     const {name,value}=e.target;  // destructuring
     this.setState({name:value}) 
     console.log(this.state);
    }
  handleSubmit = (e)=>{
    e.preventDefault();
  }
 render(){
  return (
    <div>
      <h2> Contactus </h2>
      <div className="container mt-3">
        <div className="row">

          <div className="col-md-3"> 

          </div>

          <div className="col-md-6">

            <form onSubmit={this.handleSubmit}> 
              <div className="mb-3">
                <input type ="text" class="form-control" name="firstname" placeholder="Enter your first name" onChange={this.handleChange}
                 value={this.state.firstName}/>
               
              </div>
           
              <div className="mb-3">
             
                <input type="text" className="form-control" name="lastname"placeholder="Enter your last name" onChange={this.handleChange}  
                value={this.state.lastName}/>
              </div>
              <div className="mb-3">
             
             <input type="text" className="form-control" name="email" placeholder="Enter your email" onChange={this.handleChange}
               value={this.state.email} />
           </div>
           <div className="mb-3">
             
             <input type="text" className="form-control" name="phonenumber" placeholder="Enter your password" onChange={this.handleChange} 
             value={this.state.phone}/>
           </div>
              
              
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

          </div>

          <div className="col-md-3"> 

          </div>

        </div>
      </div>
    </div>
  );
 }
}

export default Contactus;
