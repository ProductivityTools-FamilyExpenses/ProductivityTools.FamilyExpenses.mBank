function onOpen(e) {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('FamilExpenses')
      .addItem('PWExecute', 'mainRunner')
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
