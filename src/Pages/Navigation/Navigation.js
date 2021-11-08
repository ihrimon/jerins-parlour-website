import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navigation = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#f63e7b"
    };
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-color">
            <div class="container py-3">
                <NavLink to="/">
                    <img src={logo} width="120px" alt="" />
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/admin">Admin</NavLink>
                        </li>
                    </ul>


                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/login"><button className="btn theme-btn text-light px-4 me-1" type="submit" >Login</button></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;


