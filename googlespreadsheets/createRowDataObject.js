const createRowDataObject = (rawData) => {
  const headers = Object.keys(rawData).filter(header => !header.includes('_'));
  const out = {};
  for (let i = 0; i < headers.length; i++) {
    out[headers[i]] = arrangeValue(rawData[headers[i]]);
  }
  return out;
}

export default createRowDataObject;

const arrangeValue = (value) => {
  if (value === 'TRUE') return true;
  else if (value === 'FALSE') return false;
  else if (!isNaN(value)) return parseInt(value);
  else return value;
}
