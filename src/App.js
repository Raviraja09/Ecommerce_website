import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

const products = [
  {
    name: 'Product 1',
    price: 100,
    image: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    name: 'Product 2',
    price: 50,
    image: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    name: 'Product 3',
    price: 70,
    image: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    name: 'Product 4',
    price: 100,
    image: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];
function App() {
  return (
    <container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Button bsStyle="primary">Cart</Button>
      </Navbar>
      
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Store</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
      
        
      </Navbar>
   <Row>
        {products.map((product) => (
            
          <Col md={4} key={product.name}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Button>Add to Cart</Button>
          </Col>
        ))}
      </Row>
      </container>

  );
}
export default App;
