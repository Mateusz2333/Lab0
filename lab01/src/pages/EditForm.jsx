import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';

function EditForm() {
  const { items, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const itemToEdit = items.find(item => item.id === parseInt(id));
  const [formData, setFormData] = useState({ name: '', rating: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (itemToEdit) {
      setFormData({ name: itemToEdit.name, rating: itemToEdit.rating });
    }
  }, [itemToEdit]);

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

    dispatch({ type: 'edit', item: { id: itemToEdit.id, ...formData } });
    navigate('/lab4'); // Przekierowanie po edycji
  };

  if (!itemToEdit) return <p>Nie znaleziono obiektu do edycji.</p>;

  return (
    <div>
      <h1>Edytuj obiekt</h1>
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
        <button type="submit">Zapisz zmiany</button>
      </form>
    </div>
  );
}

export default EditForm;
