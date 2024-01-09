//clase persona
class Persons {
    //constructor de la clase persona
    constructor (ParameterId, ParameterNombre, ParameterEdad){
        this.Id = ParameterId;
        this.Nombre = ParameterNombre;
        this.Edad = ParameterEdad;
    }
    ShowPersons(){
        return `Este es mi Id: ${this.Id} y mi nombre: ${this.Nombre}`;
    }
}
//mostrar objetos
const Persons1= new Persons(1,"Juan", 18);
console.log(Persons1);

//mostrar metodo
console.log(Persons1.ShowPersons());

//camos a heredar de la clase Persons pero crearemos un estudiante, por eso extendemos de persons.
class Estudents extends Persons {
    constructor(Id, Nombre, Edad, Materias, Promedio){
        //con super llamamos los atributos de la clase persona
        super(Id,Nombre,Edad);
        //agregamos los nuevos
        this.Materias = Materias;
        this.Promedio = Promedio;
    }
    
    //Metodo de la clase estudiante
    ShowEstudents () {
        return `${this.Nombre} tiene un promedio de: ${this.Promedio} y sus materias son: ${this.ShowMaterias(this.Materias)}`;
    }
    ShowMaterias (ArrayMaterias) {
        let Materias ="";
        for (let i = 0; i < ArrayMaterias.length; i++) {
            Materias += ", "+ArrayMaterias[i];
        }
        Materias += "."
        return Materias;
    }
}

//objetos de estudiantes
const Estudent1 = new Estudents(2,"Camilo",27,["Redes 2", "Proyecto de grado"],4.0);
console.log(Estudent1.ShowEstudents());
