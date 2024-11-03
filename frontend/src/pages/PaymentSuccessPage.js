import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <h2>Payment Successful!</h2>
      <p>Your payment has been processed successfully. Thank you for your purchase!</p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Container>
  );
}

export default PaymentSuccessPage;
