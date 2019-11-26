import Fraction from 'fraction.js/fraction';

function EqualTemperedHz(refHz = 440, precision = 3) {
  if (!(this instanceof EqualTemperedHz)) {
    return new EqualTemperedHz(refHz);
  }

  const referenceHz = new Fraction(refHz);

  const twelthRootOfTwo = 2 ** (1 / 12);

  this.getHz = (steps = 0) => {
    if (steps === 0) return referenceHz.valueOf();

    const hz = (referenceHz * (twelthRootOfTwo ** steps));
    const fraction = new Fraction(hz);
    return fraction.round(precision).valueOf();
  };
}

export default EqualTemperedHz;
