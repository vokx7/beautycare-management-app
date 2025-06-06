import { useState } from "react";
import { useCreateMutation } from "../../queries/useCreateMutation";
import { StylistForm } from "./StylistForm";

export const AddStylist = () => {
  const {mutate, isPending} = useCreateMutation("stylists");
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
    <StylistForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending} />
  );
};
