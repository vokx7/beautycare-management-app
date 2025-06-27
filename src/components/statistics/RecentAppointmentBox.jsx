import styled from "styled-components";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";

const StyledRecentAppointmentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12.699999809265137px -9px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 1.5px #e9e9e9 solid;
  max-width: 400px;
`;

export const RecentAppointmentBox = ({
  treatments,
  treatmentTypes,
  stylists,
  clients,
}) => {
  const sortedAppointments = [...treatments].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const recentAppointment = sortedAppointments[0];

  const stylist = stylists.find((s) => s.id === recentAppointment?.stylistId);
  const client = clients.find((c) => c.id === recentAppointment?.clientId);
  const treatmentType = treatmentTypes.find(
    (t) => t.id === recentAppointment?.treatmentTypeId
  );

  return (
    <StyledRecentAppointmentBox>
      <p
        style={{
          margin: 0,
          marginBottom: "4px",
          fontWeight: "600",
          color: "#914141",
        }}
      >
        Recent appointment
      </p>
      <div>
        <p
          style={{ margin: 0, marginBottom: "4px", textTransform: "uppercase" }}
        >
          {" "}
          {treatmentType?.name}{" "}
        </p>
        <StyledInfoDetails>
          Stylist: {stylist?.firstName} {stylist?.lastName}
        </StyledInfoDetails>
        <StyledInfoDetails>
          Client: {client?.firstName} {client?.lastName}
        </StyledInfoDetails>
        <StyledInfoDetails>Date: {recentAppointment?.date}</StyledInfoDetails>
      </div>
    </StyledRecentAppointmentBox>
  );
};
