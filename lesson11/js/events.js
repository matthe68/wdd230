let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let towns = jsonObject['towns'];
    console.log("towns: ", towns);
    let thispage = window.location.href;
    let elements = document.querySelectorAll(".navElement");
    [].forEach.call(elements, function(el) {
      if (el.firstChild.href === thispage) 
      {
        for (let i = 0; i < towns.length; i++ ) {
          if (el.firstChild.innerHTML == towns[i].name) {
            console.log("CORRECT PAGE FOUND! BRING IN EVENTS!");
            let header = document.createElement('h1');
            let eventsHolder = document.getElementById('upcoming-events');
            header.innerHTML = "Upcoming Events";
            header.classList.add('first-header');
            eventsHolder.appendChild(header);

            eventsArray = towns[i].events;
            for (eachEvent in eventsArray) {
              let event = document.createElement('p');
              event.innerHTML = eventsArray[eachEvent];
              eventsHolder.appendChild(event);
              console.log("event added!!!!");
            }
          }
        }
      }
    })
  });
