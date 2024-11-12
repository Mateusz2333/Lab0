import React, { useContext, useState } from 'react';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

function AddForm() {
  const { dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({ name: '', rating: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (formData.name.length < 3) tempErrors.name = "Nazwa musi mieć co najmniej 3 znaki.";
    if (!Number.isInteger(Number(formData.rating)) || formData.rating < 0 || formData.rating > 10)
      tempErrors.rating = "Ocena musi być liczbą pomiędzy 0-10.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch({ type: 'add', item: { ...formData } });
    navigate('/lab4'); // Przekierowanie do Lab4 po dodaniu
  };

  return (
    <div>
      <h1>Dodaj nowy obiekt</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imie:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>Ocena:</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} required />
          {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}

export default AddForm;
