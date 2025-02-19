import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TbShoppingBag } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const result = await axios.get("https://farmdirectserver.vercel.app/getimage");
      setImages(result.data.data || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleclick = (imagePath, productname, productprice, grams, username) => {
    navigate('/buy', { state: { imagePath, productname, productprice, grams, username } });
  };
  

  // Filter images based on searchTerm
  const filteredImages = images.filter(data =>
    data.name && data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-bold text-black text-center mt-6 mb-10">All Products</h1>

      {/* Search Bar */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800"
        />
      </div>

      <div>
        <ul className="hidden sm:flex sm:justify-between sm:px-8 lg:px-16 items-center">
          <li className="text-xl font-medium font-[ui-sans-serif] flex items-center">
            In stock
            <label className="relative inline-flex items-center ml-3 cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-600 transition-all"></div>
              <div className="absolute top-0.5 left-[2px] w-5 h-5 bg-white rounded-full border border-gray-300 peer-checked:translate-x-full peer-checked:border-green-600 transition-all"></div>
            </label>
          </li>
          <li className="text-xl font-medium font-[ui-sans-serif]">Price</li>
          <li className="text-xl font-medium font-[ui-sans-serif]">Short By</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-10">
        {filteredImages.length > 0 ? (
          filteredImages.map((data, index) => (
            data && data.image ? (
              <div key={index} className="relative border border-white mt-2 p-2 rounded-md">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-auto object-cover mb-4 rounded-md"
                  onClick={() => handleclick(data.image, data.name, data.price, data.grams, data.userName)}
                />

                <div className="absolute bottom-[90px] right-3 lg:bottom-24 lg:right-4 bg-white lg:p-1 p-[0.5px] rounded-full shadow-lg">
                  <TbShoppingBag className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gray-700" />
                </div>

                <h3 className="text-xl font-medium text-center font-[ui-sans-serif]">{data.name}</h3>
                <div className='flex items-center justify-center'>
                  <p className="text-lg text-center text-gray-500">Rs.{data.price}/</p>
                  <p className="text-lg text-gray-500 text-center">{data.grams}grm</p>
                </div>
              
              </div>
            ) : null
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
