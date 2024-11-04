import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { useCart } from '../store/CartContext'; // Import useCart hook
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cart, clearCart } = useCart(); // Access cart from context
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // Default payment method

  const handlePayment = () => {
    // Simulate a random payment success or failure
    const paymentSuccess = Math.random() > 0.5; // 50% chance of success

    if (paymentSuccess) {
      clearCart(); // Clear cart only on successful payment
      navigate('/payment-success');
    } else {
      navigate('/payment-failure');
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="my-4">
      <h2 className="mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover className="mb-4">
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
                    <Button variant="danger" onClick={clearCart}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between mb-4">
            <Button variant="success" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button variant="primary" onClick={handleShow}>
              Pay Now
            </Button>
          </div>

          {/* Payment Modal */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Select Payment Method</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Choose a payment method:</h5>
              <Form>
                <Form.Check
                  type="radio"
                  label="UPI"
                  name="paymentMethod"
                  id="upi"
                  checked={paymentMethod === 'UPI'}
                  onChange={() => setPaymentMethod('UPI')}
                />
                <Form.Check
                  type="radio"
                  label="Net Banking"
                  name="paymentMethod"
                  id="net-banking"
                  checked={paymentMethod === 'Net Banking'}
                  onChange={() => setPaymentMethod('Net Banking')}
                />
                <Form.Check
                  type="radio"
                  label="Debit/Credit Card"
                  name="paymentMethod"
                  id="debit-credit"
                  checked={paymentMethod === 'Debit/Credit Card'}
                  onChange={() => setPaymentMethod('Debit/Credit Card')}
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => { handlePayment(); handleClose(); }}>
                Proceed to Payment
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
}

export default CheckoutPage;
