

import React ,{Component} from "react";
import axios from "axios";

 const Context =React.createContext();
 export class Provider extends Component{
   
        state={
            Handler:this.Handler,
            priceandstock: [
               {
                    blockprice:27,
                    blockstock:15121,
                    lightbrickprice:5,
                    lightbrickstock:54564,
                    normalbrickprice:6,
                    normalbrickstock:6514,
                    
               },
              
             
       
       
           ],
           tables:[
               {

                name:"server down",
                contact:"server down",
                message:"server down",
                id:0.000000001,
                datetime:"server down",

               },
           ]
        

       
          
          
          
        };
        async componentDidMount(){
            const  [responseContact,responsePriceAndStock
          ]= await Promise.all([
               axios.get("https://flask-app-ak-bricks-backend.herokuapp.com/api/contact/us/get"),
               axios.get("https://flask-app-ak-bricks-backend.herokuapp.com/api/price/and/stocks/get"),
             
  
          ]);
          const newState={};
  
          if(responseContact.data.isSuccessful )
          { 
              if(responseContact.data.results.length !==0 )
              {
                newState.tables=responseContact.data.results


              }
              else            
                newState.tables=[
                    {
                        "name":"Nothing to show",
                        "contact":"Nothing to show",
                        "message":"Nothing to show",
                        "id":0.0000000000222,
                        "datetime":"Nothing to show",
                        
                    }
                ]


              }
            
            
          
          if(responsePriceAndStock.data.isSuccessful && responsePriceAndStock.data.results.length !==0)
          {
          
              newState.priceandstock=responsePriceAndStock.data.results
          }
         
          
          this.setState(newState);
          
         
  
         }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;