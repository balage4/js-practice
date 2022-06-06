import { GoogleSpreadsheet } from 'google-spreadsheet';
import { SSID, CLIENT_EMAIL, PRIVATE_KEY } from './environment.js';

export const callSpreadsheet = async (sheetName, ssCallback, options) => {
  const authSpreadsheet = new GoogleSpreadsheet(SSID);
  await authSpreadsheet.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY
  });
  await authSpreadsheet.loadInfo();
  const sheet = authSpreadsheet.sheetsByTitle[sheetName];
  return await ssCallback(sheet, options);
};
