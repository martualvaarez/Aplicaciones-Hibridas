const Alumno = require('./Alumno');

const alumno1 = new Alumno("Martina", "Alvarez", 19, "DDW");

// Mostramos datos iniciales
console.log("Datos del alumno:", alumno1.obtenerDatos());
console.log("Carrera:", alumno1.obtenerCarrera());
console.log("Edad:", alumno1.retornarEdad());

// Modificamos la edad
alumno1.modificarEdad(20);
console.log("Edad actual:", alumno1.retornarEdad());

// Agregamos materias
alumno1.agregarMaterias("Aplicaciones Híbridas");
alumno1.agregarMaterias("Clientes Web Mobile");
alumno1.agregarMaterias("Internet de las Cosas");
alumno1.agregarMaterias("Ética y Deontología Profesional");
alumno1.agregarMaterias("Proyecto Final");
alumno1.agregarMaterias("Portales y Comercio Electrónico");

// Mostramos materias
console.log("Materias:");
alumno1.mostrarMaterias();

