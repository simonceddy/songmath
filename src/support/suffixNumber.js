export default function suffixNumber(num = 1) {
  const stringNum = num.toString();
  const lastNum = stringNum.charAt(stringNum.length - 1);

  // console.log(lastNum);

  switch (lastNum) {
    case '1':
      return `${num}st`;
    case '2':
      return `${num}nd`;
    case '3':
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}
