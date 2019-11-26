import React from 'react';
import BeatBpmBox from './BeatBpmBox';

function BeatRow({ beat = '1', duration, beatLength }) {
  return (
    <div className>
      <BeatBpmBox
        key={beat}
        beatLength={beatLength}
        beat={beat}
        duration={duration}
      />
    </div>
  );
}

export default BeatRow;
