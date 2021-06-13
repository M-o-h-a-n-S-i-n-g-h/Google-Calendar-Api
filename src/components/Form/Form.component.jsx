import React from "react";
import { FormStyles } from "./Form.styled";

const FormComponent = ({children, onSubmit}) => {
   return (
     <form onSubmit={onSubmit}>
        {children}
     </form>
   )
}

export const Form = ({children, onSubmit}) => {
   return (
     <FormStyles>
        <FormComponent children={children} onSubmit={onSubmit}/>
     </FormStyles>
   )
}