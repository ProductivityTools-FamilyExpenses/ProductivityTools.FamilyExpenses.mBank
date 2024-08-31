
function getSheet(trixUrl, sheetName) {
  var mainsheet = SpreadsheetApp.openByUrl(trixUrl);
  var sheet = mainsheet.getSheetByName(sheetName)
  return sheet;
}

function getCategoryDictionary(trixUrl) {
  var dictionarySheet = getSheet(trixUrl, "CategoryDictionary")
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

  var categoryDictionary = getCategoryDictionary(trixUrl);
  var dataRange = sheet.getDataRange();
  var rowsCount = dataRange.getNumRows();

  //var data = dataRange.getValues();
  for (i = 2; i <= rowsCount; i++) {
    var description = dataRange.getCell(i, 9).getValue();
    var category = dataRange.getCell(i, 10);
    if (categoryDictionary[description]) {
      category.setValue(categoryDictionary[description])
    }
  }

  //var cell = sheet.getRange("F2:F");
  //cell.setFormulaR1C1('=IF(R[0]C[-2]="";"";VLOOKUP(R[0]C[-2];AccountConfig!C[-5]:C[-4];2;false))');
}
