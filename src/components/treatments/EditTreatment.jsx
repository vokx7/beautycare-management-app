import { useState } from "react";
import { useUpdateMutation } from "../../queries/useUpdateMutation";
import { TreatmentForm } from "./TreatmentForm";

export const EditTreatment = ({ treatment,
  treatmentTypes,
  clients,
  stylists }) => {
  const { mutate, isPending } = useUpdateMutation("treatments", treatment.id);
  const [values, setValues] = useState({
    treatmentTypeId: treatment.treatmentTypeId,
    date: treatment.date,
    stylistId: treatment.stylistId,
    clientId: treatment.clientId,
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
      treatmentTypeId: values.treatmentTypeId,
      date: values.date,
      stylistId: values.stylistId,
      clientId: values.clientId,
    });
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
    />
  );
};
