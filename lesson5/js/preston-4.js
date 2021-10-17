window.onload = function() {
  let dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
  let today =new Date();
  let dayName = dayNames[today.getDay()];
  let monthName = months[today.getMonth()];
  let formattedDate = dayName + ", " + today.getDate() + " " + monthName + " "  + today.getFullYear();

  let todayTag = document.querySelector("#today");
  todayTag.innerHTML = formattedDate;
}
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("hide");
}