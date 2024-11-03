import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useCart } from '../CartContext'; // Import useCart hook
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cart, clearCart } = useCart(); // Access cart from context
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate a random payment success or failure
    const paymentSuccess = Math.random() > 0.5; // 50% chance of success

    if (paymentSuccess) {
      navigate('/payment-success');
    } else {
      navigate('/payment-failure');
    }
  };

  return (
    <Container>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>1</td> {/* Adjust quantity as needed */}
                  <td>
                    <Button variant="danger" onClick={() => clearCart()}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="success" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button variant="primary" onClick={handlePayment} style={{ marginTop: '10px' }}>
            Pay Now
          </Button>
        </>
      )}
    </Container>
  );
}

export default CheckoutPage;
