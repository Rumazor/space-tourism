window.addEventListener("load", () => {
  //  === Variables
  const crewName = document.querySelector("#name");
  const crewImage = document.querySelector("#image");
  const crewDescription = document.querySelector("#description");
  const crewJob = document.querySelector("#job");
  const crewBtns = document.querySelectorAll(".btn-crew");
  console.log(crewBtns);

  // == Iterar planetas y hacer fetch - remover clase active
  crewBtns.forEach((e, index) => {
    e.addEventListener("click", () => {
      fetchData(index);
      for (let i = 0; i < crewBtns.length; i++) {
        crewBtns[i].classList.remove("btn-active");
      }
      e.classList.add("btn-active");
    });
  });

  // Fetch en la posision del for()
  async function fetchData(i) {
    await fetch("data.json")
      .then((res) => res.json())
      .then((data) => getData(data.crew[i])); //
  }

  //  Remplazar datos
  function getData(data) {
    crewName.innerText = data.name;
    crewDescription.innerText = data.bio;
    crewJob.innerText = data.role;
    crewImage.children[0].remove(); //remover la imagen actual

    // Crear una nueva imagen con los datos
    let newImg = document.createElement("img");
    newImg.setAttribute("src", data.images.webp);
    newImg.setAttribute("alt", data.name);
    newImg.setAttribute("class", "crew-img");
    crewImage.appendChild(newImg);
  }
});
