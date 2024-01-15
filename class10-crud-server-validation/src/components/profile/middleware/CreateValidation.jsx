import axios from "axios";
import { omit } from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Create Random User ID
const randId = () => {
    return Math.floor(Math.random() * 1000);
}

// Intial Object
const initState = {
    id: randId(),
    name: "",
    email: "",
    image: "",
    mobile: "",
    address: "",
};

// userForm => form validate custom hook
function UserForm() {
    const [contact, setContact] = useState(initState);
    const [errors, setErrors] = useState({});

    // useNavigate Reference, Interval navigation
    const navigate = useNavigate();

    // Read Value from Input Element
    const readValue = (e) => {
        /* console.log("Parameter Value =", e);
        console.log("Parameter Target =", e.target + "-" + e.target);
        console.log("Input Value =", e.target.name + "-" + e.target.value); */
        const {name, value} = e.target;
        validate(e, name, value);
        setContact({...contact,[name]:value});
    }

    // Validate Function
    const validate = (event, name, value) => {
        /* console.log("Validate Name =", name);
        console.log("Validate Value =", value); */
        switch (name) {
            case "name":
                if (value.length === 0) {
                    errorPrint(name, "Name field must be filled.");
                    } else if (value.length < 3) {
                        errorPrint(name, "Name at least have 3 letter.");
                    } else if (!new RegExp(/^[a-zA-Z\s]+$/).test(value)) {
                        errorPrint(name, "Invalid Name.");
                    } else {
                        let loadash = omit(errors, name);
                        setErrors(loadash);
                    }
            break;
            case "email":
                if (value.length === 0) {
                    errorPrint(name, "Email field must be filled.");
                    } else if (!new RegExp(/^[a-zA-Z0-9\S]+@[a-zA-Z\S]+\.[a-zA-Z\S]+$/).test(value)) {
                        errorPrint(name, "Invalid Email Format.");
                    } else {
                        let loadash = omit(errors, name);
                        setErrors(loadash);
                    }
            break;
            case "image":
                if (value.length === 0) {
                    errorPrint(name, "Image field must be filled.");
                    } else if (!new RegExp(/^\S+$/).test(value)) {
                        errorPrint(name, "Invalid Image URL.");
                    } else {
                        let loadash = omit(errors, name);
                        setErrors(loadash);
                    }
            break;
            case "mobile":
                if (value.length === 0) {
                      errorPrint(name, "Mobile field must be filled.");
                } else if(!new RegExp(/^[6-9]\d{9}$/).test(value)) {
                      errorPrint(name, "Invalid Mobile Number.");
                } else {
                      let loadash = omit(errors, name);
                      setErrors(loadash);
                }
            break;

            case "address":
                if(value.length === 0) {
                    errorPrint(name, "Address must be filled.");
                } else if(!new RegExp(/^([a-zA-Z0-9/\\''(),-/#\s]{2,255})$/).test(value)) {
                    errorPrint(name, "Address is required.");
                } else {
                    let loadash = omit(errors, name);
                    setErrors(loadash);
                }

            break;
            default:
            break;
        }
    }

    // Printing Error Message
    const errorPrint = (prop, msg) => {
        setErrors({...errors, [prop] : msg});
    }

    // Submitting Data to the server
    const submitHandler = async (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(contact).length !== 0) {
            console.log("New Contact = ", contact);

            // HTTP POST Handler
            await axios.post(`/contacts`, contact).then(res=>{
                toast.success("User Created");
                    navigate(`/`);
            }).catch((err) => toast.error(err.message));
            } else {
                toast.error("Some Errors are in Form or Fields are empty.");
            }
        }

    return {
        contact,
        setContact,
        errors,
        readValue,
        submitHandler

    };
}
export default UserForm;
