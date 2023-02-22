// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import ClassComp from './ClassComp';
// import Stylings from './components/stylings/Stylings';
// import "bootstrap/dist/css/bootstrap.min.css"
// import Navbar from './components/Navbar';
// import ListsandKeys from './components/ListsandKeys';
// import Contactus from './components/Contactus';
// import Routing from './components/Routing/Routing';

// function App() {

//   // const studentdetails ={
//   //   marks:25
//   // }

//   const amount =50;
//   // if(amount>50){
//   //   return <h2> Will go for a movie</h2>
//   // }else{
//   //   return <h2> Will have icecream</h2>
//   // }

  
//   return (
    
//    <div className="App">
//         <Navbar />
//     <Routing />
//       {/* <ClassComp /> */}
//       {/* <Contactus /> */}
//         {/* <ListsandKeys /> */}

// <div>
//  </div>

//     /* {
//      /* <h2 className='text-primary '>
//         Welcome to react
//       </h2> *
//       {/* <Header courseName="ReactCourse" duration ="3months"/>
//       <ClassComp courseName="ReactCourse" duration="3months" />
//       <Stylings btnname="internalbtn" externalname="externalbtn"/> */}
//       {
//       /* whatever we write it should be in one parent element
//         first letter of file name should be capital
//         xtension should be js and jsx

//        {
//    <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>  
//       } */  }

//      </div> 
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ClassComp from './ClassComp';
import Stylings from './components/stylings/Stylings';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ListsandKeys from './components/ListsandKeys';
import Contactus from './components/Contactus';
import Routing from './components/Routing/Routing';
import BasicHook from './components/Hooks/BasicHook';
import { useEffect, useRef } from 'react';

function App() {
//   const data = useRef(null);
// console.log(data);
// const submithandler =
//    (e)=>{
//     e.preventDefault();
//     console.log(data.current.value);
    
//    }


//    useEffect(()=>{
//     data.current.focus();
//    },[])

  return (
    <div className="App">
      <Navbar />
      <Routing />


      {/* <div>
        <h2> Use Ref Hook </h2>
        <form className='mt-5'onSubmit={submithandler}>
          <input type="text" ref={data} placeholder='Enter Your Name' />
          <button className='btn btn-secondary ms-3'>Submit</button>
        </form>
      </div> */}
     {/* <BasicHook />      */}
      {/* <Contactus /> */}
      {/* <ClassComp /> */}
      {/* <ListsandKeys /> */}
      <div>
   
  </div>


{/*     
     <h2 className='text-primary'>Welcome to react</h2> */}
     {/* { <Header courseName="ReactCourse" duration="3months" />
     <ClassComp />
     <Stylings btnname="internalbtn" externalname="externalbtn" /> 
     } */}
    </div>
  );
}

export default App;
