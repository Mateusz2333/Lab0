import React, { useState } from 'react';
import FlexContainer from '../components/FlexContainer';
import { data } from '../data/module-data';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ name, rating, id, onEdit, onDelete, onRate }) => (
    <div className="border mb-3 p-3" style={{ width: '18rem' }} key={id}>
        <h5>{name}</h5>
        <p>Ocena: {rating}</p>
        <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary" onClick={() => onEdit(id)}>Edit</button>
            <button className="btn btn-danger" onClick={() => onDelete(id)}>Delete</button>
            <button className="btn btn-success" onClick={() => onRate(id)}>Rate</button>
        </div>
    </div>
);

function Lab3Page() {
    
    const [ratings, setRatings] = useState(
        data.reduce((acc, person) => ({ ...acc, [person.id]: 0 }), {})
    );

    const handleEdit = (id) => {
        alert(`Edytowanie osoby o id: ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Usuwanie osoby o id: ${id}`);
    };

    const handleRate = (id) => {
        setRatings((prevRatings) => {
            const currentRating = prevRatings[id];
            let newRating;
            if (currentRating === 10) {
                newRating = 0; 
            } else if (currentRating === 0) {
                newRating = 1; 
            } else {
                newRating = currentRating + 1; 
            }
            return { ...prevRatings, [id]: newRating };
        });
    };
    

    return (
        <div className="container my-4">
            <h1>Laboratorium 3</h1>
            <FlexContainer
                element={Item}
                data={data.map((item) => ({
                    ...item,
                    rating: ratings[item.id],
                    onEdit: handleEdit,
                    onDelete: handleDelete,
                    onRate: handleRate
                }))}
            />
        </div>
    );
}

export default Lab3Page;
