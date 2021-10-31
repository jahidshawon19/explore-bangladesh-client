import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    const ulStyle = {
        listStyleType:"none",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        backgroundColor: "#333"
    }
    return (
        <div>
            <ul  style={ulStyle}>
            <li><Link to="/booking">Home</Link></li>
            <li><Link to="/booking">Booking List</Link></li>
            <li><Link to="/add-destination">Add Destination</Link></li>
            <li><Link to="/home">Visit Site</Link></li>
        
            </ul>
        </div>
    );
};

export default AdminNav;