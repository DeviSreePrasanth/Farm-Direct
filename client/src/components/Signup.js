import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('https://farmdirectserver.vercel.app/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.status === 201) {
        navigate('/login'); // Navigate to login after signup
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0d7af] px-4 py-12">
      <div className="bg-[#e0d7af] p-8 rounded-lg shadow-lg w-full max-w-md"
        style={{ boxShadow: '0 8px 16px rgba(0, 128, 128, 0.5)' }}>
        <h2 className="text-2xl font-bold text-center text-teal-800 mb-6">Signup</h2>
        <form autoComplete="off">
          <div className="space-y-4">
            <input
              type="text"
              name="signup-name"
              id="unique-name-id"
              placeholder="Name"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setName(e.target.value)}
              autoComplete="new-name"
            />
            <input
              type="email"
              name="signup-email"
              id="unique-email-id"
              placeholder="Email"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setEmail(e.target.value)}
              autoComplete="new-email"
            />
            <input
              type="password"
              name="signup-password"
              id="unique-password-id"
              placeholder="Password"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <br />
            <button
              type="button"
              onClick={handleSignup}
              disabled={isLoading} // Disable button when loading
              className={`w-full text-white p-3 rounded-lg transition duration-300 ${
                isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-teal-800 hover:bg-teal-700'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-2">Signing up...</span>
                </div>
              ) : (
                'Signup'
              )}
            </button>
            <div className='flex justify-between mt-4'>
              <p className='text-teal-800'>I already have an account</p>
              <Link to='/login'>
                <p className='text-teal-800 underline'>Login</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
