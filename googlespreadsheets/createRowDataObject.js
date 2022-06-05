const createRowDataObject = (rawData) => {
  const headers = Object.keys(rawData).filter(header => !header.includes('_'));
  const out = {};
  for (let i = 0; i < headers.length; i++) {
    out[headers[i]] = rawData[headers[i]];
  }
  return out;
}

export default createRowDataObject;