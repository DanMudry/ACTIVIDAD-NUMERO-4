const arrayDeArticulos = [
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

  const btnDecr = document.createElement("button");
  btnDecr.id = "decrementar";
  btnDecr.textContent = "-";
  btnDecr.setAttribute("data-id", articulo.SKU);
  //btnDecr.addEventListener("click", () => decrementarCantidad());
  debugger;
  const btnIngresa = document.createElement("input");
  btnIngresa.type = "text";
  btnIngresa.id = articulo.SKU;
  btnIngresa.setAttribute("data-id", articulo.SKU);
  btnIngresa.value = "0";
  debugger;
  const btnIncr = document.createElement("button");
  btnIncr.id = "incrementar";
  btnIncr.textContent = "+";
  btnIncr.setAttribute("data-id", articulo.SKU);
  //btnIncr.addEventListener("click", () => aumentarCantidad());
  debugger;
  celdaInput.append(btnIncr);
  celdaInput.append(btnIngresa);
  celdaInput.append(btnDecr);
  nuevaFila.append(celdaInput);

  const celdaPrice = document.createElement("td");
  celdaPrice.id = articulo.SKU;
  celdaPrice.textContent = articulo.price;
  nuevaFila.append(celdaPrice);

  const celdaTotal = document.createElement("td");
  celdaTotal.id = articulo.SKU;
  celdaTotal.textContent = "0";
  nuevaFila.append(celdaTotal);

  miDiv.append(nuevaFila);
});

miDiv.addEventListener("click", (event) => {
  const targetEs = event.target;
  const dataIde = targetEs.dataset.id;
  console.log("SKU==>" + dataIde);
  const queHago = targetEs.id;
  console.log("ACCION==>" + queHago);
  const inputCantidad = document.getElementById(dataIde);
  const celdaSubTotal = document.getElementById(dataIde);
  const celdaPrecio = document.getElementById(dataIde);
  console.log("data id del Input -->" + inputCantidad.dataset.id);

  if (queHago === "incrementar") {
    console.log("Incrementar en SKU " + inputCantidad.dataset.id);
    inputCantidad.value++;
  } else {
    if (queHago === "decrementar" && inputCantidad.value >= 1) {
      console.log("Decrementar en SKU " + inputCantidad.dataset.id);
      inputCantidad.value--;
    } else {
      if (queHago === dataIde && !isNaN(inputCantidad.value)) {
        console.log("Estoy en un input ->" + inputCantidad.value);
        console.log("estoy despues del input" + inputCantidad.value);
      } else {
        inputCantidad.value = 0;
      }
    }
  }
  console.log("estoy afuera de todo -->" + inputCantidad.value);
  console.log("sigo afuera" + celdaPrice);
});

function aumentarCantidad() {
  const valorActual = parseInt(inputCantidad.value);
  if (!isNaN(valorActual)) {
    console.log("--Cuantos DENTRO del if INCREMENTAR ->" + valorActual);
    console.log("--DATA SET ID en incrementar -->" + inputCantidad.dataset.id);
    inputCantidad.value = valorActual + 1;
  } else {
    console.log("estoy aca");
    inputCantidad.value = 0;
  }
}

function decrementarCantidad() {
  const valorActual = parseInt(inputCantidad.value);
  if (!isNaN(valorActual) && valorActual > 0) {
    inputCantidad.value = valorActual - 1;
    console.log("--Cuantos DENTRO del if DECREMENTAR ->" + valorActual);
    console.log("--DATA SET ID en DECREMENTAR -->" + inputCantidad.dataset.id);
  } else {
    inputCantidad.value = 0;
  }
}
