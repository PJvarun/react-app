import React from 'react'
import { Route, Routes } from 'react-router-dom'  
import ClassComp from '../../ClassComp'
import Contactus from '../Contactus'
import BasicHook from '../Hooks/BasicHook'
import Usecontext from '../Hooks/UsecontextHook/Usecontext'
import UseEffectPagination from '../Hooks/UseEffectPagination'
import UserDataEffect from '../Hooks/UserDataEffect'
import UseReducerHook from '../Hooks/UseReducerHook'
import UseRef from '../Hooks/UseRef'
import ListsandKeys from '../ListsandKeys'
import Pagination from '../Pagination/Pagination'
import Users from '../Users'


function Routing
() {
  return (
    <div>
            <Routes>
                <Route path="/" element={<ListsandKeys/>}/> 
                <Route path="/contact-us" element={<Contactus/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/Pagination" element={<Pagination/>}/>
                <Route path="/userDataEffect" element={<UserDataEffect/>}/>
                <Route path="/contact-us" element={<Contactus/>}/>
                <Route path="/BasicHook" element={<BasicHook/>}/>
                <Route path="/useEffectPagination" element={<UseEffectPagination/>}/>
                <Route path="/UseContext" element={<Usecontext/>}/>
                <Route path="/UseReducerHook" element={<UseReducerHook/>}/>
                <Route path="/UseRef" element={<UseRef/>}/>
                <Route path="/classcomp" element={<ClassComp/>}/>
                <Route path="/listsandkeys" element={<ListsandKeys/>}/>  

                
            </Routes>
    </div>
  )
}

export default Routing




// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import ContactUs from '../ContactUs'
// import ListsandKeys from '../ListsandKeys'
// import Pagination from '../Pagination/Pagination'
// import Users from '../Users'

// function Routing() {
//   return (
//     <div>
//         <Routes>
//             <Route path="/" element={<ListsandKeys />} />
//             <Route path='/contact-us' element={<ContactUs/>} />
//             <Route path='/users' element={<Users />} />
//             <Route path='/pagination' element={<Pagination />} />
//         </Routes>
//     </div>
//   )
// }

// export default Routing