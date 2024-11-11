import React, { useContext } from "react";
import AppContext from "../data/AppContext";

function Lab4Page() {
    const { items } = useContext(AppContext); 

    return (
        <div>
            <h1>Laboratorium 4</h1>
            {items.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}

export default Lab4Page;
