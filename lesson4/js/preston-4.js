window.onload = function() {
  const time = "Last Updated: " + String(document.lastModified);
  var lastUpdated = document.querySelector("#last-updated");
  lastUpdated.innerHTML = time;
}
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("hide");
}