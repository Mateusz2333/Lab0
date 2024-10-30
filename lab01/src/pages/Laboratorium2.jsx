import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';
import PersonProfile from '../components/PersonProfile';

function Laboratorium2() {
  const { id } = useParams();
  const person = data.find((p) => p.id === parseInt(id, 10));

  if (!id) {
    return <p>Brak identyfikatora osoby.</p>;
  }
  if (!person) {
    return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;
  }

  return <PersonProfile person={person} />;
}

export default Laboratorium2;
