import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ active }) => (active ? "#914141" : "#F5F7FA")};
  color: ${({ active }) => (active ? "#fff" : "#222222")};
  border-radius: 40px;
  padding: 10px 0;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  max-width: 200px;
  width: 100%;
`;

export const Button = ({ active, onClick, children }) => {
  <StyledButton active={active} onClick={onClick}>
    {children}
  </StyledButton>;
};
