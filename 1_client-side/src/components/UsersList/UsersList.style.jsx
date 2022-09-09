import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  background-color: #f8fbff;
  padding: 48px 24px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  .message {
    text-align: center;
  }
`;

export const StyledEditDataContainer = styled.div`
  width: 800px;

  margin: 0 auto;
  padding: 24px;
  border-radius: 8px;

  background-color: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;

  .editTableHeader {
    p {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;

      color: #067afe;

      margin-bottom: 8px;
    }
  }

  .editTable {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    .dataControlsContainer {
      display: flex;
      gap: 8px;

      .dataControlButton {
        height: 35px;
        width: 35px;

        background-color: #c7d7ed;

        border-radius: 8px;

        display: flex;
        justify-content: center;
        align-items: center;

        i {
          color: #fff;
        }
      }

      .approve {
        &:hover {
          cursor: pointer;
          background-color: #32bf62;
        }
      }

      .cancel {
        &:hover {
          cursor: pointer;
          background-color: #ff5c04;
        }
      }
    }

    .dataInputs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;

      .inputContainer {
        width: 30%;

        input,
        select {
          width: 100%;

          padding: 6px 4px;

          border: 1px solid #c7d7ed;
          border-radius: 8px;
        }

        &:nth-child(2) {
          width: 40%;
        }

        &:nth-child(3) {
          width: 20%;
        }

        &:nth-child(4) {
          width: 10%;
        }
      }

      *:focus {
        outline: none;
      }
    }
  }
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

  .pagination {
    margin-top: 24px;

    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .tableHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    border-bottom: 1px solid #067afe;

    padding-right: 96px;
    padding-bottom: 8px;

    margin-bottom: 8px;

    p {
      width: 30%;

      font-size: 14px;
      line-height: 24px;
      font-weight: 400;

      color: #067afe;

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
  }
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
  gap: 16px;

  .dataControlsContainer {
    display: flex;
    gap: 8px;
  }

  .dataControlButton {
    height: 35px;
    width: 35px;

    background-color: #c7d7ed;

    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    i {
      color: #fff;
    }
  }

  .edit {
    &:hover {
      cursor: pointer;
      background-color: #32bf62;
    }
  }

  .delete {
    &:hover {
      cursor: pointer;
      background-color: #ff5c04;
    }
  }
`;
