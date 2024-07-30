export default function (set, startString) {
  const result = [];

  if (!startString) {
    return '';
  }

  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
