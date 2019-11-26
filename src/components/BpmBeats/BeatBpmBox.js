import React from 'react';

function BeatBpmBox({ beat = '1', duration, beatLength }) {
  const imgName = beat.replace('/', '-');
  return (
    <div
      className="px-3 py-2 border border-blue-500 m-1 flex flex-row justify-between text-sm hover:bg-blue-100 flex-1 w-3/5 mx-auto items-center"
    >
      <div className="w-8 h-8 mx-2 flex-1 break-words">
        <img
          src={`/static/img/${imgName}.svg`}
          alt={beat}
          style={{
            width: 'auto',
            maxHeight: '100%'
          }}
        />
      </div>
      <div className="flex-1 break-words">
        {beat} note
      </div>
      <div className="flex-1 break-words">
        {beatLength} beat{beatLength === 1 ? null : 's'}
      </div>
      <div className="flex-1 break-words">
        {duration} ms
      </div>
    </div>
  );
}

export default BeatBpmBox;
