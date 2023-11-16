let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changePokemon = () => {
  let randomNumber = Math.ceil(Math.random() * 150) + 1; // 1 et 151

  let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(requestString, options)
    .then((response) => response.json())
    .then(
      (response) => (
        (image.src = response.sprites.front_default),
        (pokeNumber.textContent = `#${response.id}`),
        (pokeName.textContent = response.name)
      )
    )
    .catch((err) => console.error(err));
};

button.addEventListener("click", changePokemon);

changePokemon();
