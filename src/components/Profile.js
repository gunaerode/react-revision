import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };
  return (
    <>
      <h1>Profile</h1>
      <hr />
      <h3>Welcome to rrdV6 &#128512; {auth.user}</h3>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
