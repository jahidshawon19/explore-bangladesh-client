import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const BookingList = () => {
    
    const [booking, setBooking] = useState([])
    useEffect(()=>{
        fetch('https://warm-chamber-83777.herokuapp.com/booking')
        .then(res=> res.json())
        .then(data=> setBooking(data))
    })

    // DELETE BOOKING 

    const handleDeleteBooking = id =>{

        const proceed = window.confirm('Are you sure to delete?')
        if(proceed){
            const url = `https://warm-chamber-83777.herokuapp.com/booking/${id}`
            fetch(url, {
                method:'DELETE',
    
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remainBooking = booking.filter(book => book._id !== id)
                    setBooking(remainBooking)
                }
            })
        }


    }

    return (
        <div>
            <AdminNav></AdminNav>
            <section className="py-5">
                <div className="container">
                    <h3 className="text-center">Total Booking: {booking.length}</h3>
                    <div className="row mt-4">
                <div className="col-lg-12">
                <table className="table table-striped">
                    <thead className= "thead-dark">
                        <tr>

                        <th scope="col">Destination</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Transaction ID</th>
                        <th scope="col">contact</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Departure</th>
                        <th scope="col">Payment</th>
                        <th>Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                        {
                            booking.map( (book)=> (
                                <tr>
                                
                                <td>{book.destinationName}</td>
                                <td>{book.fullName}</td>
                                <td>{book.transactionId}</td>
                                <td>{book.mobile}</td>
                                <td>{book.gender}</td>
                                <td>{book.email}</td>
                                <td>{book.location}</td>
                                <td>{book.payment}</td>

                                <td><button onClick={()=>handleDeleteBooking(book._id)} className="btn btn-danger btn-sm">Cancel</button></td>
                                </tr>
                            ))
                        }


                      
                    
                     
                    </tbody>
                    </table>
                </div>
            </div>
                </div>
            </section>
        </div>
    );
};

export default BookingList;