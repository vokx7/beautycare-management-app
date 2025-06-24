import { useState } from "react";
import { useCreateMutation } from "../../queries/useCreateMutation";
import { TreatmentTypesForm } from "./treatmentTypesForm";

export const AddTreatmentType = () => {
  const { mutate, isPending } = useCreateMutation("treatmentTypes");
  const [values, setValues] = useState({
    name: "",
    duration: "",
    price: "",
    specialty: "manicure",
  });

  const [errors, setErrors] = useState({
    name: [],
    duration: [],
    price: [],
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

    if (!isSuccess) {
      setSuccess(false);
      return;
    }

    mutate(
      {
        name: values.name,
        duration: values.duration,
        price: values.price,
        specialty: values.specialty,
      },
      {
        onSuccess: () => {
          setSuccess(true);
          setValues({
            name: "",
            duration: "",
            price: "",
            specialty: "",
          });
          setErrors({
            name: [],
            duration: [],
            price: [],
          });
          setTimeout(() => setSuccess(false), 3000);
        },
      }
    );
  };
  return (
    <>
      <TreatmentTypesForm
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
