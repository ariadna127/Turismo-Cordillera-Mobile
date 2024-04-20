class Sala {
  constructor(nombre, filas, columnas, descripcion) {
    this.nombre = nombre;
    this.filas = filas;
    this.columnas = columnas;
    this.capacidad = filas * columnas;
    this.descripcion = descripcion;
  }
}

salas[0] = new Sala(
  "Premium",
  15,
  10,
  "Nuestra sala VIP, cuenta con butacas reclinables con botones eléctricos para que cada expectador elija su posición ideal y así disfrute de su película preferida como si estuviera en primera clase de un viaje en avión. Además, menos cantidad de butacas y más espacio entre las mismas otorgan mayor privacidad, y cada butaca cuenta con bandeja para los snacks. NO está permitido el ingreso de menores de 12 años."
);
salas[1] = new Sala(
  "Clásica",
  25,
  10,
  "Sin escatimar en confort, esta sala tiene mayor capacidad que la Premium, butacas ultra cómodas con espacio posavasos. Está pensada para los usuarios que no quieren gastar tanto como en la sala Premium pero quieren asegurarse de pasar un momento de tranquilidad, sin interrupciones. Ofrecemos tanto películas ATP como las no aptas para menores de 18."
);
salas[2] = new Sala(
  "Infantil",
  25,
  15,
  "La sala más económica, con butacas confortables pero clásicas, en ella proyectamos mayormente películas para el público infantil. Si sos de aquellas personas que no quieren interrupciones, te aconsejamos las salas Clásica o Premium. Las butacas poseen espacio posavasos, pero están más juntas unas de otras."
);
