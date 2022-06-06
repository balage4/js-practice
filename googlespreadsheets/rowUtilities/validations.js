
const isTrue = (value) => {
  return value === 'TRUE';
}
const isFalse = (value) => {
  return value === 'FALSE';
}
const isNumber = (value) => {
  return !isNaN(value) ? parseInt(value) : false;
}

export const validations = {
  isTrue,
  isFalse,
  isNumber,
};