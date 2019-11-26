import React from 'react';

function BeatBpmBox({ beat, duration, beatLength }) {
  return (
    <div
      className="px-3 py-2 border border-blue-500 m-1 flex flex-row justify-center text-sm hover:bg-blue-100 flex-1"
    >
      {beatLength} beat{beatLength <= 1 ? null : 's'} - {beat} note: {duration} ms
    </div>
  );
}

export default BeatBpmBox;
