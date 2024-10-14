import React from 'react';

const PersonProfile = ({ person }) => {
    return (
        <div>
            <h2>{person.name}</h2>
            <p>Data urodzenia: {person.birth}</p>
            <p>Kolor oczu: {person.eyes}</p>
            <p>Numer rejestracyjny: {person.registration}</p>
        </div>
    );
}

export default PersonProfile;
