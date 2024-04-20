// Make a GET request using the Fetch API
const excursiones = fetch("../data/excursiones.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((datos) => {
    // Process the retrieved user data
    console.log("User Data:", datos);
    dibujarExcursiones(datos);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
function dibujarExcursiones(excursiones) {
  const grilla = document.querySelector(".grilla");
  let html = "";
  excursiones.forEach((excursion) => {
    html += `<div class="grilla__card"><img src="../assets/excursion${excursion.id}.jpg" alt="Imagen de excursión${excursion.titulo}"><div class="grilla__card-div">
<h3>${excursion.titulo}</h3>
<div class="card__categorias">`;
    html += excursion.categorias
      .map(
        (categoria) =>
          `<div class="${categoria}"><svg>` +
          `<use href="../assets/icons/iconos.svg#icon-${categoria}"
xlink:href="./assets/icons/iconos.svg#icon-${categoria}"></use>` +
          `</svg></div>`
      )
      .join("");
    html += `</div>`;
    html += `<p>${excursion.descripcion.substring(
      0,
      300
    )} ...</p><div class="card__info"><div><p>Días:</p></div><div><p${
      excursion.disponibilidad
    }</p></div>
</div><div class="card__info"><div><p>Duración</p></div><div><p>${
      excursion.duracion
    }</p></div></div><button class="card__button">Más información</button></div></div>`;
  });
  grilla.innerHTML = html;
}
