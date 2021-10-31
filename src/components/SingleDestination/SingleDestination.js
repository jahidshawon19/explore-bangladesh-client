import React from 'react';
import { Link } from 'react-router-dom';
const SingleDestination = (props) => {
        
        const {_id, destinationPhotoUrl,price, destTitle} = props.destinationData
    return (
        <div className="col-lg-3">
            <div className="card text-left">
                <img className="card-img-top img-fluid rounded" src={destinationPhotoUrl} alt="destination" />
                <div className="card-body">
                    <h5 className="card-title">
                        {destTitle}
                    </h5>
                    <h5 className="text-warning">{price} Taka</h5>

                   <Link to={`orders/${_id}`}><button className="btn btn-info btn-block">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleDestination;