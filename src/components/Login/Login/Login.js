import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Header/Header'


const Login = () => {
    const {googleSignIn} = useAuth()
    return (
        <>
          <Header></Header>  
          <section className="py-5">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-4"></div>
                      <div className="col-lg-4 mt-5">
                      <h3 className="text-center text-warning">Please Login</h3>
                      <div className="media bg-light py-3">
                          
                        <img className="img-fluid" style={{height:'80px'}} src="https://www.designbust.com/download/1039/png/google_logo_transparent512.png"  alt="Generic placeholder" />
                        <div className="media-body">
                            <button onClick={googleSignIn} className="mt-4 btn btn-primary">Login with Google</button>
                            
                        </div>
                        </div>
                      </div>
                      <div className="col-lg-4"></div>
                  </div>
              </div>
          </section>
          
        </>
    );
};

export default Login;