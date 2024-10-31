import React from 'react';
import FlexContainer from '../components/FlexContainer';
import { data } from '../data/module-data';

const Item = ({ name, rating, id }) => (
    <div className="border mb-3 p-3" style={{ width: '18rem'}} key={id}>
        <h5>{name}</h5>
        <p>Ocena: {rating}</p>
    </div>
);

function Lab3Page() {
    return (
        <div className="container my-4">
        <h1>Laboratorium 3</h1>
        <FlexContainer element={Item} data={data} />
        </div>
    );
}

export default Lab3Page;