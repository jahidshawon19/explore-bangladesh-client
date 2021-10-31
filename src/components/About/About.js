import React from 'react';

const About = () => {
    return (
        <div>
            <section className="py-5 bg-light" id="about">
                <div className="container">
                    <h2 className="text-secondary text-center">Why Explore Bangladesh</h2>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <p className="lead">
                            Explore Bangladesh is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.
                            </p>
                        </div>
                        <div className="col-lg-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Xj4E0Zry6K4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;