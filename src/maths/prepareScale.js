// eslint-disable-next-line no-unused-vars
import EqualTemperedHz from './EqualTemperedHz';
import { CHROMATIC_SCALE } from '../support/scales/index';

const defaultOptions = {
  lowOctave: 0,
  highOctave: 8,
  ref: {
    note: 'A',
    octave: 4
  }
};

/**
 * Init scale notes - Work in progress - needs cleaning up
 *
 * Takes the given Reference frequency object and calculates the frequencies of
 * each note in the given scale.
 *
 * Available options (with defaults) include:
 * - lowOctave: 0 // The first octave to calculate relative to the reference notes octave
 * - highOctave: 8 // The final octave to calculate relative to the reference notes octave
 * - ref: { note: A, octave: 4 } // Sets the reference note to A4
 *
 * @param {number} refHz The reference frequency in hertz
 * @param {object} options Allows overwriting default settings
 * @param {string[]} scale The scale to use. Uses chromatic scale starting at C by default.
 */
export default function prepareScale(refHz, options = {}, scale = CHROMATIC_SCALE) {
  const config = { ...defaultOptions, ...options };

  const referenceHz = new EqualTemperedHz(refHz, options.precision);

  // console.log(refHz);

  if (config.lowOctave > config.highOctave) {
    throw new Error('The low octave must be lower than the high octave');
  }

  const refNoteKey = scale.findIndex((note) => note === config.ref.note);

  const octaves = config.highOctave - (config.lowOctave - 1);

  const totalSteps = octaves * scale.length;

  const refStep = ((config.ref.octave - config.lowOctave) * scale.length) + refNoteKey;
  // console.log(refStep);
  const firstStep = 0 - refStep;

  let currentStep = firstStep;

  const notes = [];

  for (let i = 0; i < totalSteps; i++) {
    const currentLoopOctave = Math.floor(i / scale.length);
    const currentOctave = currentLoopOctave + config.lowOctave;
    // console.log((i * scale.length) / scale.length);
    const key = i - (currentLoopOctave * scale.length);
    // console.log(key, currentLoopOctave);
    const currentNote = scale[key];
    notes.push({
      note: `${currentNote}${currentOctave}`,
      step: i,
      hz: referenceHz.getHz(currentStep)
    });
    currentStep++;
  }

  return notes;
}
