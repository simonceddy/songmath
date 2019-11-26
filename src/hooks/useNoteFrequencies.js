/* eslint-disable no-unused-vars */
import { useState, useMemo } from 'react';
import prepareScale from '../maths/prepareScale';
import EqualTemperedHz from '../maths/EqualTemperedHz';

/**
 * NoteFrequencies hook
 * @param {number} refHz The reference frequency (A4) for calculating notes. Defaults to 440.
 */
export default function useNoteFrequencies(refHz = 440) {
  const [referenceHz, setReferenceHz] = useState(refHz);

  const getNotes = useMemo(() => (
    prepareScale(new EqualTemperedHz(referenceHz))
  ), [referenceHz]);

  return {
    referenceHz,
    setReferenceHz,
    getNotes
  };
}
