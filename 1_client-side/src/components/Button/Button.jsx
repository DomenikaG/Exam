import { StyledButton } from "./Button.style";
import "./Button.css";

const Button = ({ text, action, type, value, style }) => {
  return (
    <StyledButton type={type} onClick={action} className={style} value={value}>
      {text}
    </StyledButton>
  );
};

export default Button;
