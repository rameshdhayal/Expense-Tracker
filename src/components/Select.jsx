import React from "react";

export default function Select({
  label,
  id,
  name,
  value,
  onchange,
  options,
  defaultOption,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onchange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}

        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}
