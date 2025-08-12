const Product = require('./Product');

const productManager = new Product();

// Agregar productos
productManager.addProduct({
  id: 1,
  title: 'Teclado',
  description: 'Teclado mecánico',
  price: 25000,
  stock: 25
});

productManager.addProduct({
  id: 2,
  title: 'Mouse',
  description: 'Mouse inalámbrico',
  price: 15000,
  stock: 30
});

// Mostrar todos los productos
console.log("Todos los productos:");
console.log(productManager.getProducts());

// Buscar producto por ID válido
console.log("Producto con ID 1:");
console.log(productManager.getProductById(1));

// Buscar producto por ID inválido (debería mostrar error en consola y devolver null)
console.log("Producto con ID 10:");
console.log(productManager.getProductById(10));