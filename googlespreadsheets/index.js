/* eslint-disable  */
import createRowDataObject from './createRowDataObject.js';
import { createUniqueId } from './createUniqueID.js';
import getRawRowById from './getRawRowById.js';
import { callSpreadsheet } from './callSpreadsheet';


const addRow = async (sheet, options) => {
  const id = createUniqueId();
  const { rowData } = options;
  rowData.id = id;
  return await sheet.addRow(rowData);
}

const getRowById = async (sheet, options) => {
  const { searchId } = options;
  const rows = await sheet.getRows();
  return createRowDataObject(getRawRowById(rows, searchId));
}

const updateRow = async (sheet, options) => {
  const { searchId, rowData } = options;
  const rows = await sheet.getRows();
  const updatedRow = await getRawRowById(rows, searchId);

  Object.keys(rowData).forEach(rowProperty => {
    updatedRow[rowProperty] = rowData[rowProperty];
  });
  return await updatedRow.save();
}

const deleteRow = async (sheet, options) => {
  const { searchId } = options;
  const rows = await sheet.getRows();
  return await getRawRowById(rows, searchId).delete();
}

const addHeaderValue = () => (sheet, options) => {

}

callSpreadsheet('practice', getRowById, { searchId: 'dq2205ze0422ucr2417jxs' }).then(res => console.log(res));