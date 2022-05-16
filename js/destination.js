window.addEventListener("load", () => {
  //  === Variables
  const planetName = document.querySelector("#name");
  const planetImage = document.querySelector("#image");
  const planetDescription = document.querySelector("#description");
  const planetDistance = document.querySelector("#distance");
  const planetTravel = document.querySelector("#travel");
  const planetBtns = document.querySelectorAll(".btn-planet");

  // == Iterar planetas y hacer fetch - remover clase active
  planetBtns.forEach((e, index) => {
    e.addEventListener("click", () => {
      fetchData(index);
      for (let i = 0; i < planetBtns.length; i++) {
        planetBtns[i].classList.remove("active");
      }
      e.classList.add("active");
    });
  });

  // Fetch en la posision del for()
  async function fetchData(i) {
    await fetch("data.json")
      .then((res) => res.json())
      .then((data) => getData(data.destinations[i])); //
  }

  //  Remplazar datos
  function getData(data) {
    planetName.innerText = data.name;
    planetDescription.innerText = data.description;
    planetDistance.innerText = data.distance;
    planetTravel.innerText = data.travel;
    planetImage.children[0].remove(); //remover la imagen actual

    // Crear una nueva imagen con los datos
    let newImg = document.createElement("img");
    newImg.setAttribute("src", data.images.webp);
    newImg.setAttribute("alt", data.name);
    newImg.setAttribute("class", "planet-img");
    planetImage.appendChild(newImg);
  }
});
