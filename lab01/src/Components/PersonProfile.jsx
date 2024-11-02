import React from 'react';
import { Button } from 'react-bootstrap';

const PersonProfile = ({ person, onEdit, onDelete, onRate }) => {
    return (
        <div className="border p-3 mb-3">
            <h2>{person.name}</h2>
            <p>Data urodzenia: {person.birth}</p>
            <p>Kolor oczu: {person.eyes}</p>
            <p>Numer rejestracyjny: {person.registration}</p>
            <div className="d-flex justify-content-between mt-3">
                <Button variant="primary" onClick={() => onEdit(person.id)}>Edit</Button>
                <Button variant="danger" onClick={() => onDelete(person.id)}>Delete</Button>
                <Button variant="success" onClick={() => onRate(person.id)}>Rate</Button>
            </div>
        </div>
    );
}

export default PersonProfile;
