import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrderScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 10000);

    // Clean up the timeout in case the component unmounts before the timeout completes
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <div className='orderplaced'>
        <h1>Wow! Order placed</h1>
        <h3>HAPPY SHOPPING</h3>
        <img src='/images/placed.gif' alt='gif' />
      </div>
    </>
  );
}
