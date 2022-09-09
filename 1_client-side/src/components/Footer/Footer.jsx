import React from "react";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>All rights reserved &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
