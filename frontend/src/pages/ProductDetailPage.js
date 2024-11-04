import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useCart } from '../store/CartContext';

function ProductDetailPage() {
  const { state } = useLocation();
  const { addToCart } = useCart();

  const product = state?.product;

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Card className="my-4">
        <Row className="g-0">
          {/* Image on the Left */}
          <Col md={5}>
            <Card.Img
              variant="top"
              src={product.imageUrl}
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </Col>

          {/* Details on the Right */}
          <Col md={7}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <h4>${product.price}</h4>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ProductDetailPage;
