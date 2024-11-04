import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useCart } from '../store/CartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <Container className="text-center my-5">
        <h2 className="mb-4">Your Cart is Empty</h2>
        <Button variant="primary" onClick={() => navigate("/products")}>
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Your Cart</h2>
      <Table striped bordered hover responsive="sm" className="mb-4">
        <thead className="table-dark">
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
              <td>${product.price.toFixed(2)}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(product._id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between">
        <Button variant="danger" onClick={clearCart}>
          Clear Cart
        </Button>
        <Button variant="primary" onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </Button>
      </div>
    </Container>
  );
}

export default CartPage;
