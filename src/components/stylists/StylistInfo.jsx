import { useState } from "react"
import { EditStylist } from "./EditStylist";
import { DeleteStylistConfirmation } from "./DeleteStylistConfirmation";

export const StylistInfo = ({stylist}) => {
  const [mode, setMode] = useState('none');

  const toggleEditMode = () => {
    setMode(prevMode => prevMode === "edit" ? "none" : "edit");
  }

  const toggleDeleteMode = () => {
    setMode(prevMode => prevMode === "delete" ? "none" : "delete");
  }

    return (
         <li>
            {stylist.firstName} {stylist.lastName} - {stylist.specialty} {" "}

            <button onClick={toggleEditMode}>{mode === 'edit' ? 'Cancel' : 'Edit'}</button>
            {mode === 'edit' ? <EditStylist stylist={stylist}/> : undefined}

             <button onClick={toggleDeleteMode}>{mode === 'delete' ? 'Cancel' : 'Delete'}</button>
            {mode === 'delete' ? <DeleteStylistConfirmation onCancel={toggleDeleteMode} stylist={stylist}/> : undefined}
          </li>
    )
}