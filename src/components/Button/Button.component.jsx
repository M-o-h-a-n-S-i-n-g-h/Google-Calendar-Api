import React from "react";
import { ButtonStyle } from "./Button.styled.js"

const Button = ({children, ...restProps}) => {
   return (
     <ButtonStyle {...restProps}>
        {children}
     </ButtonStyle>
   )
}

export default Button;