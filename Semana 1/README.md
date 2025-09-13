# Actividad 03 - Product y FileSystem

## Consigna
A partir de la clase `Product` creada en la **Actividad 02**:

- Guardar los productos en un **JSON local**.
- Leer los productos desde un **JSON local**.
- Implementar los métodos:
  - `deleteProductById(id)`: elimina el producto del array y persiste el cambio en el JSON. Si no encuentra el ID, mostrar "Not found".
  - `updateProductById(id, product)`: actualiza los datos del producto con ese ID. Si no existe, mostrar "Not found" y devolver un objeto vacío.

---

## Archivos del proyecto

- `product.js`: contiene la clase `Product` con todos los métodos.
- `main.js`: instancia la clase y prueba sus métodos.
- `products.json`: archivo donde se guardan los productos.
- `README.md`: instrucciones del proyecto.

---

## Cómo ejecutar

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/martualvaarez/Aplicaciones-Hibridas.git