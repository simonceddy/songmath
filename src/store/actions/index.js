import Fraction from 'fraction.js/fraction';
import {
  SET_REFERENCE_FREQUENCY,
  SET_LOW_OCTAVE,
  SET_HIGH_OCTAVE,
  SET_CURRENT_BPM,
  RESET_SETTINGS_TO_DEFAULT,
  SET_HZ_PRECISION,
  SET_MS_PRECISION
} from './actionTypes';

export const setReferenceFrequency = (hz) => ({
  type: SET_REFERENCE_FREQUENCY,
  payload: {
    hz: new Fraction(hz).valueOf()
  }
});

export const setLowOctave = (octave) => ({
  type: SET_LOW_OCTAVE,
  payload: {
    octave: new Fraction(octave).valueOf()
  }
});

export const setHighOctave = (octave) => ({
  type: SET_HIGH_OCTAVE,
  payload: {
    octave: new Fraction(octave).valueOf()
  }
});

export const setCurrentBpm = (bpm) => ({
  type: SET_CURRENT_BPM,
  payload: {
    bpm
  }
});

export const resetSettingsToDefault = () => ({
  type: RESET_SETTINGS_TO_DEFAULT
});

export const setHzPrecision = (precision) => ({
  type: SET_HZ_PRECISION,
  payload: {
    precision
  }
});

export const setMsPrecision = (precision) => ({
  type: SET_MS_PRECISION,
  payload: {
    precision
  }
});
