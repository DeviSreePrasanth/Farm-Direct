import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('https://farmdirectserver.vercel.app/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/second'); // Navigate immediately after login
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0d7af] px-4 py-12">
      <div className="bg-[#3e0d7af] p-8 rounded-lg shadow-lg w-full max-w-md"
        style={{ boxShadow: '0 8px 16px rgba(0, 128, 128, 0.5)' }}>
        <h2 className="text-2xl font-bold text-center text-teal-800 mb-6">Login</h2>
        <form autoComplete="off">
          <div className="space-y-4">
            <input
              type="email"
              name="login-email"
              id="unique-email-id"
              placeholder="Email"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setEmail(e.target.value)}
              autoComplete="new-email"
            />
            <input
              type="password"
              name="login-password"
              id="unique-password-id"
              placeholder="Password"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <br />
            <button
              type="button"
              onClick={handleLogin}
              disabled={isLoading} // Disable button when loading
              className={`w-full text-white p-3 rounded-lg transition duration-300 ${
                isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-teal-800 hover:bg-teal-700'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-2">Logging in...</span>
                </div>
              ) : (
                'Login'
              )}
            </button>
            <div className='flex justify-between mt-4'>
              <p className='text-teal-800'>I don't have an account</p>
              <Link to='/signup'>
                <p className='text-teal-800 underline'>Signup</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
