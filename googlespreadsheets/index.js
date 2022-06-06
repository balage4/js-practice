/* eslint-disable  */
import { callSpreadsheet } from './callSpreadsheet.js';
import { getRowById } from './rowMethods/index.js';


callSpreadsheet('practice', getRowById, { searchId: 'dq2205ze0422ucr2417jxs' }).then(res => console.log(res));
