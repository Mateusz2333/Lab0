import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FlexContainer = ({ element: Element, data }) => (
    <Container>
        <Row className="gy-4">
            {data.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <Element {...item} />
                </Col>
            ))}
        </Row>
    </Container>
);

export default FlexContainer;