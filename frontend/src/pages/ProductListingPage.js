import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../store/CartContext';
import './ProductListingPage.css';

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();  // Destructure addToCart from the Cart context

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data } = await axios.get('https://zoroz-ohh9.onrender.com/api/products');
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <Spinner animation="border" className="d-block mx-auto my-4" />;
  if (error) return <div className="text-center">{error}</div>;

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product._id} md={4} className="d-flex">
            <Card className="my-3 flex-fill">
              <Link to={`/products/${product._id}`} state={{ product }}>
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={product.imageUrl}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="product-description">
                  {product.description}
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="mt-auto w-50 align-self-end"
                  onClick={() => addToCart(product)}  // Call addToCart on button click
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductListingPage;
