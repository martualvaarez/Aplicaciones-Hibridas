
class Alumno {
    constructor(nombre, apellido, edad, carrera, materias = []) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;  
    }

    obtenerCarrera() {
    return this.carrera;
    }

    obtenerDatos() {
        return `${this.nombre} ${this.apellido}`;
    }

    modificarEdad(nuevaEdad) { 
        this.edad = nuevaEdad; 
    }

    agregarMaterias(materias) {
        this.materias.push(materias);
    }

    mostrarMaterias() {
        console.table(this.materias);
    }

    retornarEdad() {
        return this.edad;
    }

}


module.exports = Alumno;