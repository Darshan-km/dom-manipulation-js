const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2017,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

var btn = document
  .getElementById("myBtn")
  .addEventListener("click", toggleElements);

function toggleElements() {
  //hide and show dom
  var x = document.querySelector(".container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  render();
}

function petDataFunction(pets, index) {
  return `<div class="row" id="delete${index}" onClick="deleteRow(${index})">
    <div class="col-md-12">
    <div class="media">
<div class="media-left">
  <a href="#">
    <img class="media-object" src="${pets.photo}" alt="${pets.name}">
  </a>
</div>
<div class="media-body">
  <h4 class="media-heading">Media heading</h4>
  <ul class="list-group">
    <li class="list-group-item">${pets.name}</li>
    ${
      pets.lastName
        ? `<li class="list-group-item">${pets.lastName}</li>`
        : `<li style="display:none; visibility:hidden"></li>`
    }
    <li class="list-group-item" id="inputValue1${index}"></li>
    <li class="list-group-item">${pets.species}</li>
    <li class="list-group-item">${pets.birthYear}</li>
    <li class="list-group-item">
        <input type="text" id="inputValue${index}" onkeyup="appendContent(${index})" onclick="event.stopPropagation()"><button class="btn btn-success" onClick="event.stopPropagation();addToList(${index})">Add</button>
    </li>
  </ul>
</div>
</div>
    </div>
</div>`;
}

function render() {
  document.querySelector(".container").innerHTML = `${petsData
    .map(petDataFunction)
    .join("")}`;
}

function addToList(index) {
  petsData[index].lastName = document.getElementById(
    "inputValue" + index
  ).value;
  render();
}

function appendContent(index) {
  var x = document.getElementById("inputValue" + index).value;
  document.getElementById("inputValue1" + index).innerHTML = x;
}


function deleteRow(index) {
  document.querySelector("#delete" + index).style.display = "none";
}
