import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <Button
        variant="contained"
        onClick={() => navigate('order-summary', { replace: true })}
      >
        Place Order
      </Button>
    </div>
  );
}

export default Home;
