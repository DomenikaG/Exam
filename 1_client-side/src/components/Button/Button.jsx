import { StyledButton } from "./Button.style";
import "./Button.css";

const Button = ({ text, type, value, design }) => {
  return (
    <StyledButton type={type} className={design} value={value}>
      {text}
    </StyledButton>
  );
};

export default Button;
