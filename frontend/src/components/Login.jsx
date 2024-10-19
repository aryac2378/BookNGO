import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset, getUserInfo } from "../features/auth/authSlice";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if(isSuccess){
      navigate('/')
    }

    dispatch(reset());
    dispatch(getUserInfo());
  }, [isError, isSuccess, user, navigate, dispatch]);





  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('./bg-04.jpg')", // Replace with your background image URL
      }}
    >
      {/* Background image with blur and opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md opacity-70"
        style={{
          backgroundImage: "url('./bg-04.jpg')", // Replace with your background image URL
        }}
      ></div>

      {/* Login form */}
      <div className="relative bg-green text-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Log In</h2>

        <form>
          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your email"
              onChange={handleChange}
              value={email}
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your password"
              onChange={handleChange}
              value={password}
              required
            />
          </div>
          <div className="flex justify-end">
              <Link
                to="/reset-password"
                className="text-md bg-green text-[white] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          <br></br>
          <button
            type="submit"
            onClick={handleSubmit} 
            className="w-full py-4 bg-white text-green text-2xl font-bold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Log in
          </button>

          <p className="text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white underline hover:text-gray-200">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
