import React from 'react';

function BpmInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="bpm-input">
        <span>BPM:</span>
        <input
          name="bpm-input"
          id="bpm-input"
          type="number"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default BpmInput;
