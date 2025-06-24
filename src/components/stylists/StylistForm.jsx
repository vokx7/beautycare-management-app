import { StyledButtonForm } from "../styles/StyledButtonForm";
import { StyledInput } from "../styles/StyledInput";
import { StyledInputDiv } from "../styles/StyledInputDiv";
import { SlArrowDown } from "react-icons/sl";
import { FieldErrors } from "../FieldErrors";
import { ArrowIcon, StyledSelectInput } from "../StyledSelectInput";

export const StylistForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <StyledInputDiv>
        <label htmlFor="firstName">First name: </label>
        <StyledInput
          placeholder="Type stylist's name"
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        <FieldErrors errors={errors.firstName} />
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="lastName">Last name: </label>
        <StyledInput
          placeholder="Type stylist's last name"
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        <FieldErrors errors={errors.lastName} />
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="specialty">Specialty: </label>
        <div style={{ position: "relative" }}>
          <StyledSelectInput
            name="specialty"
            value={values.specialty}
            onChange={handleChange}
          >
            <option value="manicure">manicure</option>
            <option value="cosmetology">cosmetology</option>
            <option value="hairdressing">hairdressing</option>
          </StyledSelectInput>
          <ArrowIcon>
            <SlArrowDown />
          </ArrowIcon>
        </div>
      </StyledInputDiv>
      <StyledButtonForm type="submit" disabled={isPending}>
        Save
      </StyledButtonForm>
    </form>
  );
};
