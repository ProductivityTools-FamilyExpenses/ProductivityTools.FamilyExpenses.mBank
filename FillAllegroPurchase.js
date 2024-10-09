function allegroPurchase() {
  var trixUrl = "https://docs.google.com/spreadsheets/d/1XJAduyj-wL-kVE12Ib93htKbiEyTXuzYOG7j4BedrOA/edit?gid=0#gid=0"
  var sheet = getSheet(trixUrl, "mBankAccountExpenses")

  var dataRange = sheet.getDataRange();
  var rowsCount = dataRange.getNumRows();

  //var data = dataRange.getValues();
  for (i = 2; i <= rowsCount; i++) {
    var description = dataRange.getCell(i, 10);
    var descriptionValue = description.getValue();
    if (descriptionValue == "Allegro /Poznan") {
      var price = dataRange.getCell(i, 8).getValue();
      price = price * (-1)
      var allegroPurchasesWithGivenPrice = findByPrice(price)
      var whatCell = dataRange.getCell(i, 11);
      whatCell.setNote(allegroPurchasesWithGivenPrice)
      console.log(allegroPurchasesWithGivenPrice)
    }
  }

  //var cell = sheet.getRange("F2:F");
  //cell.setFormulaR1C1('=IF(R[0]C[-2]="";"";VLOOKUP(R[0]C[-2];AccountConfig!C[-5]:C[-4];2;false))');
}
function findSomethging() {
  var r = findByPrice("47.8")
  console.log(r);
}

function findByPrice(queryPrice) {
  var allegroTrix = "https://docs.google.com/spreadsheets/d/1sBC7PWM7DkCA4smf11Gg59tWT5R7JRIRaWqqpkIYgw8/edit?gid=609545681#gid=609545681"
  var purchaseSheet = getSheet(allegroTrix, "Purchases")
  var purchaseDataRange = purchaseSheet.getDataRange();
  var purchaseRowsCount = purchaseDataRange.getNumRows();
  var result = []

  for (j = 2; j <= purchaseRowsCount; j++) {
    var price = purchaseDataRange.getCell(j, 3);
    var priceValue = price.getValue();
    //console.log(priceValue);
    if (priceValue == queryPrice) {
      console.log("found");
      var itemName = purchaseDataRange.getCell(j, 4)
      var itemDate = purchaseDataRange.getCell(j, 1)
      result.push([itemDate.getValue(), itemName.getValue()])
      // var description = dataRange.getCell(i, 10).getValue();
      // if (categoryDictionary[description]) {
      //   category.setValue(categoryDictionary[description])
      // }
    }
  }
  return result;
}


function addNote() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var targetCell = sheet.getRange("A1");
  var sourceCell = sheet.getRange("B1");

  var noteText = sourceCell.getValue();

  targetCell.setNote(noteText);

}