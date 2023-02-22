import React, { useEffect, useState } from 'react'


const UserDataEffect = () => {
  const[get, setGet] = useState([])

   useEffect=(()=>{
        getdata()
   },[])
  const getdata = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = response.json()
    setGet(data)
  }
  return (

    <div>
      <h2> UserDataEffect </h2>
      <table className='table'>
        <thead>
          <tr>
            <th> Id</th>
            <th> name</th>
            <th> email</th>
          </tr>
        </thead>
        <tbody>
          {
            get.length?
            (get.map((user)=>{
              <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
              
          })):<p>loading....</p>
           
          }
          
        </tbody>
      </table>
      </div>
  )
}

export default UserDataEffect


 







// import React, { useEffect, useState } from 'react'

// function UserDataEffect() {
//   const[get, Setget] = useState([])


//   useEffect(()=>{
//     getdata()
//   },[])

//      const getdata = async() =>{
//      const response = await fetch("https://jsonplaceholder.typicode.com/users")
//      const data =  await response.json()
//      Setget(data)  
//     }  

//   return (
//     <div>
//      <h2>UserDataEffect</h2> 
//      <table className='table'>
//       <thead>
//       <tr>
//          <th> Id </th>
//          <th> name </th>
//          <th> username </th>
//          <th> Email </th>   
//       </tr>
//       </thead>
//       <tbody>
//       {             
//           get.length?                       /*javascript terinary operator*/
//          (get.map((user)=>(
//           <tr key = {user.id}>
//           <td>{user.id}</td>
//           <td>{user.name}</td>
//           <td>{user.username}</td>
//           <td>{user.email}</td>
        
//          </tr>
//       ))): <p>Loading ......</p>
//       }
//       </tbody>
//      </table>
//       </div>
//   )
// }

// export default UserDataEffect


     /*

     response. json() is a method of the Response object that allows a JSON object to be extracted from the response.

     */
// import React, { useEffect } from 'react'

// function UserDataEffect() {

//   const [userData, setUserData] = useState([])

//   useEffect(()=>{
//     getData()
//   },[])


//   const getData = async()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//       const data = await response.json()
//       setUserData(data)
//   }
//   return (
//     <div>
//      <h2>UserDataEffect</h2> 
//      <table className='table'>
//           <thead>
//                <tr>
//                  <th>Id</th>
//                  <th>name</th>
//                  <th>username</th>
//                  <th>Email</th>
//                </tr>

//           </thead>
//           <tbody>
//             {
//               userData.length?
//               (userData.map((user)=>(
//                   <tr key ={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.username}</td>
//                   </tr>
//               ))) :<p>Loadin......g</p>
//             }
//           </tbody>
//      </table>
//       </div>
//   )
// }

// export default UserDataEffect



// import React, { useEffect, useState } from 'react'

// function UserDataEffect() {
// const [userData,setUserData] = useState([])


// useEffect(()=>{

//   getUserdata()
// },[])

// const getUserdata = async() =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     setUserData(data)
// }


//   return (
//     <div>
//       <h2> UserDataEffect </h2>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>name</th>
//             <th>username</th>
//             <th> email</th>
//           </tr>
//           </thead>
//           <tbody>
//             {
//               userData.length?
//               (userData.map((user)=>(
//                   <tr key={user.id}>
//                       <td>{user.id}</td>
//                       <td>{user.name}</td>
//                       <td>{user.username}</td>
//                       <td>{user.email}</td>
//                   </tr>
//               ))) : <p>Loading ......</p>
//             }
//           </tbody>
//       </table>
//       </div>
//   )
// }

// export default UserDataEffect


// import React, { useEffect, useState } from 'react'
// /* Use Effect
// The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect(<function>, <dependency>),The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting.
// */
// /*In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.*/

// function UserDataEffect() {
//   const [userData,setUserData] = useState([])


//   useEffect(()=>{
//     getUserData()
//   },[])
 
//   const getUserData = async() =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     setUserData(data)
//       }


     
//   return (
//     <div>
//       <h2>UserDataEffect</h2>
//       <table className='table'>
//         <thead>
//             <tr>
//               <th scope='col'> Id</th>
//               <th scope='col'> name </th>
//               <th scope='col'> username</th>
//               <th scope='col'> email </th>
//             </tr>
//         </thead>
//         <tbody>
//           {
//             userData.length?
//             (userData.map((user)=>(
//               <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>

//               </tr>
//               ))):<p> Loading.....</p>
//           }
//         </tbody>
//       </table>
//       </div>
//                  )
//                }

  

// export default UserDataEffect;


// import React, { useEffect, useState } from 'react'


// function UserDataEffect() {
//     const [userData, setUserData] = useState([]);
    
//     const getUserData = async()=>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
//         // fetch is web api / browers api to make api call
//         const data = await response.json()
//         /* "json"=> It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)*/
//         setUserData(data)
//         console.log(userData);
//     }


//     //useEffect Hook
//     //componentdidMount and componentdidupdate
//     useEffect(()=>{
//             getUserData()
//      },[])
//      /* empty array act as the mounting phase*/

//   return (
//     <div>
//         <h2>UserData using use Effect</h2>
//         <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">id</th>
//       <th scope="col">name</th>
//       <th scope="col">username</th>
//       <th scope="col">email</th>
//     </tr>
//   </thead>
//   <tbody>
//   {
//   userData.length?
//     (userData.map((user)=>(
//       <tr key={user.id} >
//         <td>{user.id}</td>
//         <td>{user.name}</td>
//         <td>{user.username}</td>
//         <td>{user.email}</td>
//       </tr>
//     ))):<p> Loading...</p>
//   }
//   </tbody>
// </table>
//         </div>
//   )
// }

// export default UserDataEffect




