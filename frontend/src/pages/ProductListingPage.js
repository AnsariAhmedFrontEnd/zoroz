import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductListingPage.css'; // Import your custom CSS

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data } = await axios.get('http://localhost:5000/api/products');
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
                <Card.Img variant="top" src={product.imageUrl} />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="product-description">
                  {product.description}
                </Card.Text>
                <Link to={`/products/${product._id}`} state={{ product }} className="btn btn-primary mt-auto">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductListingPage;
