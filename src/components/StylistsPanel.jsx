import { useGetStylistsQuery } from "../queries/useGetStylistsQuery";
import { AddStylistForm } from "./AddStylistForm";
import { StylistInfo } from "./StylistInfo";

export const StylistsPanel = () => {
  const { data } = useGetStylistsQuery();

  if (!data) return null;

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
        <AddStylistForm />
      </div>
    </div>
  );
};
