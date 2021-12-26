import React from 'react';
import { Link } from 'react-router-dom';
const SingleDestination = (props) => {
        
 const {_id, destinationPhotoUrl,price, destTitle} = props.destinationData

 const cardStyle = {
     boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",
     transition: "0.3s"
     

 }



    return (
        <div className="col-lg-3">
            <div className="card text-left mt-2" style={cardStyle}>
               
                <img className="card-img-top img-fluid rounded p-3" src={destinationPhotoUrl} alt="destination" />
              
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize:'16px'}}>
                        {destTitle}
                    </h5>
                    <h5 style={{fontSize:'13px'}}>{price} Taka</h5>

                    <h4 className="text-warning font-weight-bold">*****</h4>

                   <Link to={`orders/${_id}`}><button className="btn btn-info btn-block">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleDestination;