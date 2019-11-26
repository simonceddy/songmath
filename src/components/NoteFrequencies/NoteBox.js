import React from 'react';

function NoteBox({ note, hz }) {
  return (
    <div
      className="px-3 py-1 border bg-blue-200 border-blue-500 m-1 flex flex-row justify-center text-sm hover:bg-yellow-200 flex-1"
    >
      <span className="mr-2">
        <span className="font-semibold text-green-800">{note}</span> :
      </span>
      <span className="flex-1">
        {`${hz} `}
        <span className="font-semibold text-xs">
          Hz
        </span>
      </span>
    </div>
  );
}

export default NoteBox;
