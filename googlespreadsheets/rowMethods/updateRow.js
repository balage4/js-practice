import getRawRowById from './getRawRowById.js';

export const updateRow = async (sheet, options) => {
  const { searchId, rowData } = options;
  const rows = await sheet.getRows();
  const updatedRow = await getRawRowById(rows, searchId);

  Object.keys(rowData).forEach(rowProperty => {
    updatedRow[rowProperty] = rowData[rowProperty];
  });
  return await updatedRow.save();
};
