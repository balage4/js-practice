import { arrangeValue } from "./arrangeValue.js";

export const createRowDataObject = (rawData) => {
  const headers = Object.keys(rawData).filter(header => !header.includes('_'));
  const out = {};
  for (let i = 0; i < headers.length; i++) {
    out[headers[i]] = arrangeValue(rawData[headers[i]]);
  }
  return out;
}



