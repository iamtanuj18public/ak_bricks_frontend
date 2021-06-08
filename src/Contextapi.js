

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
           table:[
            {   id:1,
                name:"Server Down",
                contact:"Server Down",
                message:"Server Down",
                datetime:"Server Down",

            },
            
           ],
           username:"anilkumar",
           password:"jatin123",
          
          
          
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
              if(responseContact.data.results.length !==0)
              {
                newState.table=responseContact.data.results

              }
              else
              {
                newState.table=[
                    {
                        "name": "NOTHING TO SHOW",
                        "contact": "NOTHING TO SHOW",
                        "datetime": "NOTHING TO SHOW",
                        "id": "NOTHING TO SHOW",
                        "message": "NOTHING TO SHOW",
                        
                    }
                ]


              }
            
            
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