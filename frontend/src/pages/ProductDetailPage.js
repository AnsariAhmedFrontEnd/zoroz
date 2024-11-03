import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { useCart } from '../CartContext';

function ProductDetailPage() {
  const { state } = useLocation();
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = state?.product;

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Card className="my-4">
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <h4>${product.price}</h4>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetailPage;
