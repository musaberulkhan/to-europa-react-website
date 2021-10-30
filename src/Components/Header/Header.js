import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../Images/logo.png';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    // ----------- Authentication Info --------
    const { user, logOut } = useAuth();


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="navbar-brand-logo" alt="" />
                        To-Europa</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/">About</Link>
                            <Link className="nav-link" to="/packages">Packages</Link>
                            <Link className="nav-link" to="/">Contact</Link>
                        </div>
                        <div className="navbar-nav">
                            {/* ----------- User Information -------- */}
                            {
                                user?.email ?
                                    (
                                        <div>
                                            <span className="text-muted"><small>{user.email}</small></span>
                                            <button className="btn btn-dark ms-2" onClick={logOut}> Log Out </button>
                                        </div>
                                    )
                                    :
                                    (
                                        <Link className="nav-link" to="/login">Login</Link>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;