/* eslint-disable no-nested-ternary */
export default function normaliseNumber(num, min = 0, max = 99999999) {
  return min <= num
    ? (max >= num ? num : max)
    : min;
}
