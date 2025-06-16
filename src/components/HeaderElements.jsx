import styled from "styled-components";

const Heading = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 40px;
  font-family: Italiana;
  letter-spacing: 1.2px;
  word-wrap: break-word;
`;

const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 74px;
`;

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

export const HeaderElements = ({
  title,
  onClickList,
  onClickAdd,
  activeList,
  activeAdd,
}) => {
  return (
    <>
      <Heading>{title}</Heading>
      <ButtonContainer>
        <StyledButton active={activeList} onClick={onClickList}>
          List
        </StyledButton>
        <StyledButton active={activeAdd} onClick={onClickAdd}>
          Add new
        </StyledButton>
      </ButtonContainer>
    </>
  );
};
