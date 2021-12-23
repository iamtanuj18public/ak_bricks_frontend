import React,{useState} from 'react';
import {v4 as uuid} from "uuid";
const options = [
  
    { id:1,
      label: "Block",
      value: "Block",
    },
    { id:2,
      label: "Light Brick",
      value: "Light Brick",
    },
    { id:3,
      label: "Normal Brick",
      value: "Normal Brick",
    },
   
  ];

 function PandSPS(props) {
     
    const [item,setItem]=useState('Block');
    const [quantity,setQuantity]=useState('');
    const [stock,setStock]=useState('');
    const [stockcolor,setStockcolor]=useState('');
    const [price,setPrice]=useState('');


    
    
     const {blockprice,blockstock,lightbrickprice,lightbrickstock,
    normalbrickprice,normalbrickstock}=props.output;
   
    const onSubmit=(e)=>{
        e.preventDefault();
        if( item==='Block' & quantity<=blockstock){
            setStock('Available');
            setStockcolor('text-success');
            setPrice(quantity*blockprice);
          
           

        }
       if(item==='Light Brick' && quantity<=lightbrickstock )
        {
            setStock('Available');
            setStockcolor('text-success');
            setPrice(quantity*lightbrickprice);

        }
      if( item==='Normal Brick' && quantity<=normalbrickstock )
        {
            setStock('Available');
            setStockcolor('text-success');
            setPrice(quantity*normalbrickprice);
           

        }
         if( item==='Block' && quantity>blockstock ){
            setStock('Out of stock , Please call and place your order');
            setStockcolor('text-danger');
            setPrice(quantity*blockprice);
       

        }
     if(  item==='Light Brick' && quantity>lightbrickstock )
        {
            setStock('Out of stock , Please call and place your order');
            setStockcolor('text-danger');
            setPrice(quantity*lightbrickprice);


        }
       if( item==='Normal Brick' && quantity>normalbrickstock )
         {  setStock('Out of stock , Please call and place your order');
                setStockcolor('text-danger');
                setPrice(quantity*normalbrickprice);
     

        }
    

    }
    return (
        <>
             <div className="col-12 text-center mb-5 pb-5 col-md-6">
             <h4 className="text-light ">Price</h4>
                                    <br />
                                    <h6 className="text-light pb-2">Blocks: {blockprice}₹/ piece</h6>
                                    <h6 className="text-light pb-2">Light Brick: {lightbrickprice}₹ /piece</h6>
                                    <h6 className="text-light">Normal Brick: {normalbrickprice}₹ /piece</h6>
                                    <br />
                                    <br />
                                    <h4 className="text-light ">Stock</h4>
                                    <br />
                                    <h6 className="text-light pb-2">Blocks: {blockstock} Pieces Available</h6>
                                    <h6 className="text-light pb-2">Light Brick: {lightbrickstock} Pieces Available</h6>
                                    <h6 className="text-light">Normal Brick: {normalbrickstock} Pieces Available</h6>
                                    </div>
                                    <div className="col-12 bg-dark mb-2 pb-5 pt-5 col-md-6">
                                    <h4 className="stock-head pb-4">To check estimated price 
                                    and availablity of product please fill the details below.</h4>
                                 

                     
                     
                                    <form onSubmit={onSubmit}>
                                        <div className="bg-dark">
                                            <div className="form-group">
                                                <label className="text-light"
                                                 htmlFor="Choose-item">Choose item*</label>
                                                  <select required    value={item}   
                                                  onChange={e => setItem
                                                               (e.target.value)} className="bg-dark form-control text-light"
                                               
                                                  >
                                                                {options.map((option) => (
                                                                <option className="bg-dark "
                                                                  key={uuid()} >
                                                                     {option.label}
                                                                    
                                                                 </option>
                                                                 
                                                                ))}
                                                                
                                                            </select>
                                                                                        
                                                
                                            </div>
                                            <div className="form-group">
                                                <label className="text-light "
                                                 htmlFor="Choose-item">
                                                     Please type the Quantity*</label>
                                                 <input   required
                                                 type="number" name="quantity" className="
                                                  text-light form-control bg-dark" 
                                                  value={quantity} onChange={e => setQuantity
                                                  (e.target.value)}  />
                                                
                                            </div>
                                        </div>
                                        <button type="submit" className="btn 
                                        float-right btn-outline-light">
                                            Submit
                                        </button>
                                    </form>
                                    <div className="pt-5" >
                                        <h5 className="text-light pt-3">Estimated Price: {price} ₹ </h5>
                                        <h5 className="text-light pt-3">Availablity: <span className={stockcolor}>{stock}</span> </h5>
                                    
                                    </div>
                               
                                    
                                </div>
        </>
    )
}
export default PandSPS;
