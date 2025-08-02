function onOpen(e) {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Family Expenses')
    .addItem('Execute all scripts', 'mainRunner')
    .addItem('Fill Categories', 'mainRunnerSetCatgoriesForTransactions')
    .addItem('Fill allegro transactions','mainRunnerFillAllegroTransactions')
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Debug')
        .addItem('xxx', 'xxx')
    )
    .addToUi();
}
