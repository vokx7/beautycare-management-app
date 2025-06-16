import styled from "styled-components";

export const StyledInfoBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3.525423526763916px 3.525423526763916px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-width: 400px;
`;
