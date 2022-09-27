import React from "react";
import { BaseButton } from "./button.styles";

const Button = ({ onClick, children, ...props }) => {
  return <BaseButton data-testid="base btn" onClick={onClick} {...props}>{children}</BaseButton>;
};

export default Button;
