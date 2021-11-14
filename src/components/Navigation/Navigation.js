import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="https://i.ibb.co/v4PQSMj/logo-white.png" alt="" width="250" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <Link className="me-4 item" to="/home">Home</Link>
                        <Link className="me-4 item" to="/explore">Explore</Link>


                        {user?.email ?
                            <Link className="me-4 item" to="/dashboard/myorder">Dashboard</Link> :
                            <Link></Link>
                        }



                        {
                            user?.email ?
                                <button className="dash-btn" onClick={logOut}>Logout</button> :
                                <Link className="dash-link" to="/login"><button className="dash-btn">Login</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;