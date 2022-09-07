import styled from "styled-components";

export const StyledButton = styled.input`
  width: 100%;
  border: none;

  border-radius: 12px;
  padding: 12px 48px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 700;

  text-align: center;

  &:hover {
    cursor: pointer;

    background-color: #fff;
    color: #027aff;

    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  }
`;
