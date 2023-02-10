import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink,Router,Route,} from 'react-router-dom';

import About from './components/About';
import Store from './components/Store';
import Home from './components/Home';
    
    
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCartButtonClick = () => {
    setShowCart(!showCart);
  };

  return (
  
  <Container>
      <Router>
        <switch>
         <Route path="/Home" component={Home} />
         <Route path="/store" component={Store} />
         <Route path="/about" component={About} />
         </switch>
      </Router>



      <Row>
        {products.map((product) => (

          <Col md={4} key={product.name}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Col>
        ))}
      </Row>
      </Container>
);
}
export default App;





