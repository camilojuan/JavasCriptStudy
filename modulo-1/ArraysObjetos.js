// Ejercicio: Manejo de datos de estudiantes

// 1. Crea un objeto llamado "estudiante" con las siguientes propiedades:
//    - nombre (string)
//    - edad (number)
//    - materias (array de strings)
//    - promedio (number)
const estudiante1 = {
    nombre: "Camilo",
    edad : 27,
    materias: ["analisis numerico","proyecto de grado"],
    promedio: 4.3
}

// 2. Crea al menos dos objetos más con la misma estructura que "estudiante".
const estudiante2 = {
    nombre: "Juan",
    edad : 17,
    materias: ["analisis ","proyecto integrador"],
    promedio: 3.3
}
const estudiante3 = {
    nombre: "David",
    edad : 37,
    materias: ["analisis numerico","sistemas operativos"],
    promedio: 4.8
}
// 3. Almacena los objetos de estudiantes en un array llamado "listaEstudiantes".
const listaEstudiantes =[estudiante1,estudiante2,estudiante3];
console.log("//////////Datos Iniciales////////");
for (let i = 0; i < listaEstudiantes.length; i++) {
    let ContEst=[i+1];
    console.log("datos del estudiante "+ContEst);
    console.log("Nombre: "+listaEstudiantes[i].nombre);
        console.log("Edad: "+listaEstudiantes[i].edad);
        for (let J = 0; J < listaEstudiantes[i].materias.length; J++) {
            let ContEst=[J+1];
            console.log("Materia "+ContEst+": "+listaEstudiantes[i].materias[J]);
            cont=cont+1; 
        }
        console.log("Promedio: : "+listaEstudiantes[i].promedio);
        console.log("--------------------------------------");
}

// 4. Agrega una nueva materia a la lista de materias de uno de los estudiantes.
var EstudentUpdate = "David";
var NewMateria ="Redes 2"
var cont=1;
console.log("//////////Agregar una materia////////");
for (let i = 0; i < listaEstudiantes.length; i++) {
    if (EstudentUpdate == listaEstudiantes[i].nombre) {
        listaEstudiantes[i].materias.push(NewMateria);
        console.log("Se le agrego una nueva materia" );
        console.log("Nombre: "+listaEstudiantes[i].nombre);
        console.log("Edad: "+listaEstudiantes[i].edad);
        for (let J = 0; J < listaEstudiantes[i].materias.length; J++) {
            console.log("Materia "+cont+": "+listaEstudiantes[i].materias[J]);
            cont=cont+1; 
        }
        cont=0;
        console.log("Promedio: : "+listaEstudiantes[i].promedio);
    }
}

// 5. Actualiza el promedio de uno de los estudiantes.
var EstudentUpdatePromedio="David"
var NewPromedio= 4;
console.log("//////////Modificar el promedio////////");
for (let i = 0; i < listaEstudiantes.length; i++) {
    
    if (EstudentUpdatePromedio==listaEstudiantes[i].nombre) {
        listaEstudiantes[i].promedio=NewPromedio;
        console.log("Se le modifico el Promedio del estudiante");
        console.log("Nombre: "+listaEstudiantes[i].nombre);
        console.log("Edad: "+listaEstudiantes[i].edad);
        for (let J = 0; J < listaEstudiantes[i].materias.length; J++) {
            let ContEst=[J+1];
            console.log("Materia "+ContEst+": "+listaEstudiantes[i].materias[J]); 
        }
        console.log("Promedio: : "+listaEstudiantes[i].promedio);
    }
}

// 6. Imprime en la consola la información de cada estudiante en un formato legible.
console.log("///////////// Datos finales //////////////");
for (let i = 0; i < listaEstudiantes.length; i++) {
    console.log("datos del estudiante "+[i+1]);
    console.log("Nombre: "+listaEstudiantes[i].nombre);
        console.log("Edad: "+listaEstudiantes[i].edad);
        for (let J = 0; J < listaEstudiantes[i].materias.length; J++) {
            console.log("Materia "+[J+1]+": "+listaEstudiantes[i].materias[J]);
            cont=cont+1; 
        }
        console.log("Promedio: : "+listaEstudiantes[i].promedio);
        console.log("--------------------------------------");
}
// Puedes realizar cada paso por separado e imprimir los resultados para verificar.