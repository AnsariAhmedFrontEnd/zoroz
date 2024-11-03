import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function PaymentPage() {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    alert("Payment successful");
    navigate('/checkout');
  };

  const handlePaymentFailure = () => {
    alert("Payment failed");
  };

  return (
    <Container className="text-center mt-5">
      <h2>Mock Payment</h2>
      <p>Select a payment outcome:</p>
      <Button variant="success" onClick={handlePaymentSuccess} className="m-2">
        Payment Success
      </Button>
      <Button variant="danger" onClick={handlePaymentFailure} className="m-2">
        Payment Failure
      </Button>
    </Container>
  );
}

export default PaymentPage;
