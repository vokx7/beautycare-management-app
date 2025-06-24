import { StyledButtonForm } from "../styles/StyledButtonForm";
import { StyledInput } from "../styles/StyledInput";
import { StyledInputDiv } from "../styles/StyledInputDiv";
import { FieldErrors } from "../FieldErrors";

export const ClientForm = ({
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
          placeholder="Type client's name"
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
          placeholder="Type client's last name"
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        <FieldErrors errors={errors.lastName} />
      </StyledInputDiv>
      <StyledInputDiv>
        <label htmlFor="phone">Phone number: </label>
        <StyledInput
          placeholder="Type client's phone number"
          type="text"
          name="phone"
          id="phone"
          value={values.phone}
          onChange={handleChange}
        />
        <FieldErrors errors={errors.phone} />
      </StyledInputDiv>
      <StyledButtonForm type="submit" disabled={isPending}>
        Save
      </StyledButtonForm>
    </form>
  );
};
