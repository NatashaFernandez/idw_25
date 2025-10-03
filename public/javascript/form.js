// Initialize Text fields
var textFieldList = [].slice.call(document.querySelectorAll('.form-control'))
var textFields = textFieldList.map(function (textField) {
  return new materialstyle.TextField(textField)
})