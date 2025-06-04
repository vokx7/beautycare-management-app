import { useState } from "react";
import { useCreateMutation } from "../../queries/useCreateMutation";
import { ClientForm } from "./ClientForm";

export const AddClient = () => {
  const { mutate, isPending } = useCreateMutation("clients");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
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
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
    });
    setValues({
      firstName: "",
      lastName: "",
      phone: "",
    });
  };
  return (
    <ClientForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      isPending={isPending}
    />
  );
};
