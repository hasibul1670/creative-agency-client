import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#"><img  style={{height:"47px",width:"150px"}}src={logo}alt="" srcset=""/> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#service">Our Portfolio</a>
      </li>
    
      <li class="nav-right ">
          <Link to="/team" class="nav-link active">Our Team</Link>
            </li>
            <li class="nav-item active">
        <a class="nav-link" href="#contact">Contact Us</a>
      </li>
      <Link to="/login">
              <button  style={{height:"38px",width:"100px"}} type="button" class="btn btn-dark">Login</button>
              </Link>
      <li class="nav-item">
      
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
