import { useState } from "react";
import { useUpdateMutation } from "../../queries/useUpdateMutation";
import { ClientForm } from "./ClientForm";

export const EditClient = ({client}) => {
      const {mutate, isPending} = useUpdateMutation("clients", client.id);
      const [values, setValues] = useState({
        firstName: client.firstName,
        lastName: client.lastName,
        phone: client.phone
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
          phone: values.phone
        })
      }
      return (
        <ClientForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending} />
      );
}