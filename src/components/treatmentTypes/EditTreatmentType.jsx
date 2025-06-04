import { useState } from "react";
import { useUpdateMutation } from "../../queries/useUpdateMutation";
import { TreatmentTypesForm } from "./treatmentTypesForm";


export const EditTreatmentType = ({treatmentType}) => {
      const {mutate, isPending} = useUpdateMutation("treatmentTypes", treatmentType.id);
      const [values, setValues] = useState({
        name: treatmentType.name,
        duration: treatmentType.duration,
        price: treatmentType.price
      })
    
      const handleChange = (e) => {
          const {name, value} = e.target;
    
          setValues(prevValues => ({
            ...prevValues,
            [name]: value
          }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        mutate({
          name: values.name,
          duration: values.duration,
          price: values.price
        })
      }
      return (
        <TreatmentTypesForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending} />
      );
}