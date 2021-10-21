window.onload = function() {
  let dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
  let today =new Date();
  let dayName = dayNames[today.getDay()];
  let monthName = months[today.getMonth()];
  let formattedDate = dayName + ", " + today.getDate() + " " + monthName + " "  + today.getFullYear();

  const menuItem = document.querySelector(".navElement");
  let todayTag = document.querySelector("#today");
  todayTag.innerHTML = formattedDate;
  menuItem.addEventListener('click', event => {
    var ul = document.getElementById("primary-nav");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
      items[i].classList.remove("active");
      console.log("no longer active"); 
    }
    menuItem.classList.add('active');
  })
}

function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("hide");
  console.log("toggle");
}
