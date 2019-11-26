// import Fraction from 'fraction.js/fraction';
import {
  SET_REFERENCE_FREQUENCY,
  SET_LOW_OCTAVE,
  SET_HIGH_OCTAVE,
  SET_CURRENT_BPM,
  RESET_SETTINGS_TO_DEFAULT,
  SET_HZ_PRECISION,
  SET_MS_PRECISION,
  RESET_BPM_TABLE,
  RESET_NOTE_TABLE
} from './actionTypes';

export const setReferenceFrequency = (hz) => ({
  type: SET_REFERENCE_FREQUENCY,
  payload: {
    hz
  }
});

export const setLowOctave = (octave) => ({
  type: SET_LOW_OCTAVE,
  payload: {
    octave: Number.parseInt(octave, 10)
  }
});

export const setHighOctave = (octave) => ({
  type: SET_HIGH_OCTAVE,
  payload: {
    octave: Number.parseInt(octave, 10)
  }
});

export const setCurrentBpm = (bpm) => ({
  type: SET_CURRENT_BPM,
  payload: {
    bpm: Number.parseInt(bpm, 10)
  }
});

export const resetSettingsToDefault = () => ({
  type: RESET_SETTINGS_TO_DEFAULT
});

export const setHzPrecision = (precision) => ({
  type: SET_HZ_PRECISION,
  payload: {
    precision: Number.parseInt(precision, 10)
  }
});

export const setMsPrecision = (precision) => ({
  type: SET_MS_PRECISION,
  payload: {
    precision: Number.parseInt(precision, 10)
  }
});

export const resetNoteTable = () => ({
  type: RESET_NOTE_TABLE
});

export const resetBpmTable = () => ({
  type: RESET_BPM_TABLE
});
