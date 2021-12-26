import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <section id="banner" className="py-5 text-center text-light">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <h1 className="display-2 mt-5 pt-5 text-light">Let's Make Your Best Trip Ever</h1>
                                <p className="lead">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
                                <Link to="/" className="explore_btn btn btn-outline-light btn-lg">DISCOVER NOW</Link>
                            </div>
                            <div className="col-lg-6 mt-5 d-none d-lg-block">
                                <img src="https://image.freepik.com/free-vector/flat-travel-background_23-2148043314.jpg" alt="poster" className="img-fluid"  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;