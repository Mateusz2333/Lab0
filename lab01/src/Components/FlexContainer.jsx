import React from 'react';
import AppReducer from '../data/AppReducer'

function FlexContainer({ element: Element, data }) {
    return (
        <div className="d-flex flex-wrap">
            {data.map((item) => (
                <Element key={item.id} {...item} />
            ))}
        </div>
    );
}

export default FlexContainer;
