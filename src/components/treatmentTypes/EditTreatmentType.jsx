import { useState } from "react";
import { useUpdateMutation } from "../../queries/useUpdateMutation";
import { TreatmentTypesForm } from "./treatmentTypesForm";

export const EditTreatmentType = ({ treatmentType, onSuccess }) => {
  const { mutate, isPending } = useUpdateMutation(
    "treatmentTypes",
    treatmentType.id
  );
  const [values, setValues] = useState({
    name: treatmentType.name,
    duration: treatmentType.duration,
    price: treatmentType.price,
    specialty: treatmentType.specialty,
  });

  const [errors, setErrors] = useState({
    name: [],
    duration: [],
    price: [],
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
    let isSuccess = true;

    const newErrors = {
      name: [],
      duration: [],
      price: [],
    };

    if (!values.name.trim()) {
      newErrors.name.push("This field is required!");
      isSuccess = false;
    }
    if (!values.duration.trim()) {
      newErrors.duration.push("This field is required!");
      isSuccess = false;
    } else {
      if (!/^\d+$/.test(values.duration)) {
        newErrors.duration.push("This field must contain only numbers!");
        isSuccess = false;
      }
    }
    if (!values.price.trim()) {
      newErrors.price.push("This field is required!");
      isSuccess = false;
    } else {
      if (!/^\d+([.,]\d{1,2})?$/.test(values.price.trim())) {
        newErrors.amount.push("Please enter a valid amount (e.g. 10 or 10.99)");
        isSuccess = false;
      }
    }
    setErrors(newErrors);

    if (!isSuccess) return;

    mutate(
      {
        name: values.name,
        duration: values.duration,
        price: values.price,
        specialty: values.specialty,
      },
      {
        onSuccess: () => {
          if (onSuccess) onSuccess();
        },
      }
    );
  };
  return (
    <TreatmentTypesForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      isPending={isPending}
      errors={errors}
    />
  );
};
