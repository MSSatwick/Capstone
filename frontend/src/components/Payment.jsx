import React from 'react';
import QR from '../assets/payment_QR.jpg';

function Payment() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white', // Optional: Add background color
        textAlign: 'center' // Optional: Align the image in the center horizontally
      }}
    >
      <img src={QR} alt="qr" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
}

export default Payment;
