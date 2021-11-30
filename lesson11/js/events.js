let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let towns = jsonObject['towns'];
    let thispage = window.location.href;
    let elements = document.querySelectorAll(".navElement");
    [].forEach.call(elements, function(el) {
      if (el.firstChild.href === thispage) 
      {
        for (let i = 0; i < towns.length; i++ ) {
          if (el.firstChild.innerHTML == towns[i].name) {
            console.log("CORRECT PAGE FOUND! BRING IN EVENTS!");
          }
        }
      }
    })
  });
