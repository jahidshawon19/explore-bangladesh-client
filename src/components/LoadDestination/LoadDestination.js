import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import SingleDestination from '../SingleDestination/SingleDestination';

const LoadDestination = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(()=>{
        fetch('https://warm-chamber-83777.herokuapp.com/destinations')
        .then(res=> res.json())
        .then(data => setDestinations(data))
    }, [])
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <h2 className="text-secondary mt-2 text-center">Choose Your Destination</h2>
                    <div className="row mt-5">
                        {
                            destinations.map(dest => <SingleDestination
                                key={dest._id}
                                destinationData = {dest}
                            
                            ></SingleDestination>)
                        }
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default LoadDestination;