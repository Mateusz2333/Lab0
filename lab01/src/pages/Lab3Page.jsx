import React, { useContext } from 'react';
import FlexContainer from '../components/FlexContainer';
import AppReducer from '../data/AppReducer';
import { data } from '../data/module-data';
import RatingBar from '../components/RatingBar';
import AppContext from '../data/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ name, rating, id, dispatch }) => (
    <div className="border mb-3 p-3" style={{ width: '18rem' }} key={id}>
        <h5>{name}</h5>
        <p>Ocena: {rating}</p>
        <RatingBar rate={rating} />
        <div className="d-flex justify-content-between mt-3">
            <button
                className="btn btn-primary"
                onClick={() => dispatch({ type: "edit", id })}
            >
                Edit
            </button>
            <button
                className="btn btn-danger"
                onClick={() => dispatch({ type: "delete", id })}
            >
                Delete
            </button>
            <button
                className="btn btn-success"
                onClick={() => dispatch({ type: "rate", id, rating })}
            >
                Rate
            </button>
        </div>
    </div>
);

function Lab3Page() {
    const { items, dispatch } = useContext(AppContext);

    return (
        <div className="container my-4">
            <h1>Laboratorium 3</h1>
            <FlexContainer
                element={Item}
                data={items.map((item) => ({
                    ...item,
                    dispatch
                }))}
            />
        </div>
    );
}

export default Lab3Page;
