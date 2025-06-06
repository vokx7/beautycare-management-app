import { useState } from "react";
import { useUpdateMutation } from "../../queries/useUpdateMutation";
import { StylistForm } from "./StylistForm";

export const EditStylist = ({stylist}) => {
      const {mutate, isPending} = useUpdateMutation("stylists", stylist.id);
      const [values, setValues] = useState({
        firstName: stylist.firstName,
        lastName: stylist.lastName,
        specialty: stylist.specialty
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
          firstName: values.firstName,
          lastName: values.lastName,
          specialty: values.specialty
        })
      }
      return (
        <StylistForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending} />
      );
}