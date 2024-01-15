import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Login from "./components/register/Login";
import Register from "./components/register/Register";
import Pnf from "./components/Pnf";
import { ToastContainer } from "react-toastify";
import Home from "./components/profile/Home";
import Create from "./components/profile/Create";
import Update from "./components/profile/Update";
import ProtectedRoute from "./components/authGuard/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer autoClose={4000} position={"top-right"} />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path={`/`}  element={<Home />} />
          <Route path={`/home`}  element={<Home />} />
          <Route path={`/create`}  element={<Create />} />
          <Route path={`/update/:id`}  element={<Update />} />
        </Route>
        <Route path={`/login`}  element={<Login />} />
        <Route path={`/register`}  element={<Register />} />
        <Route path={`/*`}  element={<Pnf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
