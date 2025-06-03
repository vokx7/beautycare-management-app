import { useState } from "react";
import { useCreateStylistMutation } from "../queries/useCreateStylistMutation";

export const AddStylistForm = () => {
  const {mutate} = useCreateStylistMutation();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    specialty: 'manicure'
  })

  const handleChange = (e) => {
      const {name, value} = e.target;

      setValues(prevValues => ({
        ...prevValues,
        [name]: value
      }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      firstName: values.firstName,
      lastName: values.lastName,
      specialty: values.specialty
    })
    setValues({
        firstName: '',
    lastName: '',
    specialty: 'manicure'
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name: </label>
        <input type="text" name="firstName" id="firstName" value={values.firstName} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="lastName">Last name: </label>
        <input type="text" name="lastName" id="lastName" value={values.lastName} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="specialty">Specialty: </label>
        <select name="specialty" value={values.specialty} onChange={handleChange}>
          <option value="manicure">manicure</option>
          <option value="cosmetology">cosmetology</option>
          <option value="hairdressing">hairdressing</option>
        </select>
      </div>
      <button type="submit">Add stylist</button>
    </form>
  );
};
