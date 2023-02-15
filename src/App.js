import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Store from "./components/Store";
import Home from "./components/Home";

function App() {
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
     
    </Container>
  );
}
export default App;
