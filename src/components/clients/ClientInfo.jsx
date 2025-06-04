import { useState } from "react";
import { EditClient } from "./EditClient";

export const ClientInfo = ({client}) => {
  const [mode, setMode] = useState('none');

  const toggleEditMode = () => {
    setMode(prevMode => prevMode === "edit" ? "none" : "edit");
  }


    return (
         <li>
            {client.firstName} {client.lastName} - tel. {client.phone} {" "}

            <button onClick={toggleEditMode}>{mode === 'edit' ? 'Cancel' : 'Edit'}</button>
            {mode === 'edit' ? <EditClient client={client}/> : undefined}

          </li>
    )
}