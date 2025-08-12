const Product = require('./Product');
const fs = require('fs/promises');

const path = "notas.txt";

const productManager = new Product();

productManager.addProduct({
  id: 1,
  title: 'Teclado',
  description: 'Teclado mecánico',
  price: 25000,
  stock: 25
});

const leerArchivo = async () => {
  try {
    const data = await fs.readFile(path);
    console.log(data.toString());
  } catch (error) {
    console.error("Error leyendo el archivo:", error);
  }
}

const guardar = async (texto) => {
  try {
    await fs.writeFile(path, texto);
  } catch (error) {
    console.error("Error escribiendo el archivo:", error);
  }
}

async function main() {
  await guardar("Escribiendo desde Node");
  await leerArchivo();
}

main();