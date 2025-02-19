import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const animateLetters = (text, showAll) => {
  return text.split('').map((letter, index) => (
    <span
      key={index}
      className={`inline-block ${showAll ? 'opacity-100' : 'opacity-0'} animate-fadeIn`}
      style={{ animationDelay: `${index * 100}ms` }} 
    >
      {letter}
    </span>
  ));
};

const First = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAll(true);
    }, 2000); 

    const redirectTimer = setTimeout(() => {
      navigate('/login'); 
    }, 3000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className='bg-amber-500 w-screen h-screen flex items-center justify-center'>
      <p className='text-teal-900 text-6xl font-bold'>
        {animateLetters('Farmdirect', showAll)}
      </p>
    </div>
  );
};

export default First;
