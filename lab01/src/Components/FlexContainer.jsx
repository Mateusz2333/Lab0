import React from 'react';

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
