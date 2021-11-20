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
    for (let i = 0; i < towns.length; i++ ) {
      if(wantedTowns.includes(towns[i].name)) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = String(`${towns[i].name}`);
        if (firstItem == true) {
          h2.classList.add("first-header");
        }
        p1.innerHTML = String(`${towns[i].motto}`);
        p2.innerHTML = String(`Year Founded: ${towns[i].yearFounded}`);
        p3.innerHTML = String(`Population: ${towns[i].currentPopulation}`);
        p4.innerHTML = String(`Annual Rain Fall: ${towns[i].averageRainfall}`);
        image.src = String(`./images/${towns[i].photo}`);
        image.alt = String(`${towns[i].name} - photo`);
        image.width = "250";

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(image);

        document.querySelector('div.article').appendChild(card);
        firstItem = false;
      }
    }
  });

