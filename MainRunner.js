function myFunction() {
  var mbankTrixUrl = "https://docs.google.com/spreadsheets/d/1XJAduyj-wL-kVE12Ib93htKbiEyTXuzYOG7j4BedrOA/edit?gid=0#gid=0"
  importTransactionsFromGmail(mbankTrixUrl)
  setCatgoriesForTransactions(mbankTrixUrl)
  setAccountForTransactionsSheets(mbankTrixUrl)

  allegroTrixUrl = "https://docs.google.com/spreadsheets/d/1sBC7PWM7DkCA4smf11Gg59tWT5R7JRIRaWqqpkIYgw8/edit?gid=609545681#gid=609545681"
  fillAllegroPurchase(mbankTrixUrl, allegroTrixUrl)

  //copyDataToFinalSheet(trixUrl);
}
