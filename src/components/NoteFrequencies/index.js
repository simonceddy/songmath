import React, { useMemo } from 'react';
import NoteBox from './NoteBox';
import splitArray from '../../support/splitArray';
import { CHROMATIC_SCALE } from '../../support/scales/index';

function NoteFrequencies({ notes = [] }) {
  const cols = useMemo(() => splitArray(notes, CHROMATIC_SCALE.length), [notes]);

  return (
    <div className="flex flex-row flex-wrap justify-around">
      {cols.map((rows, index) => (
        <div key={index} className="flex flex-col p-2 hover:bg-green-200">
          {rows.map(({ note, step, hz }) => (
            <NoteBox note={note} hz={hz} key={step} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default NoteFrequencies;
