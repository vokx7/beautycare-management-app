import { useState } from "react";
import { useUpdateMutation } from "../../queries/useUpdateMutation";
import { TreatmentForm } from "./TreatmentForm";

export const EditTreatment = ({
  treatment,
  treatmentTypes,
  clients,
  stylists,
  onSuccess,
}) => {
  const { mutate, isPending } = useUpdateMutation("treatments", treatment.id);
  const [values, setValues] = useState({
    treatmentTypeId: treatment.treatmentTypeId,
    date: treatment.date,
    stylistId: treatment.stylistId,
    clientId: treatment.clientId,
  });

  const [errors, setErrors] = useState({
    date: [],
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
      date: [],
    };

    setErrors(newErrors);

    if (!isSuccess) return;

    mutate(
      {
        treatmentTypeId: values.treatmentTypeId,
        date: values.date,
        stylistId: values.stylistId,
        clientId: values.clientId,
      },
      {
        onSuccess: () => {
          if (onSuccess) onSuccess();
        },
      }
    );
  };
  return (
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
  );
};
