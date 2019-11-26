import Fraction from 'fraction.js/fraction';

export default function calculateBeatLength(bpm = 120, beat = '1/4', precision = 2) {
  const bpmF = new Fraction(bpm);
  const beatF = new Fraction(beat);
  const wholeNote = new Fraction((60 / bpmF) * 4);
  const duration = new Fraction(beatF * wholeNote * 1000);
  const beatLength = new Fraction(beatF * 4);
  return {
    duration: duration.round(precision).valueOf(),
    beatLength: beatLength.round(precision).valueOf(),
  };
}
