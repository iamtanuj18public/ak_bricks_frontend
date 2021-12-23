import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
 <div className="pages-background-color mt-5 pt-5 container-fluid">
      <div className="pages-background-color container  mt-5 pt-5 ">
    <div className="row pt-5 mt-3 justify-content-center  ">
        <div className="col-6  text-center">
            <div className="error-template">
                <h1 className="text-danger">
                    Oops!</h1>
                <h2 className="text-danger">
                    404 Not Found</h2>
                <div className="error-details text-info pb-4 pt-4-2">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <Link to="/" className="btn  mt-3 btn-primary btn-lg"><i class="fas fa-home"></i>

                    Take Me Home </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/contact-us" className="btn mt-3  btn-dark btn-lg"><i class="fas fa-envelope"></i> Contact Support </Link>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    </div>
</div>


 </div>
       
       
    );
}
export default  NotFound;
