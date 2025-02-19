import React from 'react';
import { SlCreditCard } from "react-icons/sl";
import { LuMessageCircle } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


const Payment = () => {
  return (
    <form className="bg-white   max-w-xs p-6 rounded-2xl animate-fadeIn">
      <div className="relative mb-4">
        <SlCreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-500" />
        <input placeholder="Card Number" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300" />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="relative w-1/2">
          <LuMessageCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-500" />
          <input placeholder="MM/YY" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300" />
        </div>
        <div className="relative w-1/2">
          <CiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-500" />
          <input placeholder="CVV" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300" />
        </div>
      </div>

      <div className="relative mb-4">
        <FaRegCreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-500" />
        <input placeholder="Card holder name" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300" />
      </div>

      <div className="relative mb-4">
        <CiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-500" />
        <input placeholder="Email" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300" />
      </div>

      <div className="flex items-center mb-4">
        <input type="checkbox" className="w-4 h-4 cursor-pointer mr-2 text-blue-500 transition duration-300" />
        <p className="text-sm text-gray-500">Remember card details</p>
      </div>

      <div className="flex justify-center mb-4">
        
      </div>

      <button className="w-full py-2 rounded-lg text-white bg-teal-700 hover:bg-teal-900 transform hover:scale-105 transition duration-300">Pay</button>
    </form>
  );
};

export default Payment;
