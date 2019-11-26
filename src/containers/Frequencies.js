import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import NoteFrequencies from '../components/NoteFrequencies';
// import EqualTemperedHz from '../maths/EqualTemperedHz';
import prepareScale from '../maths/prepareScale';
import {
  setReferenceFrequency,
  setLowOctave,
  setHighOctave,
  setHzPrecision,
  resetNoteTable
} from '../store/actions/index';
import NoteSettings from '../components/NoteFrequencies/NoteSettings';
import OptionRow from '../components/Settings/OptionRow';
import SettingsInput from '../components/Settings/SettingsInput';
import ResetBox from '../shared/components/ResetBox';

function Frequencies({
  referenceHz = 440,
  lowOctave = 0,
  highOctave = 8,
  setRefHz,
  setLowOct,
  setHighOct,
  precision = 3,
  setPrecision,
  reset
}) {
  // console.log(referenceHz);
  const notes = useMemo(() => prepareScale(referenceHz, {
    lowOctave,
    highOctave,
    precision
  }), [
    referenceHz,
    lowOctave,
    highOctave,
    precision
  ]);

  return (
    <>
      <div className="flex sm:flex-row flex-col justify-between mx-auto">
        <NoteSettings>
          <OptionRow label="Reference Frequency (Hz)">
            <SettingsInput
              min="0"
              value={referenceHz}
              onChange={({ target }) => setRefHz(target.value || 0)}
            />
          </OptionRow>
          <OptionRow label="Low Octave">
            <SettingsInput
              value={lowOctave}
              onChange={({ target }) => setLowOct(target.value)}
            />
          </OptionRow>
          <OptionRow label="High Octave">
            <SettingsInput
              value={highOctave}
              onChange={({ target }) => setHighOct(target.value)}
            />
          </OptionRow>
          <OptionRow label="Decimal precision">
            <SettingsInput
              min="0"
              value={precision}
              onChange={({ target }) => setPrecision(target.value)}
            />
          </OptionRow>
        </NoteSettings>
        <ResetBox reset={reset} />
      </div>
      <NoteFrequencies notes={notes} />
    </>
  );
}

const mapStateToProps = (state) => ({
  referenceHz: state.settings.referenceHz,
  lowOctave: state.settings.lowOctave,
  highOctave: state.settings.highOctave,
  precision: state.settings.hzPrecision
});

const mapDispatchToProps = (dispatch) => ({
  setRefHz: (hz) => dispatch(setReferenceFrequency(hz)),
  setLowOct: (octave) => dispatch(setLowOctave(octave)),
  setHighOct: (octave) => dispatch(setHighOctave(octave)),
  setPrecision: (precision) => dispatch(setHzPrecision(precision)),
  reset: () => dispatch(resetNoteTable())
});

export default connect(mapStateToProps, mapDispatchToProps)(Frequencies);
