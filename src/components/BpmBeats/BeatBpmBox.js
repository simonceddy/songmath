import React from 'react';

function BeatBpmBox({
  beat = '1',
  duration,
  beatLength,
  tripletDuration,
  dottedDuration
}) {
  const imgName = beat.replace('/', '-');
  return (
    <div
      className="px-2 py-1 border border-blue-500 m-1 flex flex-row justify-between text-sm hover:bg-blue-100 flex-1 w-full mx-auto items-center"
    >
      <div className="w-8 h-8 mx-2 flex-1 break-words">
        <img
          src={`/songmath/static/img/${imgName}.svg`}
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
      <div className="flex-1 break-words mx-2">
        {duration} ms
      </div>
      <div className="flex-1 break-words mx-2">
        {tripletDuration} ms triplet
      </div>
      <div className="flex-1 break-words mx-2">
        {dottedDuration} ms dotted
      </div>
    </div>
  );
}

export default BeatBpmBox;
