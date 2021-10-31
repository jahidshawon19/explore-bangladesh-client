import React, { useRef } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const AddDestination = () => {

    const destPhotoUrlRef = useRef()
    const destTitleRef = useRef()
    const priceRef = useRef()
    const descriptionRef  = useRef()


   const handleAddDestination = (e) =>{

        const destinationPhotoUrl = destPhotoUrlRef.current.value 
        const destTitle = destTitleRef.current.value 
        const price = priceRef.current.value
        const description = descriptionRef.current.value 

        const newDestination = {destinationPhotoUrl, destTitle, price, description}

        fetch('https://warm-chamber-83777.herokuapp.com/destinations',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newDestination)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Destination Added Successfully')
                e.target.reset()
            }
        })

        
        

            e.preventDefault()
    }


    return (
        <div>
            <AdminNav></AdminNav>
            <section className="py-5">
                <div className="container">
                    <h3 className="text-danger text-center">Add Destination Information</h3>
                    <div className="row">
                        <div className="col-lg-6">

                        <form onSubmit={handleAddDestination} className="mt-3">

                        <div className="form-group">
                            <label>Destination Photo URL</label>
                            <input type="text" className="form-control" ref={destPhotoUrlRef} />
                        </div>

                        <div className="form-group">
                            <label>Destination Title</label>
                            <input type="text" className="form-control" ref={destTitleRef}  />
                        </div>


                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" className="form-control" ref={priceRef} />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" rows="10"  ref={descriptionRef}></textarea>
                        </div>
                     
                        <button type="submit" className="btn btn-primary">Add Now</button>
                        </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AddDestination;