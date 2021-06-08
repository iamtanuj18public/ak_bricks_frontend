import React from 'react';
import { Consumer } from '../Contextapi';
import Mappedmessage from './Mappedmessage';

 function Message(props) {
     return(
        <Consumer >
            {
                (value)=>
                
                { 
                    const {table}=value;
                    

                   
                    return (
                      <>
                          {    table.map((output)=> <Mappedmessage key={output.id} output={output}/>
                                                        )
                                                       
             }
                      </>
                     
                    );

                }
            }

        </Consumer>

     );
    
    
}
export default Message;