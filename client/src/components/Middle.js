import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const [products] = useState([
        { name: 'Kandi Pappu ', image: require('../images/pulse.png'), price: "90", quantity: "500gms" },
        { name: 'Minapappu', image: require('../images/pulses1.png'), price: "70", quantity: "500gms" },
        { name: 'Pesarapappu', image: require('../images/pulse2.png'), price: "140", quantity: "500gms" }

    ]);
    const navigate = useNavigate();


    const handleImageClick = (imagePath, productname, productprice, productdesc) => {

        navigate('/buy', { state: { imagePath, productname, productprice, productdesc } });
    };

    return (
        <>
            <div className="flex flex-wrap justify-center lg:gap-5 sm:gap-5 md:gap-5 gap-2 pt-4 md:mr-5 sm:ml-8">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div
                            className="relative border border-white mt-2 p-2 rounded-md"

                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-96 h-96 object-cover mb-4 rounded-md"
                                onClick={() => handleImageClick(product.image, product.name, product.price, product.desc)}
                            />
                            <button className='bg-white w-36 h-12 rounded-lg absolute bottom-10 left-32'
                             onClick={() => handleImageClick(product.image, product.name, product.price, product.desc)}
                            >Shop now</button>
                            
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Products; 