/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import calculateBeatLength from '../maths/calculateBeatLength';
import { DEFAULT_BEATS } from '../support/beatmap/index';
import SettingsInput from '../components/Settings/SettingsInput';
import OptionRow from '../components/Settings/OptionRow';
import BeatBpmBox from '../components/BpmBeats/BeatBpmBox';
import { setCurrentBpm, setMsPrecision, resetBpmTable } from '../store/actions';
import ResetBox from '../shared/components/ResetBox';

function BpmBeatCalculator({
  bpm = 120,
  setBpm,
  precision = 2,
  setPrecision,
  reset
}) {
  // console.log(bpm);
  const beatLengths = useMemo(() => (
    DEFAULT_BEATS.map((beat) => ({ ...calculateBeatLength(bpm, beat, precision), beat }))
  ), [bpm, precision]);

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col flex-1 justify-center items-center">
          <OptionRow label="BPM">
            <SettingsInput
              min="0"
              value={bpm}
              onChange={({ target }) => setBpm(target.value)}
            />
          </OptionRow>
          <OptionRow label="Decimal precision">
            <SettingsInput
              min="0"
              value={precision}
              onChange={({ target }) => setPrecision(target.value)}
            />
          </OptionRow>
        </div>
        <ResetBox reset={reset} />
      </div>
      <div className="flex flex-col w-full">
        {beatLengths.map((beat) => (
          <BeatBpmBox key={beat.beat} {...beat} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  bpm: state.settings.currentBpm,
  precision: state.settings.msPrecision
});

const mapDispatchToProps = (dispatch) => ({
  setBpm: (bpm) => dispatch(setCurrentBpm(bpm)),
  setPrecision: (precision) => dispatch(setMsPrecision(precision)),
  reset: () => dispatch(resetBpmTable())
});

export default connect(mapStateToProps, mapDispatchToProps)(BpmBeatCalculator);
