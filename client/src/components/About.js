import React from 'react';
import Dsp from '../images/dsp.jpg';
import Satya from '../images/satya.jpg';
import Yaswanth from '../images/yaswanth.jpg';
import Bhargav from '../images/Bhargav.jpg';
import Teja from '../images/Teja.jpg';
const About = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center">
            <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-green-500">About Us</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
        FarmDirect was created by a passionate team of five innovators
          dedicated to transforming the agricultural marketplace. Our platform
          bridges the gap between farmers and consumers, eliminating middlemen
          and ensuring fair trade for both parties.

        </p>
      </section>
      <section className="text-center">
        <h2 className="text-3xl font-bold text-green-500">Our Mission</h2>
        <p className="text-lg mt-2 max-w-3xl mx-auto">
        We believe in empowering local farmers while providing customers
            with fresh, high-quality produce directly from the source. By
            leveraging technology, we aim to create a sustainable and efficient
            farm-to-table ecosystem that benefits both farmers and consumers.
        </p>
      </section>
        
      <section className="py-5">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-10">
          <div className="bg-gray-100 rounded-lg p-5 text-center">
            <img
              src={Bhargav}
              alt="K Bhargav"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
            />
            <h3 className="text-xl font-bold text-green-500 mt-4">Bhargav</h3>
            
          </div>
          <div className="bg-gray-100 rounded-lg p-5 text-center">
            <img
              src={Satya}
              alt="Satya"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
            />
            <h3 className="text-xl font-bold text-green-500 mt-4">Satya</h3>
            
          </div>
          <div className="bg-gray-100 rounded-lg p-5 text-center">
            <img
              src={Dsp}
              alt="DSP"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
            />
            <h3 className="text-xl font-bold text-green-500 mt-4">DSP</h3>
            
          </div>
          <div className="bg-gray-100 rounded-lg p-5 text-center">
            <img
              src={Yaswanth}
              alt="V Yaswanth"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
            />
            <h3 className="text-xl font-bold text-green-500 mt-4">Yaswanth</h3>
            
          </div>
          <div className="bg-gray-100 rounded-lg p-5 text-center">
            <img
              src={Teja}
              alt="VVRS Teja"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
            />
            <h3 className="text-xl font-bold text-green-500 mt-4">VVRS Teja</h3>
            
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;
