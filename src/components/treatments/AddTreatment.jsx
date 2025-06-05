import { useState } from "react";
import { useCreateMutation } from "../../queries/useCreateMutation";
import { TreatmentForm } from "./TreatmentForm";


export const AddTreatment = ({treatmentTypes,
  clients,
  stylists}) => {
  const { mutate, isPending } = useCreateMutation("treatments");
  const [values, setValues] = useState({
    treatmentTypeId: "",
    date: "",
    stylistId: "",
    clientId: "",
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
    setValues({
      treatmentTypeId: "",
    date: "",
    stylistId: "",
    clientId: "",
    });
  };
  return (  <TreatmentForm
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
