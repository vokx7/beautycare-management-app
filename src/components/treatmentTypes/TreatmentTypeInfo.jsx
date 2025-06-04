import { useState } from "react";
import { EditTreatmentType } from "./EditTreatmentType";

export const TreatmentTypeInfo = ({treatmentType}) => {
  const [mode, setMode] = useState('none');

  const toggleEditMode = () => {
    setMode(prevMode => prevMode === "edit" ? "none" : "edit");
  }


    return (
         <li>
            {treatmentType.name} -  {treatmentType.duration} - {treatmentType.price}zł {" "}

            <button onClick={toggleEditMode}>{mode === 'edit' ? 'Cancel' : 'Edit'}</button>
            {mode === 'edit' ? <EditTreatmentType treatmentType={treatmentType}/> : undefined}

          </li>
    )
}