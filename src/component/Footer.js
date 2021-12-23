import React from 'react';
import { Link } from 'react-router-dom';
import Mapicon from "../assets/map-icon.png";




 function Footer() {
   
    
    const contactpush=()=>{
        window.location.href = "/contact-us"

    }
  
    return (
        <footer className="pages-background-color">
        

              <div className="container-fluid " >
            <div className="py-3  text-center">
            <hr   className="  bg-light"/>
                <h2 className="pt-3  footer-headings">Having any query?</h2>
               <Link to="/contact-us" onClick={contactpush}> <button className="btn btn-md my-3 
               font-weight-bold lets-talk-button">Let's Talk !</button></Link>
              


            </div>
            <div className="row text-center ">
                <div className="col-12 my-3 col-md-4">
                    <h5 className="footer-headings pb-4">Location</h5>
                    <div className="">
                        <img className
                        ="img-fluid" style={{height:"170px",width:"250px"}} src={Mapicon} alt="map" />
                    <p className="pt-4 footer-non-head text-center">In front of Kuchaman 
                        valley Trisingya , Kuchaman City
                    </p>

                    </div>
                   
                
           
                      

                </div>
                <div className="col-12 my-2 col-md-4">
                <h5 className="footer-headings ">Working Hours</h5>
                <p className="text-center pb-4 pt-4 working-hours-text">
                    Friday - Thursday :7AM-7PM
                  
                </p>
               
                                <a className="pt-5  whatsapp-icon "
                        href="https://api.whatsapp.com/send?phone=91 99834 83163">
                        <i className="fab fa-whatsapp fa-3x">WhatsApp</i>
                            </a>
                            <br />
                            <br />
                            <br />

                <i className="fas text-light 
                pt-3 fa-envelope-square fa-3x"></i><p className="text-light font-weight-bold">akbrickskuchaman@gmail.com</p>

                </div>
                <div className="col-12 my-4 col-md-4">
                <h5 className="footer-headings ">What do we produce?</h5>
                <p className="text-justify pt-4 footer-non-head">We produce different types of bricks made up of cement and other 
                material, we also have blocks that are used in making of buildings.
                The bricks and blocks are of high quality material and are produced with
                great supervision. The price offered is best in area and for the materials provided.
                The price for particular item can be negotiated depending on the quantity.</p>

                </div>
                
            </div>
            <div className="text-center">
                <h6 className="text-muted py-3">Copyrights<i className="far fa-copyright"></i> AK Bricks & Co 2021</h6>
            </div>
            
        </div>

        </footer>
      
    );
    }


export default Footer;
