
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset, logout } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

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
    if (password !== re_password) {
    } else {
      const userData = {
        email,
        password,
        first_name,
        last_name,
        re_password
      };
      console.log("SIGNUP")
      console.log(userData)
      dispatch(register(userData, navigate));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, dispatch]);


  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('./bg-04.jpg')", // Ensure this path is correct
      }}
    >
      {/* Background image with opacity and blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg opacity-80"
        style={{
          backgroundImage: "url('./bg-04.jpg')", // Ensure this path is correct
        }}
      ></div>

      {/* Sign up form */}
      <div className="relative bg-green text-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              onChange={handleChange}
              name="first_name"
              value={first_name}
              type="text"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              onChange={handleChange}
              name="last_name"
              value={last_name}
              type="text"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              onChange={handleChange}
              value={email}
              type="email"
              name="email"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              onChange={handleChange}
              value={password}
              type="password"
              name="password"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              onChange={handleChange}
              value={re_password}
              type="password"
              name="re_password"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Confirm your password"
              required
            />
          </div>

          <br />

          <button
            type="submit"
            className="w-full py-4 bg-white text-green text-2xl font-bold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Signup
          </button>

          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-white underline hover:text-gray-200">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;