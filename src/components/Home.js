import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import CartPage from './components/CartPage';
import { CartContextProvider } from './components/CartContext';
import { NavLink, Route, Switch } from 'react-router-dom';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleCartButtonClick = () => {
    setShowCart(!showCart);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const products = [
    {
      name: 'Product 1',
      price: 100,
      image:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      name: 'Product 2',
      price: 50,
      image:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      name: 'Product 3',
      price: 70,
      image:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      name: 'Product 4',
      price: 100,
      image:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <CartContextProvider>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>The Generics</Navbar.Brand>
          <Button bsstyle="primary" onClick={handleCartButtonClick}>
            Cart({cartItems.length})
          </Button>
        </Navbar>
        {showCart && <CartPage items={cartItems} />}

        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Row>
              {products.map((product) => (
                <Col md={4} key={product.name}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <Button onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </Col>
              ))}
            </Row>
          </Route>
          <Route path="/store">
            <h1>Store Page</h1>
          </Route>
          <Route path="/about">
            <h1>About Page</h1>
          </Route>
        </Switch>
      </Container>
    </CartContextProvider>
  );
};

export default Home;

