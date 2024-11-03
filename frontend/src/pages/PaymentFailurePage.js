import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PaymentFailurePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <h2>Payment Failed</h2>
      <p>Unfortunately, your payment could not be processed. Please try again.</p>
      <Button variant="primary" onClick={() => navigate('/checkout')}>
        Retry Payment
      </Button>
    </Container>
  );
}

export default PaymentFailurePage;
