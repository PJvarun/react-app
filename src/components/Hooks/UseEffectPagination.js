
import React, { useEffect, useState } from 'react'


function UseEffectPagination() {
  const[userData, setUserData] = useState([]);
  const[pageNumber, setpageNumber] = useState(0);

  const DummyData = async()=>{
    const  response  = await fetch( `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
    {
      method:"GET",
      headers:{
        "app-id":" 639af55802e5fa3d644a37cf",
      },
    }
  );

  const {data} = await response.json();
  setUserData(data);
  };

  useEffect(()=>{
    DummyData()
  },[pageNumber])
  return (
    <> 
    UseEffectPagination 
    {userData.length ?(
      <div className='container mt-5'>
          <div className= 'row' >
            {userData.map((user)=>(
          <div className="col-md-6 mt-3">
            <div className='card p-2'>
              <div className='row'>
                <div className='col-md-4'>
                  <img src={user.picture} alt={user.firstName} />
                </div>
                <div className='col-md-8'>
                  <h4>{user.id}</h4>
                  <h5>
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  </h5>
                </div>
              </div>
              </div>
              </div>
            ))}
          </div>
              <div>
                  {[1, 2, 3 , 4, 5, 6, 7, 8, 9].map((num)=>(
                    <button className='btn btn-info me-2'
                    onClick = {()=>{
                          setpageNumber(num);
                    }}>
                      {num}
                      </button>
                  ))}
              </div>
      </div>
    ) : (
        <p> Loading .... </p>
     )}
    </>
  );
}

export default UseEffectPagination






// import React, { useEffect, useState } from "react";

// function UseEffectPagination() {
//   const [userData, setuserData] = useState([]);
//   const [pageNumber, setpageNumber] = useState(0);


//   const getDummyData = async () => {
//     const response = await fetch(
//       `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
//       {
//         method: "GET",
//         headers: {
//           "app-id": " 639af55802e5fa3d644a37cf",
//         },
//       }
//     );
//     const { data } = await response.json();
//     setuserData(data);
//   };


//   //   console.log(userData);
//   useEffect(() => {
//     getDummyData();
//   }, [pageNumber]);
  
//   return (
//     <>
//       <h2>UseEffectPagination</h2>
//       {userData.length ? (
//         <div className="container mt-5">
//           <div className="row">
//             {userData.map((user) => (
//               <div className="col-md-6 mt-3">
//                 <div className="card p-2">
//                   <div className="row">
//                     <div className="col-md-4">
//                       <img src={user.picture} alt={user.firstname} />
//                     </div>
//                     <div className="col-md-8">
//                       <h4>{user.id}</h4>
//                       <h5>
                      
//                         <span>
//                           {user.firstName} {user.lastName}
//                         </span>
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
//               <button
//                 className="btn btn-info me-2"
//                 onClick={() => {
//                   setpageNumber(num);
//                 }}
//               >
//                 {num}
//               </button>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// }
// export default UseEffectPagination;