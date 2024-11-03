import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <Container>
        <h2>Your Cart is Empty</h2>
        <Button variant="primary" onClick={() => navigate("/products")}>
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Your Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <Button variant="danger" onClick={() => removeFromCart(product._id)}>
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
      <Button variant="primary" onClick={() => navigate("/checkout")} style={{ marginTop: '10px' }}>
        Proceed to Checkout
      </Button>
    </Container>
  );
}

export default CartPage;
