/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import SettingsLayout from '../components/Settings/SettingsLayout';
import OptionRow from '../components/Settings/OptionRow';
import {
  setHighOctave,
  setLowOctave,
  setReferenceFrequency
} from '../store/actions/index';
import SettingsInput from '../components/Settings/SettingsInput';

function Settings({
  settings = {},
  setHighOct,
  setLowOct,
  setRefHz
}) {
  return (
    <SettingsLayout>
      <OptionRow label="Reference Frequency (Hz)">
        <SettingsInput
          className="text-right"
          value={settings.referenceHz}
          onChange={({ target }) => setRefHz(target.value)}
        />
      </OptionRow>
      <OptionRow label="Low Octave">
        <SettingsInput
          className="text-right"
          value={settings.lowOctave}
          onChange={({ target }) => setLowOct(target.value)}
        />
      </OptionRow>
      <OptionRow label="High Octave">
        <SettingsInput
          className="text-right"
          value={settings.highOctave}
          onChange={({ target }) => setHighOct(target.value)}
        />
      </OptionRow>
    </SettingsLayout>
  );
}

const mapStateToProps = (state) => ({
  settings: state.settings
});

const mapDispatchToProps = (dispatch) => ({
  setRefHz: (hz) => dispatch(setReferenceFrequency(hz)),
  setLowOct: (octave) => dispatch(setLowOctave(octave)),
  setHighOct: (octave) => dispatch(setHighOctave(octave)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
