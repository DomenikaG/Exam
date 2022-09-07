import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: #fff;

  padding: 48px 24px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledFormWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;
  }

  p.green {
    color: #31c062;
  }

  p.red {
    color: #ff5c00;
  }

  form {
    width: 600px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 16px;

    div {
      display: flex;
      align-items: center;
      gap: 16px;

      label {
        width: 10%;
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
        color: #222222;
      }

      .inputField {
        width: 100%;
        height: 56px;
        padding: 16px;

        border: none;
        border-radius: 8px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);

        ::placeholder {
          color: #c7d7ed;
        }

        ::-webkit-datetime-edit-text {
          color: #c7d7ed;
          padding: 0 0.3em;
        }
        ::-webkit-datetime-edit-month-field {
          color: #c7d7ed;
          background-color: #ffffff;
        }
        ::-webkit-datetime-edit-day-field {
          color: #c7d7ed;
          background-color: #ffffff;
        }
        ::-webkit-datetime-edit-year-field {
          color: #c7d7ed;
          background-color: #ffffff;
        }

        ::-webkit-calendar-picker-indicator {
          cursor: pointer;
          background-color: #c7d7ed;

          border-radius: 8px;
          padding: 8px;
        }

        &:focus {
          outline: 1.5px solid #027aff;
        }
      }

      .select {
        appearance: none;
        background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
          no-repeat;
        background-position: calc(100% - 28px) center !important;
        background-size: 10px 10px;
        color: #c7d7ed;
      }
    }
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 24px;

  .button {
    width: 100%;
  }
  .button:focus {
    outline: none;
  }
`;
