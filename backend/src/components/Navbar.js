import React  from 'react'
import { Link, useLocation } from 'react-router-dom'


function Navbar() {
let location = useLocation();
const handleSignout =()=>{
  localStorage.removeItem('token');
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">About</Link>
        </li>
      </ul>
    { !localStorage.getItem('token')? <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <Link to="/login" className="btn btn-primary " tabIndex="-1" role="button" aria-disabled="true">Login</Link>
  <Link to="/signup" className="btn btn-secondary " tabIndex="-1" role="button" aria-disabled="true">Signup</Link>
    </div>: <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <Link to="/login" className="btn btn-primary " tabIndex="-1" role="button" onClick={handleSignout} aria-disabled="true">SignOut</Link>
    </div>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
