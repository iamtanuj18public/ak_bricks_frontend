import React from 'react';
import Block from "../assets/BLOCK.jpg"
import Light from "../assets/LIGHTBRICK.jpg"
import Normal  from "../assets/NORMALBRICK.jpg"

 function Homepagepns(props) {
     const {blockstock,blockprice
    ,lightbrickstock,lightbrickprice,normalbrickstock,normalbrickprice}=props.output;

    return (
        <>
         <div className="col-12 pt-5 col-md-4">
                                    <img className=" " style={{height:"250px", width:"250px"}} 
                                    src={Block} alt="" />
                                       <h6 className="text-light">Block</h6>
                                       <h6 className="text-light">Stock: {blockstock} Pieces</h6>
                                       <h6 className="text-light">Price: {blockprice}₹ /piece</h6>

                                </div>
                                <div className="col-12 pt-5 col-md-4">
                                <img style={{height:"250px", width:"250px"}} 
                                 src={Light} alt="" />
                                    <h6 className="text-light">Light Brick</h6>
                                    <h6 className="text-light">Stock: {lightbrickstock} Pieces</h6>
                                    <h6 className="text-light">Price: {lightbrickprice}₹ /piece</h6>
                                    
                                </div>
                                <div className="col-12 pt-5 col-md-4">
                                <img style={{height:"250px", width:"250px"}} 
                                 src={Normal} alt="" />
                                 <h6 className="text-light">Normal Brick</h6>
                                 <h6 className="text-light">Stock: {normalbrickstock} Pieces</h6>
                                 <h6 className="text-light">Price: {normalbrickprice}₹ /piece</h6>
                                    
                                </div>
            
        </>
    );
}
export default Homepagepns;
