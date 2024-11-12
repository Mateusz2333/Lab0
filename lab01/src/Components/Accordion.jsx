import React, { useState } from 'react';

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h4 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                {title} {isOpen ? "▲" : "▼"}
            </h4>
            {isOpen && <p>{content}</p>}
        </div>
    );
}

export default Accordion;
