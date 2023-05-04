import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/tutorials"} className="navbar-brand">
                    MotorRental
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/tutorials"} className="nav-link">
                            Hire a car
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Help
                        </Link>
                    </li>
                </div>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <Link to={""} className="nav-link">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item bg-primary">
                        <Link to={""} className="nav-link">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={""} className="nav-link">
                            <img id="burger" src={require('../assets/white-menu-icon-4.jpg')} alt="burger"/>
                        </Link>
                    </li>
                </div>
            </nav>
        );
    }
}
