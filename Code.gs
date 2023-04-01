function onOpen() {
  var ui  = SpreadsheetApp.getUi();
  ui.createMenu('Random Numbers API menu').addItem('Display random number fact', 'getNumbers').addToUi();
}

function getNumbers() {
  //call the number api for random math fact 
  var response = UrlFetchApp.fetch('http://numbersapi.com/random/math');
  Logger.log(response.getContentText());

  var fact = response.getContentText();
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(sheet.getLastRow() + 1 , 1).setValue([fact]);
}

