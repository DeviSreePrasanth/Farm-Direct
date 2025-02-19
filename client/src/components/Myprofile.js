import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);  // State for storing user data
  const [loading, setLoading] = useState(true);    // State for loading indicator
  const [error, setError] = useState(null);        // State for errors

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Get token from localStorage (assuming you store the token in localStorage on login)
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('No token found. Please log in.');
        }

        // Make an API request to the backend with the token in the Authorization header
        const response = await axios.get('https://farmdirectserver.vercel.app/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token with the request
          },
        });

        
        setUserData(response.data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false); 
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>Error: {error}</div>;  
  }

  return (
    <div className='bg-transparent'>
      {userData && (
        <div>
          <p className='text-teal-800'>Name: {userData.name}</p>
          <p className='text-teal-800'>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
