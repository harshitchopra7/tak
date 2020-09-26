import React from 'react';
import logo from './logo.jpg';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav () {
    return (
        <nav className="nav">
            <div className="logo-align">
                <Link to="/">
                    <img className="logo" alt="" src={logo} />
                </Link>
                <div className="logo-name">
                    <h2 className="logo-name2">Takshshila</h2>
                    <h3 className="logo-name3">Institute of Engineering and Technology</h3>
                </div> 
            </div>         
            <div className="nav-contents">
                <span className="call">Call us on - 0761-4026500, 2441353 </span>
                <div className="nav-contents2">
                    <Link to="/" className="decoration">
                        <span className="individual">Home</span>
                    </Link>
                    <Link to="/about" className="decoration">
                        <span className="individual">About Us</span>
                    </Link>
                    <Link to="/facilities" className="decoration">
                        <span className="individual">Facilities</span>
                    </Link>
                    <Link to="/aadmission" className="decoration">
                        <span className="individual">Admission</span>
                    </Link>               
                    <Link to="/departments" className="decoration">
                        <span className="individual">Departments</span>
                    </Link>
                    
                </div>
            </div>   
        </nav>
    );
}

export default Nav;