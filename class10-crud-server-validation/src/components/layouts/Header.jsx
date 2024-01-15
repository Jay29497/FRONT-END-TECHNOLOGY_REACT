import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../register/Storage";
import { toast } from "react-toastify";

const Header = () => {

    let loginStatus = localStorage.getItem('loginStatus') || false;

    const logoutHandler = async () => {
        if (window.confirm(`Are you sure to logout...?`)) {
            await logoutUser();
        } else {
            toast.warning('Logout Terminated');
        }
    }

    return (
        <div className="navbar navbar-expand-md navbar-dark bg-secondary shadow">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">CRUD-APP</NavLink>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="meun">
                    {
                        loginStatus ? (
                            <Fragment>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to={`/home`} className="nav-link">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={`/create`} className="nav-link">Create</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link btn btn-outline-danger" onClick={logoutHandler}>Logout</NavLink>
                                    </li>
                                </ul>
                            </Fragment>
                        ) : (<Fragment>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={`/login`} className="nav-link">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`/register`} className="nav-link">Register</NavLink>
                                </li>
                            </ul>
                        </Fragment>)
                    }
                </div>
            </div>
        </div>
    )
}
export default Header