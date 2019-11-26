export default function splitArray(rows = [], perCol = 12) {
  const totalCols = rows.length / 12;
  const cols = [];

  for (let i = 0; i < totalCols; i++) {
    cols.push(rows.splice(0, perCol));
  }

  // console.log(cols);

  return cols;
}
