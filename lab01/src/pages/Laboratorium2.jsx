import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';
import PersonProfile from '../components/PersonProfile';

function Laboratorium2() {
  const { id } = useParams();
  const { items } = useContext(AppContext); // Użycie AppContext do pobrania bieżącej listy osób
  const person = items.find((p) => p.id === parseInt(id, 10));

  if (!id) {
    return <p>Brak identyfikatora osoby.</p>;
  }
  if (!person) {
    return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;
  }

  return <PersonProfile person={person} />;
}

export default Laboratorium2;
