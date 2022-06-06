import getRawRowById from './getRawRowById.js';

export const deleteRow = async (sheet, options) => {
  const { searchId } = options;
  const rows = await sheet.getRows();
  return await getRawRowById(rows, searchId).delete();
};
