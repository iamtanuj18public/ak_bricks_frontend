import React, { Component } from 'react';
import {v4 as uuid} from "uuid";
import { Consumer } from '../Contextapi';
import PandSPS from "./PandSPS";


 class PandS extends Component {
    
       
      

  
    render() {
        return(
        <Consumer>
            {
                (value)=>
                { const {priceandstock}=value;

                    return(
                        <div className="container-fluid pages-background-color mt-5 py-5">
                        <div className="mt-5  container pb-5 pt-5 pages-background-color">
                            <div className="row  pb-5 pt-3">
                               
                                    { priceandstock.map(
                                    (output)=>
                                    <PandSPS key={uuid()} output={output}/>
                                ) }
        
        
                              
                               
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
export default PandS;
