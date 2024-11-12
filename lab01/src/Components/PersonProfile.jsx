import React from 'react';
import useData from '../data/useData';
import useDispatch from '../data/useDispatch';
import RatingBar from './RatingBar';

function PersonProfile({ id }) {
  const items = useData();
  const dispatch = useDispatch();
  const person = items.find(item => item.id === id);

  if (!person) return <p>Nie znaleziono osoby.</p>;

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '8px 0', width: '300px' }}>
      <h2>{person.name}</h2>
      <p>Data urodzenia: {person.birth}</p>
      <p>Kolor oczu: {person.eyes}</p>
      <p>Numer rejestracyjny: {person.registration}</p>
      <RatingBar rate={person.rating} /> 
      <button onClick={() => dispatch({ type: 'rate', id: person.id })}>Zwiększ ocenę</button>
    </div>
  );
}

export default PersonProfile;
