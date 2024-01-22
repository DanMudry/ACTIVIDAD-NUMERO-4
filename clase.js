function crearTabla(arrayDeArticulos) {
  // Obtener el div donde se agregarán los párrafos
  const miDiv = document.getElementById("cuerpoTabla");
  // Recorrer el array de artículos
  arrayDeArticulos.forEach((articulo) => {
    // Crear un nuevo elemento <tr> una fila
    const nuevaFila = document.createElement("tr");
    miDiv.append(nuevaFila);
    // Crear y agregar celdas a la fila
    const celdaTitle = document.createElement("td");
    celdaTitle.textContent = articulo.title;
    nuevaFila.append(celdaTitle);

    const celdaSKU = document.createElement("p");
    celdaSKU.textContent = articulo.SKU;
    celdaTitle.append(celdaSKU);
    debugger;
    const celdaInput = document.createElement("td");

    const btnIngresa = document.createElement("input");
    btnIngresa.type = "number";
    btnIngresa.id = "ingresa";
    btnIngresa.setAttribute("data-id", articulo.SKU);
    btnIngresa.value = "0";

    celdaInput.append(btnIngresa);

    nuevaFila.append(celdaInput);

    const celdaPrice = document.createElement("td");

    celdaPrice.setAttribute("data-id", articulo.SKU);
    celdaPrice.textContent = articulo.price;
    nuevaFila.append(celdaPrice);

    const celdaTotal = document.createElement("td");
    celdaTotal.id = articulo.SKU;
    celdaTotal.textContent = 0;
    nuevaFila.append(celdaTotal);

    miDiv.append(nuevaFila);
  }); //aca termina el forEach para crear la tabla
}

function escucharInput(/*arrayDeArticulos*/) {
  const escucha = document.getElementById("cuerpoTabla");
  escucha.addEventListener("input", (event) => {
    const targetEs = event.target;

    const dataIde = targetEs.dataset.id;
    console.log("*** ESCUCHANDO ***");
    console.log("SKU==>" + dataIde);
    const queHago = targetEs.id;
    console.log("ACCION==>" + queHago);

    const inputCantidad = document.querySelector('[data-id="' + dataIde + '"]');
    const celdaCantidad = document.querySelector(
      '[data-id="' + dataIde + '-cantidad"]'
    );
    const celdaSubTotal = document.querySelector('[data-id="' + dataIde + '"]');
    const nuevoValor = Math.max(0, inputCantidad.value);
    inputCantidad.value = nuevoValor;
    console.log("data id del Input -->" + inputCantidad.dataset.id);
    console.log("estoy afuera de todo -->" + inputCantidad.value);
    const modificaPrecio = document.getElementById(dataIde);
    const precioArticulo = /*arrayDeArticulos*/ libreriaArticulos.find(
      (articuloBuscado) => articuloBuscado.SKU === dataIde
    );

    modificaPrecio.textContent = (
      inputCantidad.value * precioArticulo.price
    ).toFixed(2);
    //return dataIde;

    const indice_del_articulo = array_del_carro.findIndex(
      (producto) => producto.sku === dataIde
    );
    console.log("este es el indice ==> " + indice_del_articulo);

    if (indice_del_articulo !== -1) {
      modificarCarro(indice_del_articulo, inputCantidad.value);
    } else {
      console.log("el precio antes de el carro " + precioArticulo.price);
      agregarAlCarro(dataIde, inputCantidad.value, precioArticulo.price);
    }
  });
} //aca termina el listenner del Input

function modifica_DOM_carro(sku, total) {
  console.log("Estoy modificando ===");
  const art_DOM_modificado = document.getElementById(sku + "carro");
  art_DOM_modificado.textContent = total;
  que_pasa++;
  console.log("estoy en MODIFICA ===+++++>" + que_pasa);
}

function agrega_DOM_carro(sku, total) {
  console.log("sku que le pase " + sku);
  console.log("este es el total que te pase " + total);
  miCarro = document.getElementById("cuerpoTablaCarro");
  const nuevaFila = document.createElement("tr");

  const articulo_carro = encuentra_Articulo(sku);
  const celda_art_carro = document.createElement("td");
  celda_art_carro.textContent = articulo_carro.title;
  nuevaFila.append(celda_art_carro);

  const celda_tot_carro = document.createElement("td");
  celda_tot_carro.textContent = total;
  celda_tot_carro.setAttribute("id", sku_A + "carro");
  nuevaFila.append(celda_tot_carro);
  miCarro.append(nuevaFila);
  que_pasa++;
  console.log("estoy en AGREGA ***===>" + que_pasa);
}
