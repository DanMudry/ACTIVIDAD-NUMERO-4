let libreriaArticulos = [];
let array_del_carro = [];
let carro_activado = false;
let que_pasa = 0;

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonblob.com/api/jsonBlob/1193194277579907072")
    .then((response) => response.json())
    .then((data) => {
      tomar_los_datos(data.products);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  function tomar_los_datos(array) {
    array.forEach((nuevoArticulo) => {
      libreriaArticulos.push(nuevoArticulo);
    });

    crearTabla(libreriaArticulos);
    escucharInput();
  }
});
//modificando
