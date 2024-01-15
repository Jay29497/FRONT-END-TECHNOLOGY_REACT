import { toast } from "react-toastify";

// Initial Data
const users = JSON.parse(localStorage.getItem("crud-server")) || [];

// Save Data
const saveUsers = (data) => {
    localStorage.setItem("crud-server", JSON.stringify(data));
};

// Register
const registerUser = async (user) => {
    console.log("Register =", user);

    const extEmail = users.find((item) => item.email === user.email);
    const extMobile = users.find((item) => item.mobile === user.mobile);

    if (extEmail) {
        toast.warning(`${user.email} already exits.`);
    } else if (extMobile) {
        toast.warning(`${user.mobile} already exits.`);
    } else {
        users.push(user);
        saveUsers(users);
        toast.success(`Hi, ${user.name} you have registered successfully`);
        setTimeout(() => {
            window.location.href = "/login";
        }, 2000);
    }
};

// Login Handler
const loginUser = async (user) => {
    const extUser = users.find((item) => item.email === user.email);
    if (!extUser) {
        toast.warning(`${user.email} doesn't exists.`);
    } else {
        if (extUser.password === user.password) {
            localStorage.setItem("loginStatus", true);
            toast.success("User Login Success");
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        } else {
            toast.warning("Passwords are not matched");
        }
    }
};

// Logout Handler
const logoutUser = async () => {
    if (localStorage.getItem("loginStatus") === "true") {
        localStorage.removeItem("loginStatus");
        toast.success("Successfully logout");
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    }
};

export {registerUser, loginUser, logoutUser};
