import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '70vh', textAlign: 'center' }}>
      <h2 className="mb-4 text-success">Payment Successful!</h2>
      <p className="mb-5" style={{ fontSize: '1.2rem', color: '#555' }}>
        Your payment has been processed successfully. Thank you for your purchase!
      </p>
      <Button variant="primary" size="lg" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Container>
  );
}

export default PaymentSuccessPage;
