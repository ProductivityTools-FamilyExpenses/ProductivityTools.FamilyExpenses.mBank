
function setAccountAsCategory(trixUrl) {
  var sheet = getSheet(trixUrl, "mBankAccountExpenses")

  var dataRange = sheet.getDataRange();
  var rowsCount = dataRange.getNumRows();

  //var data = dataRange.getValues();
  for (i = 2; i <= rowsCount; i++) {
    var account = dataRange.getCell(i, 7);
    var accountValue = account.getValue()
    if (accountValue == "Wyzywienie") {
      var category = dataRange.getCell(i, 12);
      var categoryValue = category.getValue();
      if (categoryValue == "") {
        category.setValue(accountValue)

      }
    }
  }

}


