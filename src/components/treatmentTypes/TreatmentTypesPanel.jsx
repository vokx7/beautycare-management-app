import { useGetQuery } from "../../queries/useGetQuery";
import { AddTreatmentType } from "./AddTreatmentType";
import { TreatmentTypeInfo } from "./TreatmentTypeInfo";

export const TreatmentTypesPanel = () => {
     const { data, isFetching } = useGetQuery("treatmentTypes");
        
          if (isFetching) return <p>Loading...</p>
        
          if (!data) return <p>No data</p>;
        
          return (
            <div>
              <div>
                <h2>Treatment types list:</h2>
                <ul>
                  {data.map((element) => (
                    <TreatmentTypeInfo treatmentType={element} key={element.id} />
                  ))}
                </ul>
              </div>
              <div>
                <h2>Add new treatment type form</h2>
                <AddTreatmentType/>
              </div>
            </div>
          )
}