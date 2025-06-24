import { useState } from "react";
import { useUpdateMutation } from "../../queries/useUpdateMutation";
import { StylistForm } from "./StylistForm";

export const EditStylist = ({ stylist, onSuccess }) => {
  const { mutate, isPending } = useUpdateMutation("stylists", stylist.id);
  const [values, setValues] = useState({
    firstName: stylist.firstName,
    lastName: stylist.lastName,
    specialty: stylist.specialty,
  });

  const [errors, setErrors] = useState({
    firstName: [],
    lastName: [],
    phone: [],
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
      firstName: [],
      lastName: [],
    };

    if (!values.firstName.trim()) {
      newErrors.firstName.push("This field is required!");
      isSuccess = false;
    }
    if (!values.lastName.trim()) {
      newErrors.lastName.push("This field is required!");
      isSuccess = false;
    }

    setErrors(newErrors);

    if (!isSuccess) return;

    mutate(
      {
        firstName: values.firstName,
        lastName: values.lastName,
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
    <StylistForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      isPending={isPending}
      errors={errors}
    />
  );
};
