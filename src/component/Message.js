import React , {Component} from 'react';
import axios from "axios";

class Message extends Component {
    state={
        contact:"",
        name:"",
        datetime:"",
        message:"",


    };
    async componentDidMount() {
        const response = await axios.get(
          `https://flask-app-ak-bricks-backend.herokuapp.com/api/contact?id=${this.props.match.params.id}` 
        );
        const isSuccessful = response.data.isSuccessful;
    
        if (isSuccessful) {
          this.setState({
            name: response.data.result.name,
            contact: response.data.result.contact,
            message: response.data.result.message,
            datetime: response.data.result.datetime,
          });
        }
      }
   
    
    render()
     { const { name, contact, message,datetime } = this.state;
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
export default Message;