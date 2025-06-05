import { useGetQuery } from "../../queries/useGetQuery";
import { AddTreatment } from "./AddTreatment";
import { TreatmentInfo } from "./TreatmentInfo";

export const TreatmentsPanel = () => {
  const { data: treatments, isFetching: fetchingTreatments } =
    useGetQuery("treatments");
    const { data: treatmentTypes, isFetching: fetchingTreatmentTypes } =
    useGetQuery("treatmentTypes");
  const { data: clients, isFetching: fetchingClients } = useGetQuery("clients");
  const { data: stylists, isFetching: fetchingStylists } =
    useGetQuery("stylists");

  if (fetchingTreatments || fetchingTreatmentTypes || fetchingClients || fetchingStylists)
    return <p>Loading...</p>;

  if (!treatments || !treatmentTypes || !clients || !stylists) return <p>No data</p>;

  return (
    <div>
      <div>
        <h2>List of services performed:</h2>
        <ul>
          {treatments.map((element) => (
            <TreatmentInfo
              treatment={element}
              treatmentTypes={treatmentTypes}
              clients={clients}
              stylists={stylists}
              key={element.id}
            />
          ))}
        </ul>
      </div>
      <div>
        <h2>Add new service form</h2>
        <AddTreatment treatmentTypes={treatmentTypes}
              clients={clients}
              stylists={stylists}/>
      </div>
    </div>
  );
};
