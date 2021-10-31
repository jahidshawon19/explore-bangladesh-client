import React from 'react';

const Team = () => {
    const imageStyle ={
        height:"100px",
        width:"100px",
        borderRadius:"50%"
    }
    return (
        <div>
            <section className="py-5">
                <div className="container">
                    <h2 className="text-secondary mt-2 text-center">Explore Bangladesh Team</h2>
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <div className="single-team text-center">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" style= {imageStyle}  className="img-fluid"/>
                            <h4 style={{fontSize:'16px'}}>Emaz Uddin Fahim</h4>
                            <p style={{fontSize:'12px'}}>Founder & CEO</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-team text-center">
                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" style= {imageStyle}  className="img-fluid"/>
                            <h4 style={{fontSize:'16px'}}>Sadrul Tanim Chowdury</h4>
                            <p style={{fontSize:'12px'}}>Investor</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-team text-center">
                            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" style= {imageStyle}  className="img-fluid"/>
                            <h4 style={{fontSize:'16px'}}>Rimon Uddin</h4>
                            <p style={{fontSize:'12px'}}>Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Team;