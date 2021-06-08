import React from 'react';

 function Mappedmessage(props) {
     const {name,message,contact,datetime}=props.output;
    return (
         <div  className="container-fluid pages-background-color  py-5 mt-5">
                         
        <div className=" text-center pt-5 pb-3 mt-5">
            <h1 className=" text-info pb-3">Details</h1>

        </div>
        <div className="text-center mb-5 pb-5">
            <table className="text-light mt-5 mb-5">
                <tr>
                    <td>Name:</td>
                    <td  className="bg-dark font-weight-bold stock-head">{name}</td>
                </tr>
                <tr>
                    <td>Message:</td>
                    <td className="bg-dark font-weight-bold stock-head">{message}</td>
                </tr>
                <tr>
                    <td>Phone-Number:</td>
                    <td  className="bg-dark font-weight-bold stock-head">{contact}</td>
                </tr>
                <tr>
                    <td>Date-Time:</td>
                    <td  className="bg-dark font-weight-bold stock-head">{datetime}</td>
                </tr>
            </table>
          


        </div>
            
        </div>
    )
}
export default Mappedmessage;