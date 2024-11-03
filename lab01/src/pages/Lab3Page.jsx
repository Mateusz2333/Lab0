import React, { useReducer } from 'react';
import FlexContainer from '../components/FlexContainer';
import AppReducer from '../data/AppReducer';
import { data } from '../data/module-data';
import RatingBar from '../components/RatingBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ name, rating, id, onEdit, onDelete, onRate }) => (
    <div className="border mb-3 p-3" style={{ width: '18rem' }} key={id}>
        <h5>{name}</h5>
        <p>Ocena: {rating}</p>
        <RatingBar rate={rating} /> 
        <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary" onClick={() => onEdit(id)}>Edit</button>
            <button className="btn btn-danger" onClick={() => onDelete(id)}>Delete</button>
            <button className="btn btn-success" onClick={() => onRate(id)}>Rate</button>
        </div>
    </div>
);

function Lab3Page() {
    const [state, dispatch] = useReducer(AppReducer, data.map(person => ({ ...person, rating: 0 })));

    const handleEdit = (id) => {
        alert(`Edytowanie osoby o id: ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Usuwanie osoby o id: ${id}`);
    };

    const handleRate = (id) => {
        dispatch({ type: 'RATE', payload: { id } });
    };

    return (
        <div className="container my-4">
            <h1>Laboratorium 3</h1>
            <FlexContainer
                element={Item}
                data={state.map((item) => ({
                    ...item,
                    onEdit: handleEdit,
                    onDelete: handleDelete,
                    onRate: handleRate
                }))}
            />
        </div>
    );
}

export default Lab3Page;
