const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = String(`${prophets[i].name} ${prophets[i].lastname}`);
      p1.innerHTML = String(`Date of Birth: ${prophets[i].birthdate}`);
      p2.innerHTML = String(`Place of Birth: ${prophets[i].birthplace}`);
      image.src = prophets[i].imageurl;
      image.alt = String(`${prophets[i].name} ${prophets[i].lastname} - ${i + 1}`);
      console.log("logging: ", h2.textContent);

      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });