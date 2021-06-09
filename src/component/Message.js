import React from 'react';
import { Consumer } from '../Contextapi';

 function Message(props) {
     return(
        <Consumer >
            {
                (value)=>
                
                { 
                    const {tables}=value;
                    const id=props.match.params.id;
                    const data=tables.filter((data)=>data.id==id)[0];

                    const {name,contact,message,datetime}=data; 
                    return (
                        <div  className="container-fluid pages-background-color pt-5 mt-5">
                              
                               <div className="container pt-5 pages-backround-color">
                                   <h3 className="text-light text-center pb-5 pt-5"> Details</h3>

                                   <table className="pt-4">
                                       <tr className="text-light">
                                           <td>
                                               Name:

                                           </td>
                                           <td className="text-success bg-dark">
                                               {name}

                                           </td>
                                       </tr>
                                       <tr className="text-light">
                                           <td>
                                               Contact:

                                           </td>
                                           <td className="text-success bg-dark">
                                               {contact}

                                           </td>
                                       </tr>
                                       <tr className="text-light">
                                           <td>
                                               Message:

                                           </td>
                                           <td className="text-success bg-dark">
                                               {message}

                                           </td>
                                       </tr>
                                       <tr className="text-light">
                                           <td>
                                               date-time:

                                           </td>
                                           <td className="text-success bg-dark">
                                               {datetime}

                                           </td>
                                       </tr>

                                   </table>
                        

                        </div>
                       

                        
                        
                        </div>
                     
                    );

                }
            }

        </Consumer>

     );
    
    
}
export default Message;