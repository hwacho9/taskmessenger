import { GoogleSpreadsheet } from 'google-spreadsheet';
export default function Profile() {
    return <h1>taskmanager</h1>;
}
const SHEET_ID = '1aPUSsI8m5vCey5PXyVMwNV_wsKXqfyA2E8cHzQf8UX4';
async function getSheetInfo() {
    const doc = new GoogleSpreadsheet(SHEET_ID);
    await doc.loadInfo();
    // シート名
    const sheetTitle = doc.sheetsById[0].title;
    // セルの値
    const cellValue = doc.sheetsById[0].getCellByA1('A1').value;
    console.log(`シート名: ${sheetTitle}`);
    console.log(`セルの値: ${cellValue}`);
}
getSheetInfo();
console.log("taskmanager");