import { SlArrowDown } from "react-icons/sl";
import { ArrowIcon, StyledSelectInput } from "../styles/StyledSelectInput";
import { StyledInputDiv } from "../styles/StyledInputDiv";
import { StyledButtonForm } from "../styles/StyledButtonForm";
import { StyledDateInput } from "../styles/StyledDateInput";
import { FieldErrors } from "../FieldErrors";

export const TreatmentForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
  stylists,
  clients,
  treatmentTypes,
  errors,
}) => {
  const selectedTreatment = treatmentTypes.find(
    (type) => type.id === values.treatmentTypeId
  );
  const selectedSpecialty = selectedTreatment?.specialty;

  const filteredStylists = stylists.filter(
    (stylist) => stylist.specialty === selectedSpecialty
  );

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputDiv>
        <label htmlFor="treatmentTypeId">Treatment type: </label>
        <div style={{ position: "relative" }}>
          <StyledSelectInput
            name="treatmentTypeId"
            value={values.treatmentTypeId}
            onChange={handleChange}
          >
            {treatmentTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </StyledSelectInput>
          <ArrowIcon>
            <SlArrowDown />
          </ArrowIcon>
        </div>
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="stylistId">Stylist: </label>
        <div style={{ position: "relative" }}>
          <StyledSelectInput
            name="stylistId"
            value={values.stylistId}
            onChange={handleChange}
          >
            {filteredStylists.map((stylist) => (
              <option key={stylist.id} value={stylist.id}>
                {`${stylist.firstName} ${stylist.lastName}`}
              </option>
            ))}
          </StyledSelectInput>
          <ArrowIcon>
            <SlArrowDown />
          </ArrowIcon>
        </div>
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="clientId">Client: </label>
        <div style={{ position: "relative" }}>
          <StyledSelectInput
            name="clientId"
            value={values.clientId}
            onChange={handleChange}
          >
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {`${client.firstName} ${client.lastName}`}
              </option>
            ))}
          </StyledSelectInput>
          <ArrowIcon>
            <SlArrowDown />
          </ArrowIcon>
        </div>
      </StyledInputDiv>

      <StyledInputDiv>
        <label htmlFor="date">Date:</label>
        <StyledDateInput
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
        />
        <FieldErrors errors={errors.date} />
      </StyledInputDiv>
      <StyledButtonForm type="submit" disabled={isPending}>
        Save
      </StyledButtonForm>
    </form>
  );
};
