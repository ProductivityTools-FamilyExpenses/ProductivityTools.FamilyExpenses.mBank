
function setAccountAsCategory(trixUrl) {
  var sheet = getSheet(trixUrl, "mBankAccountExpenses")

  var dataRange = sheet.getDataRange();
  var rowsCount = dataRange.getNumRows();

  //var data = dataRange.getValues();
  for (i = 2; i <= rowsCount; i++) {
    var account = dataRange.getCell(i, 7);
    var accountValue = account.getValue()
    //|| accountValue == "Niechorze" 
    //accountValue == "Kameralne" ||
    //accountValue == "Komorska"
    //|| accountValue == "Komorska" 
    //accountValue == "Wyzywienie"  |
    if ( accountValue == "Magda"  || accountValue == "Wypłaty") {
      var category = dataRange.getCell(i, 12);
      var categoryValue = category.getValue();
      if (categoryValue == "") {
        var name="Proxy"+accountValue
        category.setValue(name)

      }
    }
  }

}


