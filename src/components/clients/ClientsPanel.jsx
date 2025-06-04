import { useGetQuery } from "../../queries/useGetQuery";
import { AddClient } from "./AddClient";
import { ClientInfo } from "./ClientInfo";

export const ClientsPanel = () => {
    const { data, isFetching } = useGetQuery("clients");
    
      if (isFetching) return <p>Loading...</p>
    
      if (!data) return <p>No data</p>;
    
      return (
        <div>
          <div>
            <h2>Clients list:</h2>
            <ul>
              {data.map((element) => (
                <ClientInfo client={element} key={element.id} />
              ))}
            </ul>
          </div>
          <div>
            <h2>Add new client form</h2>
            <AddClient/>
          </div>
        </div>
      );
}