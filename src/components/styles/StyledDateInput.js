import styled from "styled-components";

export const StyledDateInput = styled.input.attrs({ type: "date" })`
  width: 100%;
  padding: 10px 15px;
  background: white;
  border-radius: 40px;
  border: 1px solid #fafafa;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #222;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #ddd;
    box-shadow: 0px 0px 0px 2px rgba(145, 65, 65, 0.2);
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.5);
    margin-right: 5px;
  }
`;
