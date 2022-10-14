import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order Confirmed</h1>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}

export default OrderSummary;
