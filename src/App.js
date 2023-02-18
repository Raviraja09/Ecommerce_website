import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Store from "./components/Store";
import Home from "./components/Home";

function App() {

  return (
    <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
    </Container>
  );
}
export default App;
