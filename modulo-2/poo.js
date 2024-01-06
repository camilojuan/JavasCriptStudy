// Ejercicio: Manejo de datos de estudiantes
// 1. Crea un objeto llamado "estudiante" con las siguientes propiedades:
//    - nombre (string)
//    - edad (number)
//    - materias (array de strings)
//    - promedio (number)  
// 2. Crea al menos dos objetos más con la misma estructura que "estudiante".

// 3. Almacena los objetos de estudiantes en un array llamado "listaEstudiantes".

// 4. Agrega una nueva materia a la lista de materias de uno de los estudiantes.

// 5. Actualiza el promedio de uno de los estudiantes.

// 6. Imprime en la consola la información de cada estudiante en un formato legible.

// Puedes realizar cada paso por separado e imprimir los resultados para verificar.


class Estudiantes {
    //1
    constructor (ParametroNombre,ParametroEdad,ParametroMaterias,ParametroPromedio){
       this.nombre= ParametroNombre;
        this.edad = ParametroEdad;
        this.materias= ParametroMaterias;
        this.promedio= ParametroPromedio
    }
    listar() {
        
    }
}
//const ImprEstu = new Estudiantes();
//console.log(ImprEstu);

//2
const Estudent1 = new Estudiantes("Juan", 20,["diferencial", "Algoritmos"],4.0);
const Estudent2 = new Estudiantes("Camilo", 27,["Integral", "Gestio de proyectos"],4.5);
console.log(Estudent1);
console.log(Estudent2);