/* eslint-disable  */

const createRowDataObject = (rawData) => {
  const headers = Object.keys(rawData).filter(header => !header.includes('_'));
  const out = {};
  for (let i = 0; i < headers.length; i++) {
    out[headers[i]] = arrangeValue(rawData[headers[i]]);
  }
  return out;
}

export default createRowDataObject;

const isTrue = (value) => {
  return value === 'TRUE';
}
const isFalse = (value) => {
  return value === 'FALSE';
}
const isNumber = (value) => {
  return !isNaN(value) ? parseInt(value) : false;
}

const validations = {
  isTrue,
  isFalse,
  isNumber,
}

const arrangeValue = (value) => {
  let out = value;
  Object.keys(validations).forEach(validation => {
    const validated = validations[validation](value);
    if (validated) out = validated;
  })
  return out;
}

