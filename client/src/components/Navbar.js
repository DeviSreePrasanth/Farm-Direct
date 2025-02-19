import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Modal from './Modal';  // Import the Modal component
import Profile from './Myprofile';  // Import the Profile component

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => setIsProfileOpen(prevState => !prevState);
  const handleBurger = () => setBurger(!burger);
  const handleSearchToggle = () => setSearchVisible(!searchVisible);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const filteredItems = []; // Replace with your list of items to filter

  return (
    <div className='relative'>
      <nav className='relative'>
        <ul className='flex justify-between bg-amber-500 items-center p-6'>
          <li>
            <RxHamburgerMenu 
              className='text-2xl cursor-pointer font-bold' 
              onClick={handleBurger} 
            />
          </li>
          <li className='flex justify-center items-center gap-3'>
            <h1 className='text-3xl text-teal-800 font-semibold font-[ui-sans-serif]'>
              Farm Direct
            </h1>
          </li>
          <li className='flex items-center gap-7 relative'>
            <CiSearch 
              className='text-3xl cursor-pointer font-bold' 
              onClick={handleSearchToggle} 
            />
            {searchVisible && (
              <div 
                className='absolute top-0 right-0 bg-white shadow-lg p-4 rounded-lg mt-2 w-64 sm:w-80 transition-transform duration-300 ease-in-out'
                style={{ transform: searchVisible ? 'translateX(0)' : 'translateX(100%)', opacity: searchVisible ? 1 : 0 }}
              >
                <div className='relative'>
                  <input 
                    type='text' 
                    placeholder='Search...' 
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-800'
                  />
                  <RxCross2 
                    className='absolute top-3 right-3 text-2xl cursor-pointer text-gray-600 hover:text-gray-800'
                    onClick={handleSearchToggle} 
                  />
                </div>
                <div className='mt-4'>
                  {/* Display filtered items here */}
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <div key={index} className='py-2 border-b border-gray-200'>
                        <p className='text-gray-800'>{item.name}</p>
                      </div>
                    ))
                  ) : (
                    <p className='text-gray-600'>No items found</p>
                  )}
                </div>
              </div>
            )}
            <Link to="/cart">
              <CiShoppingBasket className='text-3xl cursor-pointer font-bold' />
            </Link>
            <PiUserCircleThin
            className="text-black  cursor-pointer text-4xl font-medium relative " 
            onClick={toggleProfile} />
            {isProfileOpen && (
              <div 
                className="absolute top-12 right-0 z-50"
                style={{ width: '300px' }}
              >
                <Modal onClose={() => setIsProfileOpen(false)}>
                  <Profile />
                </Modal>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Burger Menu */}
      <div 
        className={`fixed top-0 w-screen h-screen bg-slate-100 p-8 space-y-8 z-50 transform transition-transform sm:w-96 ${burger ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='flex items-center'>
          <h1 className='text-4xl text-teal-950 font-semibold font-[ui-sans-serif]'>
            Farm Direct
          </h1>
          <RxCross2 
            className='text-2xl cursor-pointer absolute top-10 right-6 hover:rotate-90 hover:ease-in hover:duration-200' 
            onClick={handleBurger} 
          />
        </div>
        <hr className='border-slate-950'/>
        <div className='flex flex-col space-y-10'>
          <Link to="/customer"><p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif]'>Home</p></Link>
          <Link to="/shop"><p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif]'>Shop All</p></Link>
          <p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif]'>Track order</p>
          <Link to="/about"><p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif]'>About</p></Link>
          <Link to="/contact"><p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif]'>Contact</p></Link>
        </div>
      </div>  
    </div>
  );
};

export default Navbar;
