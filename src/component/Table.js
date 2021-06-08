import React from 'react';
import {Link} from "react-router-dom";

 function Table(props) {
     const {name,contact,datetime,id}=props.output;
    return (
        <>
         <tr>
            <td>{name}</td>
            <td>{contact}</td>
            <td>{datetime} <br /> 
            <Link to={`/message/${id}`}>
            <button className="btn mt-2
            btn-sm btn-outline-info">View Details</button>   
            </Link>
        </td>
           
        </tr>
            
        </>
    )
}
export default Table;