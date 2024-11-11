import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';

function EditForm() {
  const { items, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const itemToEdit = items.find(item => item.id === Number(id));

  useEffect(() => {
    if (itemToEdit) {
      setValue("id", itemToEdit.id);
      setValue("name", itemToEdit.name);
      setValue("rating", itemToEdit.rating);
    } else {
      navigate('/lab4');
    }
  }, [itemToEdit, navigate, setValue]);

  const onSubmit = (data) => {
    dispatch({ type: 'update', item: { id: data.id, name: data.name, rating: Number(data.rating) } });
    navigate('/lab4');
  };

  return (
    <div>
      <h1>Edytuj obiekt</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id")} />

        <div>
          <label>Imie:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required", minLength: { value: 3, message: "Imię musi zawierać co najmniej 3 znaki." } })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        <div>
          <label>Ocena:</label>
          <input
            type="number"
            {...register("rating", {
              required: "Rating is required",
              min: { value: 0, message: "Ocena musi być co najmniej 0" },
              max: { value: 10, message: "Ocena nie może przekroczyć 10" },
              valueAsNumber: true
            })}
          />
          {errors.rating && <p style={{ color: 'red' }}>{errors.rating.message}</p>}
        </div>

        <button type="submit">Zapisz</button>
      </form>
    </div>
  );
}

export default EditForm;
