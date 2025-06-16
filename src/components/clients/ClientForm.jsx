import { StyledButtonForm } from "../styles/StyledButtonForm";
import { StyledInput } from "../styles/StyledInput";
import { StyledInputDiv } from "../styles/StyledInputDiv";

export const ClientForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <StyledInputDiv>
        <label htmlFor="firstName">First name: </label>
        <StyledInput
          placeholder="Type your name"
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="lastName">Last name: </label>
        <StyledInput
          placeholder="Type your last name"
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="phone">Phone number: </label>
        <StyledInput
          placeholder="Type your phone number"
          type="text"
          name="phone"
          id="phone"
          value={values.phone}
          onChange={handleChange}
        />
      </StyledInputDiv>
      <StyledButtonForm type="submit" disabled={isPending}>
        Save
      </StyledButtonForm>
    </form>
  );
};
