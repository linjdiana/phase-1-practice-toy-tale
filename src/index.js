let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const testObject = {
  "id": 1,
  "name": "Woody",
  "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
  "likes": 5
};

const baseURL = "http://localhost:3000/toys"

function getToys() {
  fetch(baseURL)
  .then(function (response) {
    return response.json();
  })
  .then((toyData) => toyData.forEach(createCards))
}





//Write function to render
function createCards(toy) {
  const newCard = document.createElement("div");
  newCard.className = "card";
  const toyName = document.createElement("h2");
  toyName.textContent = toy.name;
  const toyImage = document.createElement("img");
  toyImage.src = toy.image;
  toyImage.className = "toy-avatar";
  const toyLikes = document.createElement("p");
  toyLikes.textContent = `${toy.likes} likes`;
  const likeBtn = document.createElement("button");
  likeBtn.className = "like-btn";
  likeBtn.id = toy.id;
  document.body.append(newCard);
  newCard.appendChild(toyName);
  newCard.appendChild(toyImage);
  newCard.appendChild(toyLikes);
  newCard.appendChild(likeBtn);
}
