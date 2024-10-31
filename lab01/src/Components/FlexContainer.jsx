// components/FlexContainer.jsx
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FlexContainer = ({ element: Element, data }) => {
  return (
    <Row className="g-3">
      {data.map((item) => (
        <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
          <Element {...item} /> 
        </Col>
      ))}
    </Row>
  );
};

export default FlexContainer;
