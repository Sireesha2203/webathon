import React from "react";
import './NavigationBar.css';


function NavigationBar(){

  return(
    <div id="nav" className="d-block">
    <nav class="navbar navbar-light bg-dark  navbar-fixed-top mb-5">
  <div class="container-fluid">
    <a class="navbar-brand text-white">Navbar</a>
    <form class="d-flex mr-auto">
    <li class="nav-item">
          <a class="nav-link active text-white fs-5 me-3" aria-current="page" href="/">Home</a>
        </li>
      <li className="nav-item">
        <a className="nav-link active text-white fs-5 me-3" href="/Entrepreneurship">Entrepreneurship</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active text-white fs-5 me-3" href="">Register</a>
      </li>
  
      <li className="nav-item">
        <a className="nav-link active text-white fs-5 me-3" href="">Login</a>
      </li>
      
    </form>
  </div>
</nav>
</div>
  )
}

export default NavigationBar;