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
    const homepush=()=>{
        window.location.href = "/"

    }
    const pandspush=()=>{
        window.location.href = "/pands"
    }
    const contactpush=()=>{
        window.location.href = "/contact-us"

    }
    const loginpush=()=>{
        window.location.href = "/login"

    }
   

    return ( 
    <nav className="navbar  navbar-expand-sm navbar fixed-top">
      <div className="container mt-1 ">
        <Link  onClick={homepush}  className="navbar-brand   navbar-link-button  font-weight-bold">
             <img src={BrandImage} style={{height:"60px",width:"280px"}} alt="AK" />
           </Link>
          
       
            
     
        
       
        
    
       
            <button className="navbar-toggler  " data-toggle="collapse"
             data-target=".navbar-collapse">
                <span className="fas fa-bars text-light "></span>
            </button>
            <div className="collapse navbar-collapse  flex-grow-0"  id="collapseNav">
                <div className="navbar-nav ">
                       
                        <Link  onClick={homepush} className="my-auto navbar-link-button   nav-item nav-link  font-weight-bold mx-1">
                                       Home
                                        </Link>
                    <Link  onClick={pandspush} className="nav-item navbar-link-button nav-link 
                     font-weight-bold mx-1 my-auto">Price and Stock</Link>
                    <Link  onClick={contactpush}  className="nav-item nav-link 
                     font-weight-bold mx-1 navbar-link-button my-auto">Contact Us</Link>
                      <Link onClick={loginpush} className="nav-item nav-link text-light
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
