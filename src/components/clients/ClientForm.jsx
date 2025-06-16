import styled from "styled-components";

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 0;
`;

const StyledInput = styled.input`
  display: flex;
  align-self: stretch;
  padding: 10px 15px;
  background: white;
  border-radius: 40px;
  border: 1px solid #fafafa;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.button`
  background: #f5f7fa;
  color: #222222;
  border-radius: 40px;
  margin: 10px 0;
  padding: 10px 0;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
`;

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
      <StyledButton type="submit" disabled={isPending}>
        Save
      </StyledButton>
    </form>
  );
};
