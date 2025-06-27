import { StyledRecentAppointmentBox } from "./RecentAppointmentBox";

export const Top3TreatmentTypes = ({ treatments, treatmentTypes }) => {
  const counts = treatments.reduce((acc, treatment) => {
    acc[treatment.treatmentTypeId] = (acc[treatment.treatmentTypeId] || 0) + 1;
    return acc;
  }, {});

  const sortedTop3 = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([typeId, count]) => {
      const type = treatmentTypes.find((t) => t.id === typeId);
      return { ...type, count };
    });

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
        TOP 3
      </p>
      {sortedTop3.map((type, index) => (
        <div key={type.id}>
          <p
            style={{
              margin: 0,
              marginBottom: "4px",
              textTransform: "uppercase",
            }}
          >
            {index + 1}. {type.name}
            <span style={{ color: "#8D8C8C", textTransform: "none" }}>
              – {type.count} {type.count === 1 ? "time" : "times"}
            </span>
          </p>
        </div>
      ))}
    </StyledRecentAppointmentBox>
  );
};
