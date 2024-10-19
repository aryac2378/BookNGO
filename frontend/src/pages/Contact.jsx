import React from 'react';

import Header from "../components/Header"
import Footer from "../components/Footer"

const ContactForm = () => {
  return (<>
    <Header />

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

      {/* Contact form container with 50% width */}
      <div className="relative bg-green text-white p-8 md:p-10 rounded-lg shadow-lg w-full max-w-[50%] z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <form className="w-full">
          {/* Email input field */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject input field */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter the subject"
            />
          </div>

          {/* Message textarea */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your message"
            />
          </div>

          {/* Submit button with white background */}
          <button
            type="submit"
            className="w-full py-4 bg-white text-green text-2xl font-bold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer/>

  </>
  );
};

export default ContactForm;
