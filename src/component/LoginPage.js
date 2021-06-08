import React ,{Component} from 'react';
import {Redirect} from "react-router-dom";
import { Consumer } from '../Contextapi';


 class LoginPage extends  Component {
     constructor(props){
        super(props)
        const token=localStorage.getItem("token")
        let loggedIn=true;
     if(token==null)
     {
         loggedIn=false;
     }
     this.state={loggedIn}
        
        this.state={
            username:"",
            password:"",
            logginmessage:"",
            loggedIn
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.handlechange=this.handlechange.bind(this);
    };
        
   

  
    
    onSubmit=(event)=>{
       event.preventDefault();
       const {username,password}=this.state;
       if(username==='anilkumar' && password==='jatin123')
       
       { localStorage.setItem("token","sdfsfsfsfsfsdf");
           this.setState({loggedIn:true,})

       }
       else    if(username==='anilkumar' && password!=='jatin123')
       
       { 
        this.setState({ logginmessage:"Wrong Password"});

       }
       else 
       {
           this.setState({ logginmessage:"User Not Found"});
       }

     
   };
   handlechange=(e)=>{
       this.setState({[e.target.name]:e.target.value,})

   };
  

     render() {
         if(this.state.loggedIn)
         {  window.location.href = "/dashboard"
             return <Redirect to="/dashboard"/>
            

           
         }
        
         const {logginmessage}=this.state;
    return (
        <Consumer>
            {
                (value)=>
                {  
              
                   
                    return (
                        <div className="container-fluid pb-5  mt-5  
                        pages-background-color">
                            <div className="container pb-5 mt-5 pt-5">
                               
                                <div className="row pt-5 mt-5">
                                    <div className="col-12 col-md-6 mb-5 mt-5">
                                        <h4 className="text-info">Only for authorized persons:</h4>
                                        <h6 className="text-light pt-4">Please enter your details in Login 
                                        form</h6>
                
                                    </div>
                                    <div className="col-12 mb-5 bg-dark col-md-6 mt-5">
                                        <div className=" pt-3">
                                            <h4 className="text-danger text-center">
                                                {logginmessage}
                                            </h4>
                                        </div>
                                        <form onSubmit={this.onSubmit} className="pt-3" >
                                            <div className="form-group">
                                                <label className="text-light" 
                                                htmlFor="username">Username *</label>
                                                <input required value={this.state.username} onChange={this.handlechange}
                                                 autoComplete="off" name="username" className="bg-dark
                                                text-light form-control" type="text" />
                                            </div>
                                            <div className="form-group">
                                                <label className="text-light" 
                                                htmlFor="password">Password *</label>
                                                <input required   value={this.state.password}
                                                onChange={this.handlechange}
                                                 autoComplete="off" name="password" className="bg-dark
                                                text-light form-control" type="password" />
                                            </div>
                                            <button type="submit" className="btn mb-5 mt-3
                                            btn btn-outline-light float-right">Login</button>
                                        </form>
                                         
                                        </div>
                                </div>
                                <div className="mb-5"><br /><br /><br /><br /><br /></div>
                                
                
                            </div>
                            
                        </div>

                    );
                }
            }
        </Consumer>
        
      
    );
     }
}
export default LoginPage;
