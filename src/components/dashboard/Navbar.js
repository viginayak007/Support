import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
            <Link className="navbar-brand" to="/">SUPPORT</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" style={{ paddingRight: '100px' }}>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown" >
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            User Name
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/admin">Admin</Link>
                            <Link className="dropdown-item" to="/change_password">Change Password</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/signin">Sign Out</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;