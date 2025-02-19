import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Checkout from './Checkout'; // import the Checkout component

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imagePath, productname, productprice } = location.state || {};

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [isCheckoutOpen] = useState(false); // Modal state

  useEffect(() => {
    if (imagePath && productname && productprice) {
      const newItem = {
        id: Date.now(),
        imagePath,
        name: productname,
        price: Number(productprice),
        quantity: 1,
      };

      setCartItems((prevItems) => {
        const isItemAlreadyInCart = prevItems.some((item) => item.name === newItem.name);
        if (!isItemAlreadyInCart) {
          const updatedItems = [...prevItems, newItem];
          localStorage.setItem('cartItems', JSON.stringify(updatedItems));
          return updatedItems;
        }
        return prevItems;
      });
    }
  }, [imagePath, productname, productprice]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemove = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    const totalCost = calculateTotal(); 
    navigate('/checkout', { state: { cartItems, totalCost } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-4xl text-left">
        Cart <span className="text-lg font-normal">({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</span>
      </h1>
      <hr className="my-4" />

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center space-y-6">
          <p className="text-center">Your cart is currently empty</p>
          <div className="flex justify-center">
            <button onClick={() => navigate('/')} className="w-[346px] bg-[#1c4c44] hover:bg-[#145d51] text-white font-semibold py-2 px-4 rounded-lg">Home</button>
          </div>
          <div className="flex justify-center">
            <button onClick={() => navigate('/shop')} className="w-[346px] bg-[#1c4c44] hover:bg-[#145d51] text-white font-semibold py-2 px-4 rounded-lg">Shop All</button>
          </div>
          <div className="flex justify-center">
            <button onClick={() => navigate('/about')} className="w-[346px] bg-[#1c4c44] hover:bg-[#145d51] text-white font-semibold py-2 px-4 rounded-lg">About us</button>
          </div>
        </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-start border-b pb-4 mb-4">
            <img src={item.imagePath} alt="Product" className="w-20 h-20 object-cover" />
            <div className="flex flex-col space-y-4 mx-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <div className="text-lg font-semibold">Cost: Rs. {(item.price * item.quantity).toFixed(2)}</div>
              <div className="flex items-center space-x-2">
                <button className="border rounded px-2" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className="border rounded px-2" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="text-sm text-gray-500 hover:underline mt-2" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 p-4 border rounded-lg">
          <p className="text-sm text-center text-gray-500">FREE shipping will be applied at checkout</p>
          <hr className="my-4" />
          <div className="flex justify-between items-center">
            <span className="font-semibold">SUBTOTAL</span>
            <span className="text-2xl font-bold">Rs. {calculateTotal()}</span>
          </div>
          <hr className="my-4" />
          <button
            className="w-full bg-[#1c4c44] hover:bg-[#145d51] text-white font-semibold py-2 rounded"
            onClick={handleCheckout}
          >
            CHECKOUT
          </button>
          <p className="text-sm text-center text-gray-500 mt-2">Shipping & taxes calculated at checkout</p>
        </div>
      )}

      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <Checkout
              cartItems={cartItems}
              totalCost={calculateTotal()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
