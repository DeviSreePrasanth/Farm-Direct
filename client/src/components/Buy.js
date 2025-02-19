import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PiArrowFatRightLight } from "react-icons/pi";
import Payment from './Payment';

const Buy = () => {
    const location = useLocation();
    const { imagePath, productname, productprice, username, productdesc } = location.state || {};


    const [gram, setGram] = useState(productprice);
    const [isPaymentPopupVisible, setPaymentPopupVisible] = useState(false);

    const lgram = () => {
        setGram(productprice);
    };

    const rgram = () => {
        setGram(productprice * 2);
    };

    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart', { state: { imagePath, productname, productprice, productdesc } });
    };

    const handleBuyNowClick = () => {
        const totalCost = gram;
        setPaymentPopupVisible(true);
        navigate('/checkout', { state: {totalCost } });
    };
    

    const handleClosePaymentPopup = () => {
        setPaymentPopupVisible(false);
    };

    return (
        <div className='flex flex-col lg:flex-row lg:gap-10 lg:ml-20 lg:mt-9 p-4'>
            <img src={imagePath} alt="Selected Product" className="w-full lg:w-2/5 lg:h-2/5 lg:ml-0 lg:mt-4" />
            <div className='mt-4 lg:mt-10 lg:ml-10 flex-1'>
                <h1 className='text-2xl lg:text-3xl font-bold font-[ui-sans-serif] mb-2'>{productname}</h1>
                <h1 className='text-lg lg:text-xl text-gray-600 mb-4'>Rs {productprice}</h1>
                
                <div className='flex items-center gap-3 mb-4'>
                    <div className='bg-green-500 w-3 h-3 rounded-full animate-pulse'></div>
                    <p className='text-lg lg:text-xl font-medium text-gray-700'>Item in stock</p>
                </div>
                
                <div className='flex items-center gap-3 mb-6'>
                    <PiArrowFatRightLight className='text-lg lg:text-xl text-teal-600' />
                    <p className='text-lg lg:text-xl text-teal-600 font-semibold'>Free shipping on orders above 500/-</p>
                </div>
                
                <p className='mt-4 text-lg lg:text-xl font-semibold'>Quantity</p>
                <div className='flex gap-4 lg:gap-6 mt-5'>
                    <button className='bg-[#333333] w-full lg:w-28 h-12 lg:h-14 rounded-lg text-white text-sm lg:text-base hover:bg-black transition-transform transform hover:scale-105' onClick={lgram}>500gm</button>
                    <button className='bg-[#333333] w-full lg:w-28 h-12 lg:h-14 rounded-lg text-white text-sm lg:text-base hover:bg-black transition-transform transform hover:scale-105' onClick={rgram}>1000gm</button>
                </div>

                <p className='mt-6 text-lg lg:text-xl font-semibold'>Total price</p>
                <button className='bg-[#333333] w-full lg:w-80 h-12 lg:h-14 mt-5 rounded-lg text-white text-sm lg:text-base font-semibold hover:bg-black transition-transform transform hover:scale-105 shadow-md'>Rs {gram}</button>
                
            
                <div className='flex flex-row xs:flex-row sm:flex-row md:flex-row gap-4 lg:gap-5 mt-5'>
                    <button className='bg-teal-800 w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-80 h-12 lg:h-14 rounded-lg text-white text-sm lg:text-base font-semibold hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-md' onClick={handleCartClick}>Add to Cart</button>
                    <button className='bg-teal-800 w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-80 h-12 lg:h-14 rounded-lg text-white text-sm lg:text-base font-semibold hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-md' onClick={handleBuyNowClick}>Buy it Now</button>
                </div>

                <p className='mt-6 text-sm lg:text-base text-gray-600'>{productdesc}</p>
                <p className='mt-6 text-sm lg:text-base text-gray-600'>
  <span className="font-semibold">Farmer:</span> {username} - A trusted farmer providing high-quality {productname}. Available in {gram}gm at a competitive price of Rs {gram === productprice ? productprice : productprice * 2}. 
  Known for sustainable farming practices, {username} ensures fresh and organic products delivered directly from the farm to your doorstep.
</p>

            </div>

            {isPaymentPopupVisible && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-md relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleClosePaymentPopup}
                        >
                            ✕
                        </button>
                        <Payment />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Buy;
