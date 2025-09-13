const Product = require("./product");

async function main() {
  const manager = new Product();

  // Cargar productos del archivo JSON
  await manager.loadProducts();

  // Agregar productos
  await manager.addProduct({
    id: 1,
    title: "Teclado",
    description: "Teclado mecánico",
    price: 25000,
    stock: 25,
  });

  await manager.addProduct({
    id: 2,
    title: "Mouse",
    description: "Mouse inalámbrico",
    price: 15000,
    stock: 30,
  });

  console.log("Lista de productos:");
  console.log(manager.getProducts());

  // Buscar un producto
  console.log("Producto con ID 1:");
  console.log(manager.getProductById(1));

  // Actualizar un producto
  console.log("Actualizando producto con ID 2...");
  const actualizado = await manager.updateProductById(2, {
    title: "Mouse Gamer",
    price: 20000,
  });
  console.log(actualizado);

  // Eliminar un producto
  console.log("Eliminando producto con ID 1...");
  await manager.deleteProductById(1);

  console.log("Productos finales:");
  console.log(manager.getProducts());
}

main();