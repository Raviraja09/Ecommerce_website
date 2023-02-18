import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Store from "./components/Store";
import Home from "./components/Home";

function App() {

  return (
    <Container>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* </Router> */}

      {/* <Row>
        {products.map((product) => (

          <Col md={4} key={product.name}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Col>
        ))}
      </Row> */}
    </Container>
  );
}
export default App;
