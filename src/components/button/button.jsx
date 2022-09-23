import React from "react";
import { BaseButton } from "./button.styles";

const Button = ({ children, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};

export default Button;
