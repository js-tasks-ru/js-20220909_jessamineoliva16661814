/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === undefined) return string;

  let count = 0;
  let curChar;
  let resString = '';

  for (let ch of string) {
    if (curChar !== ch) {
      count = 0;
      curChar = ch;
    }
    if (count < size) {
      count += 1;
      resString += curChar;
    }
  }
  return resString;
}
