import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  background-color: #f8fbff;
  padding: 48px 24px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledBookingsContainer = styled.div`
  width: 800px;

  margin: 0 auto;
  padding: 24px;
  border-radius: 8px;

  background-color: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
`;

export const StyledList = styled.ul`
  width: 100%;
  padding: 8px 0;

  display: flex;
  gap: 16px;

  list-style: none;
  border-bottom: 1px solid #dfe2e6;

  li {
    width: 30%;

    font-size: 14px;
    line-height: 24px;
    font-weight: 400;

    &:nth-child(2) {
      width: 40%;
      text-align: center;
    }

    &:nth-child(3) {
      width: 20%;
      text-align: center;
    }

    &:nth-child(4) {
      width: 10%;
      text-align: right;
    }
  }
`;

export const StyledClientWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;
