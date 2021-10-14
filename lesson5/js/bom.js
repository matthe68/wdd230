window.onload = function() {
  var inputE = document.querySelector('#favchap');
  var buttonE = document.querySelector('#submit');
  var listE = document.querySelector('.list');
  buttonE.addEventListener('click', function() 
  {
    if (inputE.value != "") 
    {
      let li = document.createElement('li');
      let deleteButton = document.createElement('button');
      deleteButton.textContent = "\u2716";
      li.innerHTML = inputE.value;
      li.appendChild(deleteButton);
      
      listE.appendChild(li);
      deleteButton.addEventListener('click', function() {
        listE.removeChild(li);
      })
    }
    inputE.focus();
  });
}