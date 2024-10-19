import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minDate, setMinDate] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(''); // Error message for submission
  const [userId, setUserId] = useState(null);

  // Set minimum date for booking date input
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  // Fetch the tour details
  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/packages/${id}`);
        setTour(response.data);
      } catch (err) {
        setError("Failed to load the tour details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  // Check user authentication and fetch user ID
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUserId(user.id);
    }
  }, []);

  const handleBooking = async (event) => {
    event.preventDefault();

    navigate('/thankyou', { state: { packageData: tour } });

  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="w-full lg:w-1/2 h-auto flex flex-col items-start space-y-4">
            <div className="w-90 bg-gray-200 flex items-center justify-center rounded-lg">
              <img
                src={tour.image}
                alt={tour.name}
                className="object-cover"
                onError={(e) => { e.target.src = '/path/to/fallback-image.jpg'; }}
              />
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-2xl font-bold text-gray-800 mt-5">{tour.name}</h3>
              <p className="text-lg text-green"><strong>Price:</strong> Rs. {tour.price}</p>
              <p className="text-lg text-gray-600">{tour.description}</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <h5 className="text-2xl font-bold text-green mb-6">Booking Information</h5>

            <form className="space-y-6" onSubmit={handleBooking}>
              <input
                className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg"
                type="text"
                name="full_name"
                placeholder="Full Name"
                required
              />
              <input
                className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg"
                type="text"
                name="contact"
                placeholder="Contact No."
                required
              />
              <input
                className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg"
                type="number"
                name="people"
                placeholder="Number of People"
                defaultValue={1}
                min={1}
                required
              />
              <input
                className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg"
                type="date"
                name="date"
                required
                min={minDate}
              />

              <div className="mt-12 font-semibold">
                <div className="flex my-4 justify-between text-green">
                  <span>Gross Price: </span>
                  <p className="font-semibold">Rs. {tour.price}</p>
                </div>
                <div className="flex text-green my-4 border-b-[1px] pb-2 border-gray-300 justify-between">
                  <span>GST: </span>
                  <p className="font-semibold">18%</p>
                </div>
                <div className="flex my-6 justify-between font-bold text-lg text-green">
                  <span>Net Price: </span>
                  <p>Rs. {(tour.price * 1.18).toFixed(2)}</p>
                </div>
              </div>

              {submitError && (
                <p className="text-red-500 font-semibold">{submitError}</p>
              )}

              <button
                type="submit"
                className="btn w-full bg-green text-white h-10 font-bold rounded"

              >
                Book
              </button>
            </form>
          </div>
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-red-500">Please log in to proceed with booking</h2>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                className="btn bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => navigate('/login')}
              >
                Go to Login
              </button>
              <button
                className="btn bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowLoginModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Booking;
