function narcissistic(value) {
  const valueText = value.toString();
  const valueLength = valueText.length;
  let narciss = 0;
  for (let i = 0; i < valueLength; i++) {
    // eslint-disable-next-line no-restricted-properties
    narciss += Math.pow(parseInt(valueText[i], 10), valueLength);
  }

  return narciss === value;
}

console.log(narcissistic(153));
