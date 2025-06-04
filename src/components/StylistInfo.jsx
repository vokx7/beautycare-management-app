import { useState } from "react"
import { EditStylist } from "./EditStylist";

export const StylistInfo = ({stylist}) => {
  const [isEditing, setIsEditing] = useState();

  const toggleEditMode = () => {
    setIsEditing(prevIsEditing => !prevIsEditing);
  }

    return (
         <li>
            {stylist.firstName} {stylist.lastName} - {stylist.specialty} {" "}
            <button onClick={toggleEditMode}>{isEditing ? 'Cancel' : 'Edit'}</button>
            {isEditing ? <EditStylist stylist={stylist}/> : undefined}
          </li>
    )
}