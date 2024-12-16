<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import './TeacherSignUp.css'; // Corrected CSS import to match the file name
import Slider from '../Slider/Slider';
import {useDispatch} from "react-redux"
import {toast} from "react-toastify"
import { studentLogin } from '../../action/studentAction';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {

  const  dispatch = useDispatch()
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    console.log("Google login triggered");
  };

  const handleStudentLogin = async (e) => {
    e.preventDefault();
    // setLoading(true); 
    
    const myForm = new FormData();

    myForm.append("email", email);
    myForm.append("password", password)
    
    try {
      const response = await dispatch(studentLogin(myForm));
      if (response.status === 200) {
          toast.success("Login Successfully!");
          setEmail('');
          setPassword('');
          // setLoading(false); // Hide spinner after successful login
          navigate("/");
      } else {
          toast.error(response?.data?.message || "Login failed!", 'error');
          // setLoading(false); // Hide spinner if login fails
      }
    } catch (err) {
        toast.error(err.response?.data?.message || err.message || 'Login failed!', 'error');
        // setLoading(false); // Hide spinner after error
    }
    };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Slider /> {/* Background Slider */}
      <div className="container">
        <div className="inner-container">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>

          <p className="title">Login as a Student</p>

          <form onSubmit={handleStudentLogin}>
            <div className="form">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="* Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="form">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="* Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="form">
              <button type="submit" className="submit-button">Login</button>
            </div>
          </form>

          <div id="auth-account">
          <p className="mt-2 separator">
              <span></span> <b>Or</b> <span></span>
            </p>
            <a onClick={handleGoogleLogin} className="google-login">
              <img src='/google.png' className='googleImg' alt="Google Icon" />
              <div >Continue with Google</div>
            </a>

          </div>

          <div className="tst">
            Don't have an account? <Link to="/student/signup" className="sign-up-link">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
=======
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function StudentLogin() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: "url('/side.avif')",
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-12 sm:h-13" src="/logo.png" alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-700">
            Login as a Student
          </p>

          <a
            href="#"
            className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                {/* SVG Paths */}
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </a>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              login with email
            </a>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-700"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-700"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </motion.div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/student/signup"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </motion.div>
>>>>>>> upstream/main
  );
}

export default StudentLogin;
