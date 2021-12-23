import React from 'react';
import { Consumer } from '../Contextapi';
import ImageSlider from './ImageSlider';
import {Card} from "react-bootstrap";
import Typical from "react-typical";
import Homepagepns from "./homepagepns";
import {v4 as uuid} from "uuid";
import ESTABLISHMENT_BOX_IMAGE from "../assets/ESTABLISHMENT_BOX_IMAGE.jpg"
import TrustLogo from "../assets/trust-logo.png"
import Vision from "../assets/homepagepic.jpeg"
import ProfilePic from "../assets/Profile_Pic.jpeg"




 function HomePage() {
    
     

     return(

     
     <Consumer>
         {
             (value)=>{
                 const {priceandstock}=value;
             
            
               
               
                
                return (
                    <div className="container-fluid pages-background-color  pb-5">
                            

                        <br />
                        <br/>
                        <br/>
                        <br />
                        <br/>
                        <br/>
                       
               
                        
                              <div className="w-80 bg-dark">
                              <Card className="text-center  mt-5 pt-2 text-light bg-dark shadow-lg">
                                <Card.Header className="border-0 text-left bg-dark"><h4
                                style={{color:"orange"}}>Establishment</h4></Card.Header>
                                <Card.Body className="bg-dark">
                                    <Card.Title className="bg-dark text-left">AK Bricks and company was
                                    established on <span className="text-info">16th February 2020.</span> </Card.Title>
                                    <Card.Text className="text-left pt-3">Its located near the Kuchaman Valley, the factory is well 
                                        equipped with the latest machines and materials.
                                    </Card.Text> 
                                    <Card.Text><img className="img-fluid"
                                     src={ESTABLISHMENT_BOX_IMAGE} alt="AK Bricks"/>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted bg-dark border-0 text-right">Anil Kumar</Card.Footer>
                                </Card>

                              </div>
                            
                              

                    
                                      
                            
                        <div className="container mt-5 ">
                            <div className="row mt-5">
                                <div className="col-12 pt-5 col-md-6 ">
                                   
                                
                                  <ImageSlider />
                                
            
                                </div>
                                <div className="col-12 text-center pt-5 col-md-6">
                                    
                               <h1  className="pt-5 text-info text-center">
                               </h1>
                               <br />
                               <h5 className="text-light ">The factory is equiped with high tech CHAMUNDA Machines</h5>
                               <br />
                               <h5 className="text-light">The materials are made in the factory itself,
                            AK Bricks dont buy raw materials from third party as its concerned about the quality of 
                            the product.</h5>
                            <br />
                            <img className="img-fluid" 
                            src={TrustLogo} alt="assured-quality" />
                               <h5 className=" pt-3 text-light">Assured Quality Products</h5>
                              
                               
                                </div>
                            </div>
            
                        </div>
                        <div className="container mt-5">
                        <div className="row mt-5">
                                <div className="col-12 pt-5 col-md-6">
                                   
                                
                                <img className="img-fluid" src={Vision} alt="" />
                                
            
                                </div>
                                <div className="col-12 text-center pt-5 col-md-6">
                                    <br />
                               <h4 className="text-info">
                                   Our Vision
                               </h4>
                               <br />
                               <h5 className="text-light">Be the Kuchaman’s premier construction material production
                                 organization by achieving extraordinary results for
                                 our customers</h5>
                                 <br />
                                 <br />
                               <h4 className="text-info">VALUES</h4>
                               <br />

                                <h6 className="text-success"> Ethics: </h6>
                                <p className="text-light">We are uncompromising in our integrity, honesty, and fairness.</p> 
                                <br />
                                <h6 className="text-success">   Safety & Health.: </h6>
                                <p className="text-light">  We are relentless in keeping people safe from harm, and we provide a healthy work environment.</p> 
                                 <br />
                                <h6 className="text-success">Quality: </h6>
                                <p className="text-light"> We are passionate about excellence and doing our work right the first time. Our reputation depends on 
                                our delivered value in the eyes of every customer and community.</p>
                                
                               <br />
                               <a href="https://www.itstanuj.com">
                               <button className="btn btn-outline-success float-right">Contact Website Developer</button>
                               </a>
                              
                               
                              
                               
                                </div>
                            </div>

                        </div>
                        <div className="container pb-5 mt-5 pt-5">
                            <div className="text-center">
                                <h4 className="text-light">Stocks & Price</h4>
                            </div>
                            <div className="text-center">
                            <div className="row pt-2 ">
                            { priceandstock.map(
                                    (output)=>
                                    <Homepagepns key={uuid()} output={output}/>
                                ) }
                              
                            </div>
                                
                            </div>
                            <div className="text-center bg-dark pt-3 mt-5">
                                <h4 className="text-light">About Owner</h4>
                                <hr className="bg-light " />
                           
                                    
                                <div className="row  ">
                                  
                                    <div className="col-12 pb-3  pt-3 col-md-6">
                                    <img className="rounded-circle" style={{height:"280px", width:"300px"}} 
                                     src={ProfilePic} alt="Anil" />

                                    </div>
                                    <div className="col-12 pb-3  pt-3 col-md-6">
                                        <h3 className="about-owner-info"> <Typical
                                                steps={['Anil Kumar', 1000, 'अनिल कुमार', 500]}
                                                loop={Infinity}
                                                wrapper="p"
                                                /></h3>
                                        <br />
                                        <p className="text-light">
                                            He was born in a village named Jijoth located in the Nagaur district of Rajasthan,India.
                                        </p>
                                        <br/>
                                        <p className="text-light">He completed his  B.sc and
                                        M.sc in Computer Application from Jaipur, Rajasthan.
                                        </p>
                                        <br />
                                        <p className="text-light">He also has  4 year's of experience in finance and management
                                        </p>
                                      
                                        
                                    </div>
                                </div>
                                </div>

                            </div>
                           

                        </div>
                  
                )
            }
                
             }
         
     </Consumer>
     );
        }
  
export default HomePage;