import { useState } from "react";
import { useCreateMutation } from "../../queries/useCreateMutation";
import { TreatmentForm } from "./TreatmentForm";
import { StyledConfirmationInfo } from "../StyledConfirmationInfo";

export const AddTreatment = ({ treatmentTypes, clients, stylists }) => {
  const { mutate, isPending } = useCreateMutation("treatments");
  const [values, setValues] = useState({
    treatmentTypeId: "1",
    date: "",
    stylistId: "2",
    clientId: "1",
  });

  const [errors, setErrors] = useState({
    date: [],
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
      date: [],
    };

    if (!values.date.trim()) {
      newErrors.date.push("This field is required!");
      isSuccess = false;
    }

    setErrors(newErrors);

    if (!isSuccess) {
      setSuccess(false);
      return;
    }

    mutate(
      {
        treatmentTypeId: values.treatmentTypeId,
        date: values.date,
        stylistId: values.stylistId,
        clientId: values.clientId,
      },
      {
        onSuccess: () => {
          setSuccess(true);
          setValues({
            treatmentTypeId: "",
            date: "",
            stylistId: "",
            clientId: "",
          });
          setErrors({ date: [] });
          setTimeout(() => setSuccess(false), 3000);
        },
      }
    );
  };
  return (
    <>
      <TreatmentForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
        isPending={isPending}
        stylists={stylists}
        clients={clients}
        treatmentTypes={treatmentTypes}
        errors={errors}
      />
      {success && <StyledConfirmationInfo />}
    </>
  );
};
