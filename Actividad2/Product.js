class Product {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Validar que todos los campos estén presentes
    const { id, title, description, price, stock } = product;
    if (
      id == null || title == null || description == null ||
      price == null || stock == null
    ) {
      console.error("Todos los campos son obligatorios");
      return;
    }
    // Validar que no exista otro producto con el mismo id
    if (this.products.some(p => p.id === id)) {
      console.error("El producto con ese ID ya existe");
      return;
    }

    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      console.error("Not found");
      return null;
    }
    return product;
  }
}

module.exports = Product;