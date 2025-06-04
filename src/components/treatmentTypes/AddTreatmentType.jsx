import { useState } from "react";
import { useCreateMutation } from "../../queries/useCreateMutation";
import { TreatmentTypesForm } from "./treatmentTypesForm";

export const AddTreatmentType = () => {
  const { mutate, isPending } = useCreateMutation("treatmentTypes");
  const [values, setValues] = useState({
    name: "",
    duration: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      name: values.name,
      duration: values.duration,
      price: values.price,
    });
    setValues({
      name: "",
      duration: "",
      price: "",
    });
  };
  return (
    <TreatmentTypesForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      isPending={isPending}
    />
  );
};
