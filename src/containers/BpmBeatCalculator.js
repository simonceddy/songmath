import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import calculateBeatLength from '../maths/calculateBeatLength';
import { DEFAULT_BEATS } from '../support/beatmap/index';
import SettingsInput from '../components/Settings/SettingsInput';
import OptionRow from '../components/Settings/OptionRow';
import BeatBpmBox from '../components/BpmBeats/BeatBpmBox';
import { setCurrentBpm, setMsPrecision } from '../store/actions';

function BpmBeatCalculator({
  bpm = 120,
  setBpm,
  precision = 2,
  setPrecision
}) {
  // console.log(bpm);
  const beatLengths = useMemo(() => (
    DEFAULT_BEATS.map((beat) => ({ ...calculateBeatLength(bpm, beat, precision), beat }))
  ), [bpm, precision]);

  return (
    <div className="flex flex-col justify-center items-center">
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
      <div>
        {beatLengths.map(({ duration, beat, beatLength }) => (
          <BeatBpmBox
            key={beat}
            beatLength={beatLength}
            beat={beat}
            duration={duration}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  bpm: state.settings.currentBpm,
  precision: state.settings.msPrecision
});

const mapDispatchToProps = (dispatch) => ({
  setBpm: (bpm) => dispatch(setCurrentBpm(bpm)),
  setPrecision: (precision) => dispatch(setMsPrecision(precision))
});

export default connect(mapStateToProps, mapDispatchToProps)(BpmBeatCalculator);
