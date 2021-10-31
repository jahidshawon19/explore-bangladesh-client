import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router';
import { useRef } from 'react/cjs/react.development';
import Footer from '../Footer/Footer';
const OrderPlace = () => {

    const {id} = useParams()

    const[destination, setDestination] = useState({})
    useEffect(()=>{
        fetch(`https://warm-chamber-83777.herokuapp.com/orders/${id}`)
        .then(res => res.json())
        .then(data => setDestination(data))

    }, [])



    const destinationRef = useRef()
    const paymentRef = useRef()
    const transactionIdRef = useRef()
    const fullNameRef = useRef()
    const emailRef = useRef()
    const mobileRef = useRef()
    const addressRef = useRef()
    const genderRef = useRef()
    const locationRef = useRef()


    const handleBooking = e =>{
        
        const destinationName = destinationRef.current.value 
        const payment = paymentRef.current.value 
        const transactionId = transactionIdRef.current.value 
        const fullName = fullNameRef.current.value 
        const email = emailRef.current.value 
        const mobile = mobileRef.current.value 
        const address = addressRef.current.value 
        const gender = genderRef.current.value 
        const location = locationRef.current.value 


       

        const newBooking = {destinationName,payment,transactionId,fullName, email, mobile, address, location, gender}
        fetch('https://warm-chamber-83777.herokuapp.com/order',{

            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newBooking)

        })
        .then(res=> res.json())
        .then(data => {
            if(data.insertedId){
                alert('Thank You For your Booking')
                e.target.reset()
            }
        })
        e.preventDefault()
    }


    return (
        <div>
            <Header></Header>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        
                        <div className="card">
                        <div className="card-header">
                            Details About Destination
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{destination.destTitle}</h3>
                            <p className="card-text lead">{destination.description}</p>
                            
                            
                        </div>
                        </div>
                       
                        </div>
                        <div className="col-lg-6">
                        <img src={destination.destinationPhotoUrl} alt="" className="img-fluid rounded" />
                        </div>
                    </div>

                    <div className="row mt-5 bg-light p-3">
                        
                        <div className="col-lg-12">
                        <h3 className="text-danger text-center mt-5">Booking Form</h3>
                        <form onSubmit={handleBooking}>
                        <div className="form-group">
                                <label>Destination</label>
                                <input type="text" className="form-control" ref={destinationRef} value={destination.destTitle}/>
                        </div>

                        <div className="form-group">
                                <label>Payment (BDT)</label>
                                <input type="text" className="form-control" ref={paymentRef} value={destination.price}/>
                        </div>
                            <div className="form-group">
                                <label>Bikas/ Transaction ID</label>
                                <input type="text" className="form-control" ref={transactionIdRef} required />
                            </div>

                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" ref={fullNameRef} required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" ref={emailRef} required/>
                            </div>
                            <div className="form-group">
                                <label>Mobile No</label>
                                <input type="text" className="form-control" ref={mobileRef} required />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea rows="6" className="form-control" ref={addressRef} required></textarea>
                            </div>
                            <div className="form-group">
                            <label>Select Gender</label>
                            <select className="form-control" ref={genderRef} required>
                            <option>Male</option>
                            <option>Female</option>
                            
                            </select>
                            </div>                  
                           
                            <div className="form-group">
                            <label>Select Departure Location</label>
                            <select className="form-control" ref={locationRef} required>
                            <option>GEC</option>
                            <option>2 no gate</option>
                            <option>LalkhanBazar</option>
                            <option>Dewan Hat</option>
                            <option>Agrabadh</option>
                            <option>Khulshi</option>
                            <option>Bohoddarhat</option>
                            </select>
                            </div>
                            <button type="submit" className="btn btn-warning">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default OrderPlace;