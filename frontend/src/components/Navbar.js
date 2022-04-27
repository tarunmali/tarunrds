import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./images/logo1.jpg"
import {Link} from 'react-router-dom'



function Navbar(props) {
            return (
        <div>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    {/* image here , also have to import this from react router dom*/}
                    {/* <NavLink className="navbar-brand" to="/">
                      <img src={logo} alt="Logo of the site" />
                    </NavLink> */}

                <div class="container-fluid">
                <img src={logo} href="/"  alt="Logo of the site" />
                  <a class="navbar-brand" href="/">Code Country</a> 
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>



                  <div class="collapse navbar-collapse" id="navbarSupportedContent">

                      {/* Navbar on the right moving  */}
                    <ul class="navbar-nav ml-auto">
                    {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0"> */}

                      
{/* 
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="3">House</a>
                      </li> */}

                      {/* this is what we are going to use */}



                             <li class="nav-item">
                
                 <Link  to="/"  class="nav-link" style={{ textDecoration: 'none' }}>Home</Link>

                  </li>


                      
                {

                  !sessionStorage.getItem('accessToken') &&(
                    <>

                  <li class="nav-item">
                
                 <Link  to="/signup" style={{ textDecoration: 'none' }} class="nav-link">Signup</Link>

                  </li>


                  <li class="nav-item">
                
                 <Link  to="/login"  style={{ textDecoration: 'none' }} class="nav-link">login </Link>

                  </li>
                  </>
                  )
              }








                  <li class="nav-item">
                
                 <Link  to="/Profile"  style={{ textDecoration: 'none' }} class="nav-link">User Profile</Link>

                  </li>

                  <li class="nav-item">
                
                <Link  to="Subscription"  style={{ textDecoration: 'none' }} class="nav-link">Subscription</Link>

                 </li>




                  <li class="nav-item">
                
                <Link  to="/Dashboard/Classroom"  style={{ textDecoration: 'none' }} class="nav-link">Dashboard</Link>

                 </li>

                 <li class="nav-item">
                
                <Link  to="/Posts"  style={{ textDecoration: 'none' }} class="nav-link">Posts</Link>

                 </li>

                 <li class="nav-item">
                
                <Link  to="/contact"  style={{ textDecoration: 'none' }} class="nav-link">Contact Us</Link>

                 </li>

                
              {
                sessionStorage.getItem('accessToken') &&(
                  <>
                <li class="nav-item">
                
                <Link  to="/login"  style={{ textDecoration: 'none' }} class="nav-link">Logout </Link>

                 </li>

                  </>
                )
              }

                      
                      {/* <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                      </li>



                      <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                      </li> */}



                      {/* <li class="nav-item">
                        <a class="nav-link" href="/counter">Counter</a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="/todo">Todo</a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="/blog">Blog</a>
                      </li> */}



                      {/* drop down */}
                      {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li> */}


                      {/* disabled */}
                      {/* <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                      </li> */}



                    </ul>


                    {/* search button */}
                    {/* <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}



                  </div>
                </div>
              </nav> 
        </div>
      //       <div>
      //                 <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      //     <div className="navbar-brand">
      //       {/* <Link to="/" className="Nav__brand">
      //         <img src={logo} alt="Logo of the site" />
      //       </Link> */}

      //       <div className="container-fluid">

            

      //       <li class="nav-item">
      //                    <a class="nav-link" href="/">Home</a>
      //            </li>




      //           <li class="nav-item">
      //           <a class="nav-link" >
      //             <Link  to="/">Link 1</Link>
      //             </a>
      //             </li>


      //                          <li class="nav-item">
      //                    <a class="nav-link" href="/">Home</a>
      //            </li>



      //           <li className="Nav__item">
      //             <Link className="Nav__link" to="/path2">Link 2</Link>
      //           </li>
      //           <li className="Nav__item">
      //             <Link className="Nav__link" to="/path3">Link 3</Link>
      //           </li>
              
      //       </div>
      //     </div>
      //   </nav>

      // </div>


    );
}

export default Navbar;