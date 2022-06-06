import { createRowDataObject } from '../rowUtilities/createRowDataObject.js';
import getRawRowById from './getRawRowById.js';

export const getRowById = async (sheet, options) => {
  const { searchId } = options;
  const rows = await sheet.getRows();
  return createRowDataObject(getRawRowById(rows, searchId));
};
