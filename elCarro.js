class Producto {
  constructor(sku, cantidad, precio, total) {
    this.sku = sku;
    this.cantidad = cantidad;
    this.precio = precio;
    this.total = (parseFloat(this.precio) * parseFloat(this.cantidad)).toFixed(
      2
    );
  }
}

function agregarAlCarro(sku, cant, precio) {
  array_del_carro.push(new Producto(sku, cant, precio));
  array_del_carro.forEach((prod) => {
    console.log(prod);
  });
}

function modificarCarro(indice, modifica_cantidad) {
  console.log("estoy en modificaCarro");
  array_del_carro[indice].cantidad = modifica_cantidad;
  array_del_carro.forEach((prod) => {
    console.log(prod);
  });
}
