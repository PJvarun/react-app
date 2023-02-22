import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link" href="#">UserData</Link>
        </li>
        <li className="nav-item">
          <Link to="/Pagination" className="nav-link" href="#">Pagination</Link>
        </li>
        <li className="nav-item">
          <Link to="/UserDataEffect" className="nav-link" href="#">UserDataEffect</Link>
        </li>
       
        <li className="nav-item">
          <Link to="/useEffectPagination" className="nav-link" href="#">useEffectPagination</Link>
        </li>
        <li className="nav-item">
          <Link to="/Usecontext" className="nav-link" href="#">UseContext</Link>
        </li>
        <li className="nav-item">
          <Link to="/UseRef" className="nav-link" href="#">UseRef</Link>
        </li>
        <li className="nav-item">
          <Link to="/BasicHook" className="nav-link" href="#">BasicHook</Link>
        </li>
       
       
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <Link to ="/contact-us" className="nav-link">Contactus</Link>
        </li>
        <li className="nav-item">
          <Link to ="/classcomp" className="nav-link">ClassComp</Link>
        </li>
        <li className="nav-item">
          {/* <Link to ="/listsandkeys" className="nav-link">ListsandKeys</Link> */}
        </li>
        <li className="nav-item">
          <Link to ="/UseReducerHook" className="nav-link">useReducerHook</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar