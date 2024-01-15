import React, {useRef } from "react";
import { loginUser } from "./Storage";

const Login = () => {
    const fEmail = useRef();
    const fPass = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            email : fEmail.current.value,
            password : fPass.current.value
        }
        console.table('login data =', data);

        await loginUser(data);
    }
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                    <div className="card shadow">
                        <div className="card-header bg-secondary shadow">
                            <h1 className="text-white text-center">LOGIN</h1>
                        </div>
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group my-3">
                                <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" required ref={fEmail} />
                                </div>
                                <div className="form-group my-3">
                                <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" required ref={fPass} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn btn-outline-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
