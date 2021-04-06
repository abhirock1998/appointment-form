import React from "react";
import "./input.css";
function Input({
  type,
  name,
  placeHolder,
  isInput = true,
  options = [],
  change,
  lable,
  id,
  nameSelect,
}) {
  return (
    <div className="input">
      <label>{lable}</label>
      {isInput ? (
        <input
          id={id}
          onChange={change}
          type={type}
          placeholder={placeHolder}
          name={name}
        />
      ) : (
        <select name={nameSelect} onChange={change}>
          {options.map(({ title, value, isdefault }, index) => (
            <option hidden={isdefault} value={value} key={index}>
              {title}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Input;
