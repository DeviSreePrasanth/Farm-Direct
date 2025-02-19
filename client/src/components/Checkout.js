import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUser, FaEnvelope, FaHome, FaCity, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalCost } = location.state || {};
  console.log('Cart Items:', cartItems);
  console.log('Total Cost:', totalCost); 

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const [formValid, setFormValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userDetails.name || !userDetails.email || !userDetails.address || !userDetails.city || !userDetails.postalCode || !userDetails.phone) {
      setFormValid(false);
      return;
    }

    setIsLoading(true);

    // Simulate an API call and order placement
    setTimeout(() => {
      setIsLoading(false);
      setOrderPlaced(true);
    }, 2000);
  };

  return (
    <div className="bg-white py-12 px-6 max-w-2xl mx-auto rounded-xl shadow-lg">
  <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">Checkout</h1>

  {orderPlaced ? (
    <div className="text-green-500 text-xl font-semibold text-center mt-4">
      Order Placed Successfully!
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 text-lg" />
        <input
          type="text"
          placeholder="Name"
          value={userDetails.name}
          onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
          className="w-full py-3 pl-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 transition"
        />
      </div>

      <div className="relative">
        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 text-lg" />
        <input
          type="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
          className="w-full py-3 pl-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 transition"
        />
      </div>

      <div className="relative">
        <FaHome className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 text-lg" />
        <input
          type="text"
          placeholder="Address"
          value={userDetails.address}
          onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
          className="w-full py-3 pl-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 transition"
        />
      </div>

      <div className="relative">
        <FaCity className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 text-lg" />
        <input
          type="text"
          placeholder="City"
          value={userDetails.city}
          onChange={(e) => setUserDetails({ ...userDetails, city: e.target.value })}
          className="w-full py-3 pl-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 transition"
        />
      </div>

      <div className="relative">
        <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 text-lg" />
        <input
          type="text"
          placeholder="Postal Code"
          value={userDetails.postalCode}
          onChange={(e) => setUserDetails({ ...userDetails, postalCode: e.target.value })}
          className="w-full py-3 pl-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 transition"
        />
      </div>

      <div className="relative">
        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 text-lg" />
        <input
          type="text"
          placeholder="Phone"
          value={userDetails.phone}
          onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
          className="w-full py-3 pl-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 transition"
        />
      </div>

      {!formValid && (
        <div className="text-red-500 text-sm text-center">
          Please fill out all fields correctly.
        </div>
      )}

      <div className="text-center text-gray-800 font-medium">
        <span>Total Cost: </span>
        <span className="text-2xl font-semibold text-teal-600">Rs.{totalCost}</span>
      </div>

      <div className="text-center">
        {isLoading ? (
          <div className="border-4 border-gray-300 border-t-4 border-teal-500 rounded-full w-10 h-10 mx-auto animate-spin"></div>
        ) : (
          <button
            type="submit"
            className="w-full py-3 text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none transition"
          >
            Complete Checkout
          </button>
        )}
      </div>
    </form>
  )}
</div>

  );
};

export default Checkout;
