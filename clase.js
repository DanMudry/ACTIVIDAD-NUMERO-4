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

function escucharInput(arrayDeArticulos) {
  const escucha = document.getElementById("cuerpoTabla");
  escucha.addEventListener("input", (event) => {
    const targetEs = event.target;

    const dataIde = targetEs.dataset.id;
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
    const precioArticulo = arrayDeArticulos.find(
      (articuloBuscado) => articuloBuscado.SKU === dataIde
    );

    modificaPrecio.textContent = (
      inputCantidad.value * precioArticulo.price
    ).toFixed(2);
  }); //aca termina el listenner del Input
}
