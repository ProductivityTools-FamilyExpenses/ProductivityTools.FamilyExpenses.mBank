function allegroPurchase() {
  var trixUrl = "https://docs.google.com/spreadsheets/d/1XJAduyj-wL-kVE12Ib93htKbiEyTXuzYOG7j4BedrOA/edit?gid=0#gid=0"
  var sheet = getSheet(trixUrl, "mBankAccountExpenses")

  var categoryDictionary = getCategoryDictionary(trixUrl);
  var dataRange = sheet.getDataRange();
  var rowsCount = dataRange.getNumRows();

  //var data = dataRange.getValues();
  for (i = 2; i <= rowsCount; i++) {
    var category = dataRange.getCell(i, 12);
    var categoryValue = category.getValue();
    if (categoryValue == "") {
      var description = dataRange.getCell(i, 10).getValue();
      if (categoryDictionary[description]) {
        category.setValue(categoryDictionary[description])
      }
    }
  }

  //var cell = sheet.getRange("F2:F");
  //cell.setFormulaR1C1('=IF(R[0]C[-2]="";"";VLOOKUP(R[0]C[-2];AccountConfig!C[-5]:C[-4];2;false))');
}
function findSomethging() {
  findByPrice("183.9")
}

function findByPrice(queryPrice) {
  var allegroTrix = "https://docs.google.com/spreadsheets/d/1sBC7PWM7DkCA4smf11Gg59tWT5R7JRIRaWqqpkIYgw8/edit?gid=609545681#gid=609545681"
  var sheet = getSheet(allegroTrix, "Purchases")
  var dataRange = sheet.getDataRange();
  var rowsCount = dataRange.getNumRows();


  for (i = 2; i <= rowsCount; i++) {
    var price = dataRange.getCell(i, 3);
    var priceValue = price.getValue();
    //console.log(priceValue);
    if (priceValue == queryPrice) {
      console.log("found");
      // var description = dataRange.getCell(i, 10).getValue();
      // if (categoryDictionary[description]) {
      //   category.setValue(categoryDictionary[description])
      // }
    }
  }
}