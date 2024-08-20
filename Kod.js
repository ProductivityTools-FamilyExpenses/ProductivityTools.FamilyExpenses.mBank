function getTransferRow(date, data) {
  var details = data[1]
  if (details.startsWith("mBank: Autoryzacja karty")) {
    var segments = details.split(" ");
    var srcCard = segments[3];
    segments = details.split(":")
    var name = segments[2].replace(". Kwota", "")
    var amountRaw = segments[3].trim();
    var amount = amountRaw.split(" ")[0];
    var currency = amountRaw.split(" ")[1].replace(".", "");
    var amountLeftRaw = segments[4].trim();
    var amountLeft = amountLeftRaw.split(" ")[0]
    var amountLeftCurrency = amountLeftRaw.split(" ")[1]

    //var segments = details.split(":");
    return [date, data[0], "Card", srcCard, "", amount, currency, name, amountLeft, amountLeftCurrency, details]
  }
  if (details.startsWith("mBank: Przelew wych")) {
    var segments = details.split(" ");
    var srcAccount = segments[5];
    var dstAccount = segments[8];
    var value = segments[10];
    var currency = segments[11];
    var nameSegments = details.split("dla")[1].split("Dost.")[0].trim();
    var left = details.split("dla")[1].split("Dost.")[1].trim().split(" ");
    var leftValue = left[0];
    var leftCurrency = left[1];
    return [date, data[0], "Transfer", srcAccount, dstAccount, value, currency, nameSegments, leftValue, leftCurrency, details]
  }
  if (details.startsWith("mBank: Odmowa autoryzacji") ||
    details.startsWith("mBank: Potwierdzenie poprawnego")) {
    return null;
  }

  return [date, data[0], "xx", details]
}

function getSheet(trixUrl, sheetName) {
  var mainsheet = SpreadsheetApp.openByUrl(trixUrl);
  var sheet = mainsheet.getSheetByName(sheetName)
  return sheet;
}

function copyDataToSpreadsheet(date, data) {
  var trixUrl = "https://docs.google.com/spreadsheets/d/1XJAduyj-wL-kVE12Ib93htKbiEyTXuzYOG7j4BedrOA/edit?gid=0#gid=0"
  var sheet = getSheet(trixUrl, "Expenses")
  for (var row = 0; row < data.length; row++) {
    if (data[row][0].startsWith("Czas") == false) {
      var transferRow = getTransferRow(date, data[row]);
      if (transferRow != null) {
        sheet.appendRow(transferRow)
      }
    }
  }
}

function getDateFromEmailAttachement(attachement) {
  const content = attachement.getDataAsString();
  const $ = Cheerio.load(content);
  var x = $("table > tbody > tr > td > h5").first();
  var date = x.text().replace("Powiadomienie e-mail", "").trim().replace(" -", "");
  return date;
}

function getDataFromEmailAttachement(attachement) {


  //console.log(attachement.getDataAsString())
  const content = attachement.getDataAsString();
  const $ = Cheerio.load(content);
  var data = [];
  $("table > tbody > tr > td > table > tbody > tr").each((index, element) => {
    var row = [];
    $(element).find("td").each((index, child) => {
      var rowContent = $(child).text().trim()
      row.push(rowContent);
    });
    if (row.length > 0) {
      data.push(row);
    }
  });

  var date = getDateFromEmailAttachement(attachement);
  copyDataToSpreadsheet(date, data);
  console.log(data);
}

function processOneMBankMessage(thread) {
  var msgs = thread.getMessages();
  for (var j = 0; j < msgs.length; j++) {
    var attachments = msgs[j].getAttachments();
    for (var k = 0; k < attachments.length; k++) {
      var attachement = attachments[k]
      var attachementName = attachement.getName();
      if (attachementName.startsWith("Powiadomienie e-mail z")) {
        //console.log(attachementName)
        getDataFromEmailAttachement(attachement);
      }
      //SaveAttachement(attachments[k], targetDirectory)
    }

  }
}

function myFunction() {
  var threads = GmailApp.getInboxThreads();
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var subject = thread.getFirstMessageSubject();
    if (subject == "mBank - powiadomienie e-mail") {
      processOneMBankMessage(thread);
    }
  }
}
