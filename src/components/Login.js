import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export const Login = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path;
  const auth = useAuth();
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <>
      <h1>Login</h1>
      <label htmlFor="userName">Name</label>
      <input
        autoComplete="off"
        type="text"
        name="userName"
        onChange={(e) => {
          setUser(e.target.value);
          console.log(e.target.value);
        }}
        id="userName"
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
