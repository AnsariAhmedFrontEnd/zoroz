import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PaymentFailurePage() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '70vh', textAlign: 'center' }}>
      <h2 className="mb-4 text-danger">Payment Failed</h2>
      <p className="mb-5" style={{ fontSize: '1.2rem', color: '#555' }}>
        Unfortunately, your payment could not be processed. Please try again.
      </p>
      <Button variant="primary" size="lg" onClick={() => navigate('/checkout')}>
        Retry Payment
      </Button>
    </Container>
  );
}

export default PaymentFailurePage;
