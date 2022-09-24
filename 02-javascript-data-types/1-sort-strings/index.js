/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  return arr.map((value) => {
    return value.normalize();
  }).sort((str1, str2) => {
    const dir = str1.localeCompare(str2, ["ru", "en"], { caseFirst: "upper" });
    return param === 'asc' ? dir : -dir;
  });
}
