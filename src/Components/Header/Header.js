import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import Logo from '../../Images/logo.png';
import useAuth from '../../Hooks/useAuth';


const Navigation = () => {
    // ----------- Authentication Info --------
    const { user, logOut } = useAuth();

    // ----------- Navigation --------
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container">
                <NavLink className="navbar-brand me-3" to="/">
                    <img className="img-fluid navbar-brand-logo" src={Logo} alt="" />
                    KHAN EYE HOSPITAL</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                        <NavLink className="nav-link" to="/doctors">Doctors</NavLink>

                        <li className="nav-item dropdown">
                            <NavLink to="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin Panel
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><NavLink className="dropdown-item" to="/">My Orders</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Manage All Orders</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Add A New Service</NavLink></li>
                            </ul>
                        </li>
                    </div>
                </div>


                {/* ----------- User Information -------- */}
                <div>
                    {
                        user?.email ?
                            (
                                <div>

                                    <div>
                                        <span className="text-muted"><small>{user.email}</small></span>
                                        <button className="btn btn-light ms-2" onClick={logOut}> Log Out </button>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            )
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navigation;

// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import './Header.css';
// import logo from '../../Images/logo.png';
// import useAuth from '../../Hooks/useAuth';

// const Header = () => {
//     // ----------- Authentication Info --------
//     const { user, logOut } = useAuth();


//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container">
//                     <Link className="navbar-brand" to="/">
//                         <img src={logo} className="navbar-brand-logo" alt="" />
//                         To-Europa</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
//                         <div className="navbar-nav">
//                             <Link className="nav-link" to="/">Home</Link>
//                             <Link className="nav-link" to="/">About</Link>
//                             <Link className="nav-link" to="/packages">Packages</Link>
//                             <Link className="nav-link" to="/">Contact</Link>
//                             <li class="nav-item dropdown">
//                                 <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Admin
//                                 </Link>
//                                 <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                     <li><Link class="dropdown-item" href="#">Action</Link></li>
//                                     <li><Link class="dropdown-item" href="#">Another action</Link></li>
//                                     <li><Link class="dropdown-item" href="#">Something else here</Link></li>
//                                 </ul>
//                             </li>
//                         </div>
//                         <div className="navbar-nav">
//                             {/* ----------- User Information -------- */}
//                             {
//                                 user?.email ?
//                                     (
//                                         <div>
//                                             <span className="text-muted"><small>{user.email}</small></span>
//                                             <button className="btn btn-dark ms-2" onClick={logOut}> Log Out </button>
//                                         </div>
//                                     )
//                                     :
//                                     (
//                                         <Link className="nav-link" to="/login">Login</Link>
//                                     )
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Header;