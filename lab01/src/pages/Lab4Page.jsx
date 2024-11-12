import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

function Lab4Page() {
  const { items } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/lab4/add');
  };

  return (
    <div>
      <h1>Laboratorium 4</h1>
      <button onClick={handleAddClick}>Dodaj obiekt</button>
      {items.map((item) => (
        <div key={item.id}>
          {item.name} <button onClick={() => navigate(`/lab4/edit/${item.id}`)}>Edytuj</button>
        </div>
      ))}
    </div>
  );
}

export default Lab4Page;
