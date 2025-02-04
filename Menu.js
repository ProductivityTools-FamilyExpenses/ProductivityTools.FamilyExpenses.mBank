function onOpen(e) {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Family Expenses')
    .addItem('Execute all scripts', 'mainRunner')
    .addItem('Fill Categories', 'mainRunnerSetCatgoriesForTransactions')
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Debug')
        .addItem('Run processing now', 'autoProcessMail3')
        .addItem('Start debug processing run', 'debugAutoProcessMail'))
    .addSubMenu(ui.createMenu('Logs')
      .addItem('Cleanup logs', 'cleanupLogs')
      .addItem('Delete all logs', 'deleteLogs'))
    .addToUi();
}
