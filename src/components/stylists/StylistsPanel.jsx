import { useGetQuery } from "../../queries/useGetQuery";
import { AddStylist } from "./AddStylist";
import { StylistInfo } from "./StylistInfo";

export const StylistsPanel = () => {
  const { data, isFetching } = useGetQuery("stylists");

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data</p>;

  return (
    <div>
      <div>
        <h2>Stylists list:</h2>
        <ul>
          {data.map((element) => (
            <StylistInfo stylist={element} key={element.id} />
          ))}
        </ul>
      </div>
      <div>
        <h2>Add new stylist form</h2>
        <AddStylist/>
      </div>
    </div>
  );
};
