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

  const [errors, setErrors] = useState({
    firstName: [],
    lastName: [],
    phone: [],
  });
  const [success, setSuccess] = useState(false);

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

    if (!isSuccess) {
      setSuccess(false);
      return;
    }

    mutate(
      {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
      },
      {
        onSuccess: () => {
          setSuccess(true);
          setValues({ firstName: "", lastName: "", phone: "" });
          setErrors({ firstName: [], lastName: [], phone: [] });
          setTimeout(() => setSuccess(false), 3000);
        },
      }
    );
  };

  return (
    <>
      <ClientForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
        isPending={isPending}
        errors={errors}
      />
      {success && (
        <p style={{ color: "green", marginTop: "10px" }}>
          User has been added succesfully!
        </p>
      )}
    </>
  );
};
