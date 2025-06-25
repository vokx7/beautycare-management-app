import styled from "styled-components";

export const StyledSelectInput = styled.select`
  display: flex;
  width: 100%;
  align-self: stretch;
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
export const ArrowIcon = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 12px;
  color: #999;
`;
