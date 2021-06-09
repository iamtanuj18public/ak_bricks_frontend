import React from 'react';
import {Link} from "react-router-dom";
import BrandImage from '../assets/brandimg.logo.final.png';



 function NavBar() {
    const token=localStorage.getItem("token");
    let loginbutton="Login";
   
    if(token!=null)
    {
        loginbutton="Anil Kumar";
    }

    return ( 
    <nav className="navbar  navbar-expand-sm navbar fixed-top">
      <div className="container mt-1 ">
        <Link  to="/"  className="navbar-brand   navbar-link-button  font-weight-bold">
             <img src={BrandImage} style={{height:"60px",width:"280px"}} alt="AK" />
           </Link>
          
       
            
     
        
       
        
    
       
            <button className="navbar-toggler  " data-toggle="collapse"
             data-target="#collapseNav">
                <span className="fas fa-bars text-light "></span>
            </button>
            <div className="collapse navbar-collapse  flex-grow-0"  id="collapseNav">
                <div className="navbar-nav ">
                       
                        <Link to="/" className="my-auto navbar-link-button  nav-item nav-link  font-weight-bold mx-1">
                                        Home
                                        </Link>
                    <Link to="/pands" className="nav-item price-stock nav-link 
                     font-weight-bold mx-1 my-auto">Price and Stock</Link>
                    <Link to="/contact-us"  className="nav-item nav-link 
                     font-weight-bold mx-1 navbar-link-button my-auto">Contact Us</Link>
                      <Link to="/login"  className="nav-item nav-link text-light
                     font-weight-bold mx-1 my-auto"><button className="log-in-button
                     btn btn-md text-dark
                     font-weight-bold">{loginbutton}</button></Link>

                </div>
            </div>
        
    </div>
   

</nav>

  
        
    );
}
export default NavBar;
