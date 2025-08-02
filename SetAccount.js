function setAccountForTransactionsSheets(trixUrl) {
  var sheetAccountExpenses = getSheet(trixUrl, "mBankAccountExpenses")
  var sheetCardExpenses = getSheet(trixUrl, "mBankCardExpenses")
  setAccountForTransactions(trixUrl, sheetAccountExpenses);
  setAccountForTransactions(trixUrl, sheetCardExpenses);


  //var cell = sheet.getRange("F2:F");
  //cell.setFormulaR1C1('=IF(R[0]C[-2]="";"";VLOOKUP(R[0]C[-2];AccountConfig!C[-5]:C[-4];2;false))');
}

function setAccountForTransactions(trixUrl, sheet) {
  var accountDictionary = getAccountDictionary(trixUrl);
  var dataRange = sheet.getDataRange();
  var rowsCount = dataRange.getNumRows();

  //var data = dataRange.getValues();
  //last 200 transactions as timeout when more than 2k is processed
  for (i = rowsCount-200; i <= rowsCount; i++) {
    console.log(i)
    var account = dataRange.getCell(i, 7);
    if (account.getValue() == "") {
      var src = dataRange.getCell(i, 5).getValue();
      var dest = dataRange.getCell(i, 6).getValue();
      if (accountDictionary[dest]) {
        account.setValue(accountDictionary[dest])
      }
      if (accountDictionary[src]) {
        account.setValue(accountDictionary[src])
      }
    }
  }
}

// function getSheet(trixUrl, sheetName) {
//   var mainsheet = SpreadsheetApp.openByUrl(trixUrl);
//   var sheet = mainsheet.getSheetByName(sheetName)
//   return sheet;
// }

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

