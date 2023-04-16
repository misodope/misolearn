import React from "react";

export const TextInput = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.label}</p>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.inputValue}
      />
    </div>
  );
};
