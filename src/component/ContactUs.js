import React, { Component } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from "react-phone-number-input";
import Mapicon from "../assets/map-icon.png";
import axios from "axios";
import emailjs from "emailjs-com";
import {v4 as uuid} from "uuid";
class ContactUs extends Component {
   
        
            state ={
 
             name:"",
             message:"",
             phone:"+91",
             submitmessage:"",
             submitmessagecolor:"",
             waitingmessage:"",
             waitingmessagecolor:"",
 
               
 
            };
           
        
    
   
    onChange=(event)=>{
        this.setState( { [event.target.name]:event.target.value,});
      };
      onSubmit= async (event)=>
      {
          event.preventDefault();
          const newContact={
               id:uuid()+uuid()+322,
               name:this.state.name,
               message:this.state.message,
               phone:this.state.phone,
          };
          this.setState({ waitingmessage:"PLease wait....",
          waitingmessagecolor:"text-success",
          submitmessage: "",
          submitmessagecolor:"",
          

          });
          const response=await axios.post("https://flask-app-ak-bricks-backend.herokuapp.com/api/contact/us/add",newContact);
   
          const isSuccessful=response.data.isSuccessful;
          const {name}=this.state;

      
          if(isSuccessful)
          {    
            emailjs.sendForm('service_h7fudsr', 'template_lzb846p',event.target, 'user_0VJpQmxGOErfi1mFIx8ek')
            .then((result) => {
             console.log(result.text);
              }, (error) => {
              console.log(error.text);
             });
              
   
            
              this.setState({
                  submitmessage: `Thank you ${name}.
                  I will contact you soon ! `,
                  submitmessagecolor:"text-success",
                  waitingmessage:"",
                  waitingmessagecolor:"",
              });
              
              
          }
          else
          {
   
        
   
           this.setState({
               submitmessage: `Ooops something went 
               wrong. ${name}, Please try again  `,
               submitmessagecolor:"text-danger",
               waitingmessage:"",
               waitingmessagecolor:"",
           }); 
         
   
          }
   
        
      }
    render() {
        const {submitmessage,submitmessagecolor,waitingmessage,waitingmessagecolor}=this.state;
      
        return (
            <div className="mt-5 pt-5 pages-background-color">
                <div className="container  mt-5 pt-5">
                <div className="row pages-background-color ">
                    <div className="col-12 text-center  pb-5 mt-4 pages-background-color col-md-6">
                        <h4 className="text-light">Contact details
                         </h4>
                         <br/>
                         <h6 className="text-light  text-center ">Name: Anil Kumar</h6>
                         <h6 className="text-light  text-center ">Phone:+91 99834 83163</h6>
                         <span className=" text-center ">    <a className="pt-5 
                           
                          whatsapp-icon "
                        href="https://api.whatsapp.com/send?phone=91 99834 83163">
                        <i className="fab fa-whatsapp fa-2x">WhatsApp</i>
                            </a></span>
                            <br />
                            <br/>
                            <br/>
                            <h5 className="footer-headings ">Working Hours</h5>
                                <p className="text-center pb-3  working-hours-text">
                                    Friday - Thursday :7AM-7PM
                                
                                </p>
                            <h5 className="footer-headings pb-4">Location:</h5>
                    <div className="">
                        <img className
                        ="img-fluid" style={{height:"170px",width:"250px"}} src={Mapicon} alt="map" />
                    <p className="pt-5 footer-non-head ">In front of Kuchaman 
                        valley Trisingya , Kuchaman City
                    </p>

                    </div>


                    </div>
                    <div className="col-12 pt-4 pb-3 mt-4 col-md-6 bg-dark">
                        <div className="text-center ">
                            <h5 className="text-form-heading">Feel free to write your query below</h5>
                        </div>
                       
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group pt-2">
                                <label className="text-light" 
                                htmlFor="name">Name *</label>
                                <input required onChange={this.onChange}  
                                 type="text" name="name" 
                                 className="text-light bg-dark form-control" />

                            </div>
                            <div className="form-group">

                                <label className="text-light" 
                                htmlFor="phone-number">Phone Number *</label>
                                <PhoneInput
                                  required
                                 className="form-control bg-dark text-white" 
                            
                                      type="tel" name="phone" 
                                value={ this.state.phone } 
                                onChange={ phone => this.setState({ phone }) } />
                                


                                </div>
                            <div className="form-group pt-2">
                                <label className="text-light" 
                                htmlFor="message">Message *</label>
                                <textarea onChange={this.onChange}  
                                name="message"  required
                                 className="text-light bg-dark form-control"
                                  cols="30" rows="10"></textarea>

                            </div>
                           
                            <button  type="submit " className="btn float-right
                             btn-outline-light">Submit</button>
                            
                        </form>
                        <br />
                        <br />
                        <br />
                        <div className="text-center pt-2 pb-2">
                            <h6 className={waitingmessagecolor}>{waitingmessage}</h6>
                        </div>
                        <div className="text-center pt-2 pb-2">
                            <h6 className={submitmessagecolor}>{submitmessage}</h6>
                        </div>
                       
                        
                        </div>
                       
                </div>

                </div>
                
                
            </div>
        )
    }
}
export default  ContactUs;
