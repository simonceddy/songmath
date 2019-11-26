import defaultSettings from '../../support/defaultSettings';
import normaliseNumber from '../utils/normaliseNumber';
import {
  SET_REFERENCE_FREQUENCY,
  SET_LOW_OCTAVE,
  SET_HIGH_OCTAVE,
  RESET_SETTINGS_TO_DEFAULT,
  SET_CURRENT_BPM,
  SET_MS_PRECISION,
  SET_HZ_PRECISION,
  RESET_BPM_TABLE,
  RESET_NOTE_TABLE
} from '../actions/actionTypes';

export default function settingsReducer(state = defaultSettings, action) {
  switch (action.type) {
    case SET_MS_PRECISION:
      return { ...state, msPrecision: normaliseNumber(action.payload.precision) };
    case SET_HZ_PRECISION:
      return { ...state, hzPrecision: normaliseNumber(action.payload.precision) };
    case SET_REFERENCE_FREQUENCY:
      return { ...state, referenceHz: normaliseNumber(action.payload.hz) };
    case SET_LOW_OCTAVE:
      // console.log(action);
      if (action.payload.octave > state.highOctave) {
        return {
          ...state,
          lowOctave: action.payload.octave,
          highOctave: action.payload.octave
        };
      }
      return { ...state, lowOctave: action.payload.octave };
    case SET_HIGH_OCTAVE:
      if (action.payload.octave < state.lowOctave) {
        return {
          ...state,
          highOctave: action.payload.octave,
          lowOctave: action.payload.octave
        };
      }
      return { ...state, highOctave: action.payload.octave };
    case SET_CURRENT_BPM:
      return { ...state, currentBpm: normaliseNumber(action.payload.bpm, 1) };
    case RESET_BPM_TABLE:
      return {
        ...state,
        msPrecision: defaultSettings.msPrecision,
        currentBpm: defaultSettings.currentBpm
      };
    case RESET_NOTE_TABLE:
      return {
        ...defaultSettings,
        msPrecision: state.msPrecision,
        currentBpm: state.currentBpm
      };
    case RESET_SETTINGS_TO_DEFAULT:
      return defaultSettings;
    default:
      return state;
  }
}
