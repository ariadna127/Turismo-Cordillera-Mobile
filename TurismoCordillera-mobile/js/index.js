const cerrarMenu = document.querySelector("#cerrar-menu");
const abrirMenu = document.querySelector("#abrir-menu");
const menu = document.querySelector("#modal-menu");
abrirMenu.addEventListener("click", () => {
  menu.classList.add("activa");
});
cerrarMenu.addEventListener("click", () => {
  menu.classList.remove("activa");
});
const menuOptions = document.querySelector(".nav").children;

for (let i = 0; i < menuOptions.length; i++) {
  menuOptions[i].addEventListener("click", () => {
    menu.classList.remove("activa");
  });
}
const vermas_derecha = document.querySelectorAll(".vermas__derecha");

vermas_derecha.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    const specificLayer = document.querySelector(`.${e.target.id}`);
    /*specificLayer.classList.remove("toggleMobile");*/
    specificLayer.style.transform = "translateX(0)";
    const parentCajas = enlace.closest(".apartados__cajas");
    /*
    parentCajas.children[0].style.width = "30%";
    parentCajas.children[1].style.width = "70%";*/
    parentCajas.children[0].classList.add("desplegados__angosto");
    parentCajas.children[1].classList.add("desplegados__ancho");

    const parentOverlay = enlace.closest(".apartados__item");
    parentOverlay.classList.remove("apartados__overlay");
    const cerrarExtras = specificLayer.children[0];
    cerrarExtras.addEventListener("click", () => {
      specificLayer.style.transform = "translateX(100%)";
      /*specificLayer.classList.add("toggleMobile");*/
      parentCajas.children[0].classList.remove("desplegados__angosto");
      parentCajas.children[1].classList.remove("desplegados__ancho");
      parentCajas.children[0].style.width = "50%";
      parentCajas.children[1].style.width = "50%";
      parentOverlay.classList.add("apartados__overlay");
    });
  });
});
const vermas_izquierda = document.querySelectorAll(".vermas__izquierda");

vermas_izquierda.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    const specificLayer = document.querySelector(`.${e.target.id}`);
    specificLayer.style.transform = "translateX(0)";
    const parentCajas = enlace.closest(".apartados__cajas");
    /*parentCajas.children[0].style.width = "70%";
    parentCajas.children[1].style.width = "30%";*/
    parentCajas.children[0].classList.add("desplegados__ancho");
    parentCajas.children[1].classList.add("desplegados__angosto");
    const parentOverlay = enlace.closest(".apartados__item");
    parentOverlay.classList.remove("apartados__overlay");
    const cerrarExtras = specificLayer.children[0];
    cerrarExtras.addEventListener("click", () => {
      specificLayer.style.transform = "translateX(-100%)";
      parentCajas.children[0].classList.remove("desplegados__ancho");
      parentCajas.children[1].classList.remove("desplegados__angosto");
      parentCajas.children[0].style.width = "50%";
      parentCajas.children[1].style.width = "50%";
      parentOverlay.classList.add("apartados__overlay");
    });
  });
});
const botonSubir = document.querySelector("#subir");
window.addEventListener("scroll", () => {
  if (document.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    botonSubir.classList.remove("invisible");
  } else botonSubir.classList.add("invisible");
});
botonSubir.addEventListener("click", () => {
  document.scrollTo(0);
});
const hovers = document.querySelectorAll(".apartados__item");
console.log("hovers ", hovers);
console.log("posision primer item", hovers[0].scrollTop);

window.addEventListener("scroll", () => {
  hovers.forEach((seccion) => {
    console.log("dentro de for each antes de funcion");
    console.log("adentro de funcion ", seccion.scrollTop);
    const persiana = seccion.getElementsByClassName("item__overlay")[0];
    const titulo = seccion.getElementsByClassName("apartados__h3")[0];
    const posicion = seccion.getBoundingClientRect();
    const isVisible = posicion.top <= 30 || posicion.bottom >= 80;
    // (window.innerHeight - 50 || document.documentElement.clientHeight - 50);
    if (isVisible) {
      persiana.classList.add("overlay__mobile");
      titulo.classList.add("overlay__mobile");
    } else {
      persiana.classList.remove("overlay__mobile");
      titulo.classList.remove("overlay__mobile");
    }
  });
});
