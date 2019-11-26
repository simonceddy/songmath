import React from 'react';

function ResetBox({ reset }) {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <button
        type="button"
        onClick={reset}
        className="reset-button"
      >
        Reset to defaults
      </button>
    </div>
  );
}

export default ResetBox;
