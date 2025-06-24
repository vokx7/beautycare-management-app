import { useState } from "react";
import { useUpdateMutation } from "../../queries/useUpdateMutation";
import { ClientForm } from "./ClientForm";

export const EditClient = ({ client, onSuccess }) => {
  const { mutate, isPending } = useUpdateMutation("clients", client.id);
  const [values, setValues] = useState({
    firstName: client.firstName,
    lastName: client.lastName,
    phone: client.phone,
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
      phone: [],
    };

    if (!values.firstName.trim()) {
      newErrors.firstName.push("This field is required!");
      isSuccess = false;
    }
    if (!values.lastName.trim()) {
      newErrors.lastName.push("This field is required!");
      isSuccess = false;
    }
    if (!values.phone.trim()) {
      newErrors.phone.push("This field is required!");
      isSuccess = false;
    } else {
      if (!/^\d+$/.test(values.phone)) {
        newErrors.phone.push("This field must contain only numbers!");
        isSuccess = false;
      }
      if (values.phone.length < 9) {
        newErrors.phone.push("This field must contain at least 9 digits!");
        isSuccess = false;
      }
    }

    setErrors(newErrors);

    if (!isSuccess) return;

    mutate(
      {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
      },
      {
        onSuccess: () => {
          if (onSuccess) onSuccess();
        },
      }
    );
  };
  return (
    <ClientForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      isPending={isPending}
      errors={errors}
    />
  );
};
