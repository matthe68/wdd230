const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const wantedTowns = ['Preston', 'Soda Springs', 'Fish Haven'];
    var firstItem = true;
    for (let j = 0; j < wantedTowns.length; j++) {
      for (let i = 0; i < towns.length; i++ ) {
        console.log(towns[i].name);
        if(wantedTowns[j] == towns[i].name) {
          let card = document.createElement('section');
          let div = document.createElement('div');
          let h2 = document.createElement('h2');
          let p1 = document.createElement('p');
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
          let p4 = document.createElement('p');
          let image = document.createElement('img');

          h2.textContent = String(`${towns[i].name}`);
          p1.innerHTML = String(`${towns[i].motto}`);
          p2.innerHTML = String(`Year Founded: ${towns[i].yearFounded}`);
          p3.innerHTML = String(`Population: ${towns[i].currentPopulation}`);
          p4.innerHTML = String(`Annual Rain Fall: ${towns[i].averageRainfall}`);
          image.src = String(`./images/${towns[i].photo}`);
          image.alt = String(`${towns[i].name} - photo`);
          image.width = "250";

          div.appendChild(h2);
          div.appendChild(p1);
          div.appendChild(p2);
          div.appendChild(p3);
          div.appendChild(p4);
          card.appendChild(div);
          card.appendChild(image);
          let location =  String(`./${String(towns[i].name).replace(' ', '-')}.html`);
          location = location.toLowerCase();
          console.log("location: ", location);
          function openLink(e) {
            e.preventDefault();
            window.location = location;
          }
          card.onclick = openLink;

          document.querySelector('div.article').appendChild(card);
          firstItem = false;
        }
      }
    }
  });

