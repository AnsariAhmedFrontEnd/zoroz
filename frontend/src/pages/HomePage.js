import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { products } from "../data";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleViewMore = (category) => {
    navigate("/products");
  };

  return (
    <Container className="my-5">
      <h1>Top Products by Category</h1>

      {Object.entries(products).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <Row>
            {items.map((product) => (
              <Col key={product.id} sm={4} className="mb-3">
                <Card className="mt-3" style={{ height: "100%" }}>
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button onClick={() => handleViewMore(category)}>View More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default HomePage;
