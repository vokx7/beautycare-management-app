import { useState } from "react";
import { useCreateMutation } from "../../queries/useCreateMutation";
import { StylistForm } from "./StylistForm";

export const AddStylist = () => {
  const { mutate, isPending } = useCreateMutation("stylists");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    specialty: "manicure",
  });

  const [errors, setErrors] = useState({
    firstName: [],
    lastName: [],
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

    if (!isSuccess) {
      setSuccess(false);
      return;
    }

    mutate(
      {
        firstName: values.firstName,
        lastName: values.lastName,
        specialty: values.specialty,
      },
      {
        onSuccess: () => {
          setSuccess(true);
          setValues({
            firstName: "",
            lastName: "",
            specialty: "manicure",
          });
          setErrors({ firstName: [], lastName: [] });
          setTimeout(() => setSuccess(false), 3000);
        },
      }
    );
  };
  return (
    <>
      <StylistForm
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
