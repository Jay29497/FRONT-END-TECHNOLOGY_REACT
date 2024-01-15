import React, { useEffect } from "react";
import UserForm from "./middleware/CreateValidation";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Update  = () => {
    const {contact, setContact, errors, readValue} = UserForm();

    const params = useParams();

    useEffect(()=>{
        axios.get(`/contacts/${params.id}`)
        .then((res)=>{
            console.log(res.data);
            setContact(res.data);
        }).catch(error => toast.error(error.message));
    },[]);

    const navigate = useNavigate();

    let updateHandler = async (e) => {
        e.preventDefault();
        console.log(e);
        axios.patch(`/contacts/${params.id}`, contact)
        .then((res)=>{
            toast.success("User Details Updated");
            setTimeout(()=>{
                navigate(`/`);
            },2000);
        }).catch(error => toast.error(error.message));
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                    <div className="card shadow">
                        <div className="card-header bg-secondary shadow">
                            <h1 className="text-white text-center">UPDATE USER</h1>
                        </div>
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={updateHandler}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" className="form-control" required minLength={4} maxLength={10} placeholder="Full Name" onChange={readValue} value={contact.name}/>
                                    {
                                        errors.name ? (
                                            <div className="alert alert-danger">
                                                {errors.name}
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" required placeholder="username@domain.com" onChange={readValue} value={contact.email}/>
                                    {
                                        errors.email ? (
                                            <div className="alert alert-danger">
                                                {errors.email}
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="image">Profile Image</label>
                                    <input type="url" name="image" id="image" className="form-control" required placeholder="Enter url format of image link" onChange={readValue} value={contact.image}/>
                                    {
                                        errors.image ? (
                                            <div className="alert alert-danger">
                                                {errors.image}
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" className="form-control" required placeholder="Mobile Number" onChange={readValue} value={contact.mobile}/>
                                    {
                                        errors.mobile ? (
                                            <div className="alert alert-danger">
                                                {errors.mobile}
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="address">Address</label>
                                    <textarea name="address" id="address" cols="30" rows="5" className="form-control" required placeholder="Address" onChange={readValue} value={contact.address}></textarea>
                                    {
                                        errors.address ? (
                                            <div className="alert alert-danger">
                                                {errors.address}
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Update" className="btn btn-outline-secondary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update