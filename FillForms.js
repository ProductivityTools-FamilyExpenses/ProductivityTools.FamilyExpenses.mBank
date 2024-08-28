
function getSheet(trixUrl, sheetName) {
  var mainsheet = SpreadsheetApp.openByUrl(trixUrl);
  var sheet = mainsheet.getSheetByName(sheetName)
  return sheet;
}

function myFunction2() {
  var trixUrl = "https://docs.google.com/spreadsheets/d/1XJAduyj-wL-kVE12Ib93htKbiEyTXuzYOG7j4BedrOA/edit?gid=0#gid=0"
  var sheet = getSheet(trixUrl, "Expenses")

  var cell = sheet.getRange("F2:F");
  // This sets the formula to be the sum of the 3 rows above B5
  //cell.setFormulaR1C1("=VLOOKUP(R[0]C[-2];AccountConfig!A:B;2)");
  cell.setFormulaR1C1('=IF(R[0]C[-2]!="";VLOOKUP(R[0]C[-2];AccountConfig!C[-5]:C[-4];2;false);""');
}
