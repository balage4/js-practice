import { createUniqueId } from '../rowUtilities/createUniqueID.js';

export const addRow = async (sheet, options) => {
  const id = createUniqueId();
  const { rowData } = options;
  rowData.id = id;
  return await sheet.addRow(rowData);
};
