import React from 'react';

function OptionRow({ children, label = '' }) {
  return (
    <div className="flex flex-row items-center justify-between m-1 px-3 py-1 w-3/5 font-semibold">
      <span className="px-3 flex-1 text-right">{label}:</span>
      <span className="flex-1">{children}</span>
    </div>
  );
}

export default OptionRow;
