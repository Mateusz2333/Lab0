import React from 'react';
import RatingBar from './RatingBar';

const PersonProfile = ({ person }) => {
    return (
        <div>
            <h2>{person.name}</h2>
            <p>Data urodzenia: {person.birth}</p>
            <p>Kolor oczu: {person.eyes}</p>
            <p>Numer rejestracyjny: {person.registration}</p>
            <RatingBar rate={person.rating} /> 
        </div>
    );
};

export default PersonProfile;