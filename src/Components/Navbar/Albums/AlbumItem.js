import React, { Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AlbumItem = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  // Create pairs of products for adjacent columns
  const pairedProducts = [];
  for (let i = 0; i < productsArr.length; i += 2) {
    pairedProducts.push(productsArr.slice(i, i + 2));
  }

  return (
    <Fragment>
     {pairedProducts.map((pair, index) => (
        <div className="d-flex justify-content-center mt-4" key={index}>
          <Container>
            <Row className="justify-content-center">
              {pair.map((item) => (
                <Col key={item.title} xs={12} md={6} lg={4} className="mb-4">
                  <Card className="w-75 mx-auto"> {/* Adjust card width and center */}
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-md font-semibold">$ {item.price}</span>
                        <Button variant="primary">Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ))}
    </Fragment>
  );
};

export default AlbumItem;
