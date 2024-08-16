function myFunction() {
  var threads = GmailApp.getInboxThreads();
  var result = "Result:\n\r"
  for (var i = 0; i < threads.length; i++) {
    var subject = threads[i].getFirstMessageSubject();
    if (subject == "mBank - powiadomienie e-mail") {
      var msgs = threads[i].getMessages();
      for (var j = 0; j < msgs.length; j++) {
        var attachments = msgs[j].getAttachments();
        for (var k = 0; k < attachments.length; k++) {
          var attachement = attachments[k]
          var attachementName = attachement.getName();
          if (attachementName.startsWith("Powiadomienie e-mail z")) {
            //console.log(attachementName)
            console.log(attachement.getDataAsString())
            const content = attachement.getDataAsString();
            const $ = Cheerio.load(content);
            var data = [];
            $("table > tbody > tr > td > table").each((index, element) => {
              var row = [];
              $(element).find("td").each((index, child) => {
                row.push($(child).text());
              });
              if (row.length > 0) {
                data.push(row);
              }
            });

            console.log(data);

            var x = $("Table");
            console.log(x);
            var y = x[3];
            //var z = y("TD").first().text();

            var res = XmlService.parse(content);
            Logger.log(res.getContent()) // foo

            console.log(x);

          }

          //SaveAttachement(attachments[k], targetDirectory)
        }

      }
    }
    //console.log(subject);
  }
}
