import { useState } from "react";
import { EditTreatment } from "./EditTreatment";

export const TreatmentInfo = ({
  treatment,
  treatmentTypes,
  clients,
  stylists,
}) => {
  const [mode, setMode] = useState("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  const stylist = stylists.find((s) => s.id === treatment.stylistId);
  const client = clients.find((c) => c.id === treatment.clientId);
  const treatmentType = treatmentTypes.find(
    (t) => t.id === treatment.treatmentTypeId
  );

  return (
    <li>
      {treatmentType?.name} <br />
      Stylist: {stylist?.firstName} {stylist?.lastName} <br />
      Client: {client?.firstName} {client?.lastName} <br />
      Date: {treatment.date}
      <br/>
      <button onClick={toggleEditMode}>
        {mode === "edit" ? "Cancel" : "Edit"}
      </button>
      {mode === "edit" ? <EditTreatment treatment={treatment} treatmentTypes={treatmentTypes} clients={clients} stylists={stylists} /> : undefined}
    </li>
  );
};
