import React from 'react';

function SettingsInput({
  type = 'number',
  min,
  max,
  value,
  onChange,
  className
}) {
  return (
    <input
      className={`border border-blue-500 bg-yellow-200 p-1 ${className}`}
      type={type}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
}

export default SettingsInput;
