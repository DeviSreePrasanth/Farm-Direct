import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div 
      className="fixed top-12 right-4 bg-gray-800 bg-opacity-50" 
      onClick={handleClickOutside}
    >
      <div 
        className="bg-[#e0d7af] p-6 border-teal-800 rounded-lg shadow-xl"

        style={{ width: '300px' ,boxShadow: '0 8px 16px rgba(0, 128, 128, 0.5)'}}
        onClick={e => e.stopPropagation()}  
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
