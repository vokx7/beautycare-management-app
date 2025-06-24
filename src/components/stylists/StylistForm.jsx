import styled from "styled-components";
import { StyledButtonForm } from "../styles/StyledButtonForm";
import { StyledInput } from "../styles/StyledInput";
import { StyledInputDiv } from "../styles/StyledInputDiv";
import { SlArrowDown } from "react-icons/sl";
import { FieldErrors } from "../FieldErrors";

const StyledSelect = styled.select`
  padding: 10px 15px;
  background: white;
  border-radius: 40px;
  border: 1px solid #fafafa;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  appearance: none;
  font-size: 16px;
  color: #222;

  &:focus {
    outline: none;
    border-color: #ddd;
    box-shadow: 0px 0px 0px 2px rgba(145, 65, 65, 0.2);
  }
`;
const ArrowIcon = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 12px;
  color: #999;
`;

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
          <StyledSelect
            name="specialty"
            value={values.specialty}
            onChange={handleChange}
          >
            <option value="manicure">manicure</option>
            <option value="cosmetology">cosmetology</option>
            <option value="hairdressing">hairdressing</option>
          </StyledSelect>
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
