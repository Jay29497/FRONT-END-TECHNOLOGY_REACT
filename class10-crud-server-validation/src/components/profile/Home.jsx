import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Users from "./users/Users";

const Home  = () => {
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        await axios.get(`/contacts`)
        .then(res => {
            console.log(res.data);
            setContacts(res.data);
        }).catch(error => toast.error(error.message));
    }

    useEffect(() => { getContacts() }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                <h1 className="text-secondary text-center">USERS</h1>
                </div>
            </div>
            <div className="row">
                {
                    contacts && contacts.map((item, index)=>{
                        return(<Users {...item} key={index}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Home