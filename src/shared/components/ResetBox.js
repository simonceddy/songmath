import React from 'react';

function ResetBox({ reset }) {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <button
        type="button"
        onClick={reset}
        className="p-2 mx-4 capitalize border-2 border-red-700 bg-red-300 text-lg rounded-lg hover:border-red-500 hover:bg-black hover:text-red-500"
      >
        Reset to defaults
      </button>
    </div>
  );
}

export default ResetBox;
