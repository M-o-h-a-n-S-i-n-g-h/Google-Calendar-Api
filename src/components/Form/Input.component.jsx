import React from "react";

export const Input = ({name, type, value, onChange, label}) => {
   return (
     <>
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
     </>
   )
}