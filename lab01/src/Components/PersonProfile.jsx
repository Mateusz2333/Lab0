import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import AppContext from '../data/AppContext';
import RatingBar from './RatingBar';

function PersonProfile({ name, id, rating }) {
  
  const { dispatch } = useContext(AppContext);

  return (
    <Card style={{ width: '18rem' }} className="m-1">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Ocena: {rating}</Card.Text>
        <RatingBar rate={rating} />
        <div className="d-flex justify-content-between mt-3">
          <Button
            variant="primary"
            onClick={() => dispatch({ type: 'edit', id })}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => dispatch({ type: 'delete', id })}
          >
            Delete
          </Button>
          <Button
            variant="success"
            onClick={() => dispatch({ type: 'rate', id, rating })}
          >
            Rate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PersonProfile;
