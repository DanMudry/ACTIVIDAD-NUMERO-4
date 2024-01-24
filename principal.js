let libreriaArticulos = [
  {
    SKU: "0K3QOSOV4V",
    title: "iFhone 13 Pro",
    price: "938.99",
  },
  {
    SKU: "TGD5XORY1L",
    title: "Cargador",
    price: "49.99",
  },
  {
    SKU: "IOKW9BQ9F3",
    title: "Funda de piel",
    price: "79.99",
  },
];
let array_del_carro = [];
let carro_activado = false;
let que_pasa = 0;

crearTabla(libreriaArticulos);
document.addEventListener("DOMContentLoaded", function () {
  escucharInput();
});
//modificando
