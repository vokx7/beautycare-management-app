import styled from "styled-components";

const StyledConfirmationDiv = styled.div`
  background-color: #d9ead3;
  color: #0b6623;
  border-radius: 40px;
  padding: 6px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const StyledConfirmationInfo = () => {
  return (
    <StyledConfirmationDiv>
      <p style={{ margin: 0 }}>
        User has been added succesfully! <span>&#128133;</span>
      </p>
    </StyledConfirmationDiv>
  );
};
