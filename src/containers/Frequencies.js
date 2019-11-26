import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import NoteFrequencies from '../components/NoteFrequencies';
// import EqualTemperedHz from '../maths/EqualTemperedHz';
import prepareScale from '../maths/prepareScale';
import {
  setReferenceFrequency,
  setLowOctave,
  setHighOctave,
  setHzPrecision
} from '../store/actions/index';
import NoteSettings from '../components/NoteFrequencies/NoteSettings';
import OptionRow from '../components/Settings/OptionRow';
import SettingsInput from '../components/Settings/SettingsInput';

function Frequencies({
  referenceHz = 440,
  lowOctave = 0,
  highOctave = 8,
  setRefHz,
  setLowOct,
  setHighOct,
  precision = 3,
  setPrecision
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
      <NoteSettings>
        <OptionRow label="Reference Frequency (Hz)">
          <SettingsInput
            min="0"
            className="text-right"
            value={referenceHz}
            onChange={({ target }) => setRefHz(target.value || 0)}
          />
        </OptionRow>
        <OptionRow label="Low Octave">
          <SettingsInput
            className="text-right"
            value={lowOctave}
            onChange={({ target }) => setLowOct(target.value)}
          />
        </OptionRow>
        <OptionRow label="High Octave">
          <SettingsInput
            className="text-right"
            value={highOctave}
            onChange={({ target }) => setHighOct(target.value)}
          />
        </OptionRow>
        <OptionRow label="Decimal precision">
          <SettingsInput
            min="0"
            className="text-right"
            value={precision}
            onChange={({ target }) => setPrecision(target.value)}
          />
        </OptionRow>
      </NoteSettings>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Frequencies);
