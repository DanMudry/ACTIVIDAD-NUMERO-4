class Producto {
  constructor(sku, cantidad, precio, total) {
    this.sku = sku;
    this.cantidad = cantidad;
    this.precio = precio;
    this.total = (this.cantidad * this.precio).toFixed(2);
  }
}

function agregarAlCarro(sku, cant, precio) {
  array_del_carro.push(new Producto(sku, cant, precio));
  array_del_carro.forEach((prod) => {
    console.log(prod);
    const ind = array_del_carro.length;
    agrega_DOM_carro(
      array_del_carro[ind - 1].sku,
      array_del_carro[ind - 1].total
    );
  });
}

function modificarCarro(indice, modifica_cantidad) {
  console.log("estoy en modificaCarro");
  array_del_carro[indice].cantidad = modifica_cantidad;
  array_del_carro[indice].total = (
    modifica_cantidad * array_del_carro[indice].precio
  ).toFixed(2);
  array_del_carro.forEach((prod) => {
    console.log(prod);
  });
  modifica_DOM_carro(
    array_del_carro[indice].sku,
    array_del_carro[indice].total
  );
}

function encuentra_Articulo(sku) {
  return libreriaArticulos.find(
    (articuloBuscado) => articuloBuscado.SKU === sku
  );
}
