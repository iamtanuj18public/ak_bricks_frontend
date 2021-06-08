import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Consumer } from '../Contextapi';
import Table from "./Table";
import ProfilePic from "../assets/Profile_Pic.jpeg";
import axios from "axios";




 class Dashboard extends Component {
   constructor(props){
       super(props)
        const token=localStorage.getItem("token")
        this.state={
        blockprice:"",
        lightpice:"",
        normalprice:"",
        blockstock:"",
        lightbrickstock:"",
        normalbrickstock:"",
        messageblock:"",
        messagecolorblock:"",
        messagelight:"",
        messagecolorlight:"",
        messagenormal:"",
        messagecolornormal:"",
        messageblockprice:"",
        messagecolorblockprice:"",
        messagelightprice:"",
        messagecolorlightprice:"",
        messagenormalprice:"",
        messagecolornormalprice:"",
        tablemessage:"",
        tablecolor:"",
        
     };
     let loggedIn=true;
     if(token==null)
     {
         loggedIn=false;
     }
     this.state={loggedIn}
     
    }
     changeblockprice=(e)=>{
         this.setState({blockprice:e.target.value,})

     };
     changelightprice=(e)=>{
        this.setState({lightprice:e.target.value,})

    };
    changenormalprice=(e)=>{
        this.setState({normalprice:e.target.value,})

    };
    changeblockstock=(e)=>{
        this.setState({blockstock:e.target.value,})

    };
    changelightbrickstock=(e)=>{
       this.setState({lightbrickstock:e.target.value,})

   };
   changenormalbrickstock=(e)=>{
       this.setState({normalbrickstock:e.target.value,})

   };
    blockprice= async(e)=>{
        e.preventDefault();
        const updatedblockprice={
            blockprice:this.state.blockprice,
        };
     const response = await axios.patch("https://flask-app-ak-bricks-backend.herokuapp.com/api/blockprice/update",updatedblockprice);
     const isSuccessful=response.data.isSuccessful;
        if(isSuccessful){
            this.setState({messageblock:" updated"});
            this.setState({messagecolorblock:" text-success "});
        }
        else
        {
            this.setState({messageblock:"Couldn't update server error......"});
            this.setState({messagecolorblock:" text-danger "});

        }

    };
    lightprice= async(e)=>{
        e.preventDefault();
        const updatelightprice={
            lightbrickprice:this.state.lightprice,
        };
     const response = await axios.patch("https://flask-app-ak-bricks-backend.herokuapp.com/api/lightbrickprice/update",updatelightprice);
     const isSuccessful=response.data.isSuccessful;
        if(isSuccessful){
            this.setState({messagelight:" updated"});
            this.setState({messagecolorlight:" text-success "});
        }
        else
        {
            this.setState({messagelight:"Couldn't update server error......"});
            this.setState({messagecolorlight:" text-danger "});

        }

    };
    normalprice= async(e)=>{
        e.preventDefault();
        const updatenormalprice={
            normalbrickprice:this.state.normalprice,
        };
     const response = await axios.patch("https://flask-app-ak-bricks-backend.herokuapp.com/api/normalbrickprice/update",updatenormalprice);
     const isSuccessful=response.data.isSuccessful;
        if(isSuccessful){
            this.setState({messagenormal:" updated"});
            this.setState({messagecolornormal:" text-success "});
        }
        else
        {
            this.setState({messagenormal:"Couldn't update server error......"});
            this.setState({messagecolornormal:" text-danger "});

        }

    };
    blockstock= async(e)=>{
        e.preventDefault();
        const updateblockstock={
            blockstock:this.state.blockstock,
        };
     const response = await axios.patch("https://flask-app-ak-bricks-backend.herokuapp.com/api/blockstock/update",updateblockstock);
     const isSuccessful=response.data.isSuccessful;
        if(isSuccessful){
            this.setState({messageblockprice:" updated"});
            this.setState({messagecolorblockprice:" text-success "});
        }
        else
        {
            this.setState({messageblockprice:"Couldn't update server error......"});
            this.setState({messagecolorblockprice:" text-danger "});

        }

    };
    lightbrickstock=async(e)=>{
        e.preventDefault();
        const updatelightstock={
            lightstock:this.state.lightbrickstock,
        };
     const response = await axios.patch("https://flask-app-ak-bricks-backend.herokuapp.com/api/lightbrickstock/update",updatelightstock);
     const isSuccessful=response.data.isSuccessful;
        if(isSuccessful){
            this.setState({messagelightprice:" updated"});
            this.setState({messagecolorlightprice:" text-success "});
        }
        else
        {
            this.setState({messagelightprice:"Couldn't update server error......"});
            this.setState({messagecolorlightprice:" text-danger "});

        }

    };
    normalbrickstock= async(e)=>{
        e.preventDefault();
        const updatenormalstock={
            normalstock:this.state.normalbrickstock,
        };
     const response = await axios.patch("https://flask-app-ak-bricks-backend.herokuapp.com/api/normalbrickstock/update",updatenormalstock);
     const isSuccessful=response.data.isSuccessful;
        if(isSuccessful){
            this.setState({messagenormalprice:" updated"});
            this.setState({messagecolornormalprice:" text-success "});
        }
        else
        {
            this.setState({messagenormalprice:"Couldn't update server error......"});
            this.setState({messagecolornormalprice:" text-danger "});

        }

    };
    
    logout=()=>{
        localStorage.removeItem("token");
        window.location.reload();
        

    };
    deletetable= async(e)=>{
        e.preventDefault();
     
       
     const response = await axios.delete("https://flask-app-ak-bricks-backend.herokuapp.com/api/delete/table");
     const isSuccessful=response.data.isSuccessful;
        if(isSuccessful){
            this.setState({tablemessage:"Items were deleted , please reload the page."});
            this.setState({tablecolor:" text-success "});
        }
        else if(isSuccessful==false)
        {
            this.setState({tablemessage:"Items couldn't be deleted, please try after sometime"});
            this.setState({tablecolor:" text-danger "});

        }
        else
        {
            alert('error')
        }

    };
    render() {
        if(this.state.loggedIn===false)
        {
           return <Redirect to="/login"/>
                }
        const {messageblock,messagelight,messagenormal,messagecolorblock,
            messagecolorlight,messagecolornormal,messageblockprice,messagecolorblockprice
        ,messagecolorlightprice,tablemessage,tablecolor,messagelightprice,messagenormalprice,messagecolornormalprice}=this.state;
        return(
            <Consumer>
            { 
                  (value)=>{
                    const {table}=value;
                   
                    return( 
                        <div className="container-fluid mt-5 pb-5 pt-5 pages-background-color">
                            <div className="container mb-5 pt-5 ">
                                <div className="pt-5  mt-5">
                                <button onClick={this.logout} className="btn float-right  btn-outline-light">
                                        Logout
                                    </button>
                                      <br />
                                      <br />
                                   
                                   <div className="row bg-dark pt-3 ">
                                       
                                        <div className="col-12 pt-5 pb-3 text-center bg-dark col-md-6">
                                            <img className="img-fluid
                                            rounded-circle" style={{height:"280px",width:"280px"}}
                                             src={ProfilePic} alt="" />
            
            
                                        </div>
                                        <div className="col-12 pt-5 bg-dark pb-3 col-md-6">
                                        
                                      <br />
                                      <br />
                                      <br />
                                            <h4 className="text-light text-center">
                                                Hello, Anil Kumar
                                                <br />
                                                <br />
                                            </h4>
                                            <h5 className="text-info text-center">Choose the item
                                            to be updated</h5>
                                            <form onSubmit={this.blockprice} className="text-center" >
                                                <div className="pt-2 form-group">
                                                    <label className="
                                                    text-light" htmlFor="block-price">Block Price:</label>
                                                    <input required
                                                    onChange={this.changeblockprice}
                                                     className="bg-dark ml-5 text-light
                                                     " type="number" />
            
                                                </div>
                                                <button type="submit" className="btn ml-5 btn-outline-light
                                                ">Update</button><br /><span className="text-center">
                                                <p className={messagecolorblock}>
                                                {messageblock}</p>
                                                </span>
                                                </form >
                                                <form onSubmit={this.lightprice} 
                                                className="text-center mt-4">
                                                <div className="pt-2 form-group">
                                                    <label className="
                                                    text-light" htmlFor="block-price ">Light Brick 
                                                    Price:</label>
                                                    <input required onChange={this.changelightprice}
                                                    className="bg-dark ml-3 text-light
                                                     " type="number" />
            
                                                </div>
                                                <button type="submit" className="btn ml-5 btn-outline-light
                                                ">Update</button><br /><span className="text-center">
                                                <p className={messagecolorlight}>
                                                {messagelight}</p>
                                                </span>
                                                </form>
                                                <form  onSubmit={this.normalprice}
                                                className="text-center mt-4">
                                                <div className="pt-2 form-group">
                                                    <label className="
                                                    text-light" htmlFor="block-price">Normal
                                                     Brick Price:</label>
                                                    <input required onChange={this.changenormalprice} 
                                                    className="bg-dark  text-light
                                                     " type="number" />
            
                                                </div>
                                                <button type="submit" className="btn ml-5 btn-outline-light
                                                ">Update</button><br /><span className="text-center">
                                                    <p className={messagecolornormal}>
                                                    {messagenormal}</p>
                                                    </span>
                                            </form>
                                            <br />
                                            <br />
                                            <br />
                                            <form onSubmit={this.blockstock} className="text-center" >
                                                <div className="pt-2 form-group">
                                                    <label className="
                                                    text-light" htmlFor="block-price">Block Stock:</label>
                                                    <input required
                                                    onChange={this.changeblockstock}
                                                     className="bg-dark ml-5 text-light
                                                     " type="number" />
            
                                                </div>
                                                <button type="submit" className="btn ml-5 btn-outline-light
                                                ">Update</button><br /><span className="text-center">
                                                <p className={messagecolorblockprice}>
                                                {messageblockprice}</p>
                                                </span>
                                                </form >
                                                <form onSubmit={this.lightbrickstock} 
                                                className="text-center mt-4">
                                                <div className="pt-2 form-group">
                                                    <label className="
                                                    text-light" htmlFor="block-price ">Light Brick Stock 
                                                    :</label>
                                                    <input required onChange={this.changelightbrickstock}
                                                    className="bg-dark ml-3 text-light
                                                     " type="number" />
            
                                                </div>
                                                <button type="submit" className="btn ml-5 btn-outline-light
                                                ">Update</button><br /><span className="text-center">
                                                <p className={messagecolorlightprice}>
                                                {messagelightprice}</p>
                                                </span>
                                                </form>
                                                <form  onSubmit={this.normalbrickstock}
                                                className="text-center mt-4">
                                                <div className="pt-2 form-group">
                                                    <label className="
                                                    text-light" htmlFor="block-price">Normal
                                                     Brick Stock:</label>
                                                    <input required onChange={this.changenormalbrickstock} 
                                                    className="bg-dark  text-light
                                                     " type="number" />
            
                                                </div>
                                                <button type="submit" className="btn ml-5 btn-outline-light
                                                ">Update</button><br /><span className="text-center">
                                                    <p className={messagecolornormalprice}>
                                                    {messagenormalprice}</p>
                                                    </span>
                                            </form>
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-5 pt-5 pb-5 bg-dark">
                                <h4 className="text-light text-center pb-4">People who have recently 
                                contacted you</h4>
                               <div>
                                  <h5 className="text-danger text-center pb-2">To delete all enteries , press the button below.</h5>
                                  <div className=" text-center pb-3">
                                      <form onSubmit={this.deletetable}>
                                      <button type="submit" className="btn btn-danger">Delete</button>

                                      </form>
                                      </div>
                                  <div className="text-center pb-2 "><h5 className={tablecolor}>{tablemessage}</h5></div>
                               <table className="text-light bg-dark s">
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Date/time</th>
               
              </tr>
              {    table.map((output)=> <Table key={output.id} output={output}/>
                                                        )
                                                       
             }
              
            </table>
                               </div>
            
                            </div>
                            
                        </div>

                    );
                }

           
              
            }
        </Consumer>
        );
     
       
       
    }
}
export default Dashboard;
