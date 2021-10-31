import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    const ulStyle = {
        listStyleType:"none",
        margin: "0",
        padding: "15",
        overflow: "hidden",
        backgroundColor: "#333"
    }
    const liStyle = {
        display:"inline",
        marginLeft:"10px",
    }
    return (
        <div>
           
            <ul  style={ulStyle}>
            <li style={liStyle}><Link to="/booking">Home</Link></li>
            <li style={liStyle}><Link to="/booking">Booking List</Link></li>
            <li style={liStyle}><Link to="/add-destination">Add Destination</Link></li>
            <li style={liStyle}><Link to="/home">Visit Site</Link></li>
        
            </ul>
           
        </div>
    );
};

export default AdminNav;