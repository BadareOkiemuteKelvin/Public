import React from "react"
import Nav from 'react-bootstrap/Nav';

function FillExample() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">All Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/about">Bloomzon Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Manufacturers Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Add New
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FillExample;