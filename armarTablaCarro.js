/*function armo_Total_Carro() {
  /*var tabla_Borrar = document.getElementById("carro_Total");
  var nodo_Total_Borrar = document.getElementById("tabla_Del_Total");
  tabla_Borrar.remove(nodo_Total_Borrar);*/
/*const num = sumar_Total_Carro(array_del_carro);
  const suma_Carro = document.getElementById("carro_Total");
  const tabla_del_Total_Carro = document.createElement("table");
  tabla_del_Total_Carro.setAttribute("id", "tabla_Del_Total");
  const tr_del_Total_Carro = document.createElement("tr");
  //tr_del_Total_Carro.setAttribute("id", "tr_total_Carro");
  const td_del_Total_Carro = document.createElement("td");
  td_del_Total_Carro.setAttribute("id", "td_total_Carro");
  td_del_Total_Carro.textContent = "Total de tu compra " + num + moneda;

  tr_del_Total_Carro.append(td_del_Total_Carro);
  tabla_del_Total_Carro.append(tr_del_Total_Carro);

  suma_Carro.append(tabla_del_Total_Carro);
}

function modifico_Total_Carro() {
  const modifico_Total_Carro = document.getElementById("td_total_Carro");
  modifico_Total_Carro.textContent = "Total de tu compra " + num + moneda;
}*/
function armar_Tabla_Carro(indice_Agregar) {
  const inicio_Carro = document.getElementById("cuerpo_Tabla_Carro");

  // Crear un nuevo elemento <tr> una fila
  const fila_Carro = document.createElement("tr");
  fila_Carro.setAttribute("id", array_del_carro[indice_Agregar].sku + "fila");
  inicio_Carro.append(fila_Carro);
  // Crear y agregar celdas a la fila
  const title_Carro = document.createElement("td");
  const art_Carro = encuentra_Articulo(array_del_carro[indice_Agregar].sku);

  title_Carro.textContent = art_Carro.title;
  title_Carro.setAttribute("id", array_del_carro[indice_Agregar].sku + "title");
  console.log("title de los armados --> " + art_Carro.title);
  fila_Carro.append(title_Carro);

  const total_Linea_Carro = document.createElement("td");
  total_Linea_Carro.setAttribute(
    "id",
    array_del_carro[indice_Agregar].sku + "total"
  );
  total_Linea_Carro.textContent =
    array_del_carro[indice_Agregar].total + moneda;

  fila_Carro.append(total_Linea_Carro);

  inicio_Carro.append(fila_Carro);
}

function modifica_Tabla_Carro(indice) {
  const art_Modificar = document.getElementById(
    array_del_carro[indice].sku + "total"
  );
  art_Modificar.textContent = array_del_carro[indice].total;
}

function remueve_Nodo_Carro(indice) {
  console.log("Estoy Borrando un Nodo");
  var fila_Borrar = document.getElementById("cuerpo_Tabla_Carro");
  var nodo_Borrar = document.getElementById(
    array_del_carro[indice].sku + "fila"
  );
  fila_Borrar.removeChild(nodo_Borrar);
  array_del_carro.splice(indice, 1);
}
//modificando
