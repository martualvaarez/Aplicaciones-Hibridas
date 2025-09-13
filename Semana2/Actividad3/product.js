const fs = require("fs/promises");
const path = "./products.json";

class Product {
  constructor() {
    this.products = [];
  }

  // Cargar productos desde el JSON al array
  async loadProducts() {
    try {
      const data = await fs.readFile(path, "utf-8");
      this.products = JSON.parse(data);
    } catch (error) {
      // Si no existe el archivo, inicializar vacío
      this.products = [];
    }
  }

  // Guardar productos del array al JSON
  async saveProducts() {
    try {
      await fs.writeFile(path, JSON.stringify(this.products, null, 2));
    } catch (error) {
      console.error("Error guardando productos:", error);
    }
  }

  // Agregar producto
  async addProduct(product) {
    const { id, title, description, price, stock } = product;
    if (
      id == null ||
      title == null ||
      description == null ||
      price == null ||
      stock == null
    ) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    if (this.products.some((p) => p.id === id)) {
      console.error("El producto con ese ID ya existe");
      return;
    }

    this.products.push(product);
    await this.saveProducts();
  }

  // Obtener todos los productos
  getProducts() {
    return this.products;
  }

  // Buscar producto por ID
  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.error("Not found");
      return null;
    }
    return product;
  }

  // Eliminar por ID
  async deleteProductById(id) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      console.error("Not found");
      return;
    }
    this.products.splice(index, 1);
    await this.saveProducts();
    console.log(`Producto con ID ${id} eliminado`);
  }

  // Actualizar por ID
  async updateProductById(id, updatedProduct) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      console.error("Not found");
      return {};
    }

    // Mantener el ID original y actualizar lo demás
    this.products[index] = { ...this.products[index], ...updatedProduct, id };
    await this.saveProducts();
    return this.products[index];
  }
}

module.exports = Product;