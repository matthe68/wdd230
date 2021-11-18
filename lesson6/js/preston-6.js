window.onload = function() {
  // SET TODAYS DATE
  let dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
  let today =new Date();
  let dayName = dayNames[today.getDay()];
  let monthName = months[today.getMonth()];
  let formattedDate = dayName + ", " + today.getDate() + " " + monthName + " "  + today.getFullYear();
  let todayTag = document.querySelector("#today");
  todayTag.innerHTML = formattedDate;
  
  //MAKE HOME PAGE BE ACTIVE
  var elems = document.querySelectorAll(".navElement");
  [].forEach.call(elems, function(el) {
    if (el.firstChild.text == "Home") 
    {
      el.classList.add("active");
    }
  })
  //      The below code would make it so that the current page is marked as active, since I am using filler links though that don't go 
  //      anywhere this means it makes all of the links seem active. Until I make the other pages the above code will make the Home page 
  //      start as active and then the below function will make it so that each link clicked in turn will make that link active


  // var thispageurl = window.location.href;
  // var elems = document.querySelectorAll(".navElement");
  // [].forEach.call(elems, function(el) {
  //   console.log("el.firstChild.href: ", el.firstChild.href, " thispageurl: ", thispageurl);
  //   if (el.firstChild.href === thispageurl) 
  //   {
  //     el.classList.add("active");
  //   }
  // })

  //IF TODAY IS FRIDAY, SHOW ANNOUNCEMENT
  if (dayName == "Friday") {
    var listE = document.querySelector('#notification-banner');
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "\u2716";
    let p = document.createElement('p');
    p.innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion";
    li.appendChild(p);
    li.appendChild(deleteButton);
    
    listE.appendChild(li);
    deleteButton.addEventListener('click', function() {
      listE.removeChild(li);
    })
  }
}
WebGLUniformLocation.load({
  google: {
    families: [
      'Maitree', 
      'Source Sans Pro'
    ]
  }
})
//FUNCTION TO TOGGLE MENU
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("hide");
  console.log("toggle");
}
//FUNCTION TO TOGGLE ACTIVE ELEMENT
function toggleActive(obj) {
  var elems = document.querySelectorAll(".navElement");

  [].forEach.call(elems, function(el) {
      el.classList.remove("active");
  })
  obj.classList.add("active");
};
