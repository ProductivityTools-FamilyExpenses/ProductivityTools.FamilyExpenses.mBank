function myFunction() {
  var trixUrl = "https://docs.google.com/spreadsheets/d/1XJAduyj-wL-kVE12Ib93htKbiEyTXuzYOG7j4BedrOA/edit?gid=0#gid=0"
  var sheetmBankAccountExpenses = getSheet(trixUrl, "mBankAccountExpenses")
  var sheetAllTransactions = getSheet(trixUrl, "AllTransactions")


  // //var source = sheetmBankAccountExpenses.getDataRange();
  // // var rowsCount = source.getNumRows();
  // // var z=sheetAllTransactions.getRange();
  // // var xx=sheetAllTransactions.getRange();
  // var allTransactionsGuids = new Array(sheetAllTransactions.getDataRange().getValues().length);

  // var allTransactions = sheetAllTransactions.getDataRange().getValues();
  // for (i = 2; i < allTransactions.length; i++) {
  //   console.log(allTransactions[i])
  //   allTransactionsGuids.push(allTransactions[i][0])
  // }

  // //var data = dataRange.getValues();
   var source = sheetmBankAccountExpenses.getDataRange().getValues();
   var dest = sheetAllTransactions;
  CopyData(source, dest)
}


function CopyData(source, dest) {
  var destExistingGuids = new Array(dest.getDataRange().getValues().length);
  var destData = dest.getDataRange().getValues();
  for (i = 2; i < destData.length; i++) {
    console.log(destData[i])
    destExistingGuids.push(destData[i][0])
  }

  for (i = 2; i < source.length; i++) {
    console.log(source[i])
    console.log("source guid:", source[i][0])
    console.log(destExistingGuids.indexOf(source[i][0]))
    if (destExistingGuids.indexOf(source[i][0]) == -1) {
      dest.appendRow([source[i][0],source[i][1],source[i][6],source[i][7],source[i][8],source[i][9],source[i][10],source[i][11]]);
    }
  }
}
