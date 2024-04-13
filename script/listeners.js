changeTheme();
getAphone();
closeModal ();


function printContent() {
  var content = document.querySelector(".print-button > .contract").innerHTML;
  var printWindow = window.open('', '_blank');
  printWindow.document.open();
  printWindow.document.write('<html><head><title>Друкований документ</title></head><body onload="window.print()">' + content + '</body></html>');
  printWindow.document.close();
}
document.querySelector(".print-button > button").addEventListener("click", function() {
  printContent();
});