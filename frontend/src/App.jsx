import Home from "./pages/Home"
import Tours from "./pages/Tours"
import Contact from "./pages/Contact"
import Protected from "./components/Protected";
import About from "./pages/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useEffect } from "react";
import ActivationPage from './features/ActivationPage'
import ResetPasswordPage from './features/ResetPasswordPage'
import ResetPasswordPageConfirm from './features/ResetPasswordPageConfirm'
import AOS from "aos";
import Thankyou from "./components/Thankyou"
import "aos/dist/aos.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Booking from "./components/Booking";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/package/:id" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activate/:uid/:token" element={<ActivationPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} />
        <Route path="/thankyou" element={<Thankyou />} />
        
      </>
    )
  );

  return (<>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
  );
}