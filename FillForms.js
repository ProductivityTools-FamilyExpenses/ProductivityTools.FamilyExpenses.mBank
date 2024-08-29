
function getSheet(trixUrl, sheetName) {
  var mainsheet = SpreadsheetApp.openByUrl(trixUrl);
  var sheet = mainsheet.getSheetByName(sheetName)
  return sheet;
}

function getAccountDictionary(trixUrl) {
  var dictionarySheet = getSheet(trixUrl, "AccountDictionary")
  var data = dictionarySheet.getDataRange().getValues();
  var dict = new Object();
  for (i = 1; i < data.length; i++) {
    console.log(data[i])
    dict[data[i][0]] = data[i][1]
  }
  console.log(dict);
  return dict;
}

function myFunction2() {
  var trixUrl = "https://docs.google.com/spreadsheets/d/1XJAduyj-wL-kVE12Ib93htKbiEyTXuzYOG7j4BedrOA/edit?gid=0#gid=0"
  var sheet = getSheet(trixUrl, "Expenses")

  var accountDictionary = getAccountDictionary(trixUrl);
  var data = sheet.getDataRange().getValues();
  for (i = 0; i < data.length; i++) {
    console.log(data[i])
    if (data[i][4] == "42109862") {
        data[i][5]="ddd"
    }
  }

  //var cell = sheet.getRange("F2:F");
  //cell.setFormulaR1C1('=IF(R[0]C[-2]="";"";VLOOKUP(R[0]C[-2];AccountConfig!C[-5]:C[-4];2;false))');
}
