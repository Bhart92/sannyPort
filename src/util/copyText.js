function copyText() {
  // Get the text field
  var copyText = document.getElementById("email-link").innerHTML.slice(0, 20);

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
}
export default copyText;
