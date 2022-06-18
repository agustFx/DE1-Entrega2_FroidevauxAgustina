class Usuario{
    constructor(nombre, mail){
        this.nombre = nombre;
        this.mail = mail;
    }

    saludarUsuario(){
        alert("Nos alegramos de verte por acá, " + this.nombre + "!");
    } 
}

let nombre = prompt("Bienvenido a la maratón de Marvel Studios, ¿cuál es tu nombre?");
let mail = prompt("¿Y tu mail?");

const usuario1 = new Usuario(nombre, mail);
usuario1.saludarUsuario();

class Pelicula{
    constructor(nombre, duracion, sala, horario){
        this.nombre = nombre;
        this.duracion = duracion;
        this.sala = sala;
        this.horario = horario;
    }
}

const pelicula1 = new Pelicula("Thor", "115 minutos", 2,"21.30hs");
const pelicula2 = new Pelicula("Iron Man", "126 minutos", 4,"22hs");
const pelicula3 = new Pelicula("Capitán América: El soldado de invierno", "136 minutos", 3, "19.40hs");
const pelicula4 = new Pelicula("El increíble Hulk", "112 minutos", 1, "23.15hs");

function verPelicula(){
    let entrada = prompt("¿Te quedas a ver alguna peli? \n 1. SI \ 2. NO");

    if(entrada == "1"){
        return true;
    } else if((entrada == "si") || (entrada == "SI") || (entrada == "Si")){
        return true;
    } else{
        return false;
    }
}

function elegirPelicula(){
    while(verPelicula()){
        let entrada = prompt("Estas son las funciones disponibles para hoy: \n \n 1) " + pelicula1.nombre
        + "\n 2) " + pelicula2.nombre 
        + "\n 3) " + pelicula3.nombre
        + "\n 4) " + pelicula4.nombre
        + "\n \n Elegí la que quieras ver");

        switch(entrada){
            case "1":
                alert("La función de " + pelicula1.nombre + " va a estar reproduciéndose a las " + pelicula1.horario + " en la sala " + pelicula1.sala);
                break;
            case "2":
                alert("La función de " + pelicula2.nombre + " va a estar reproduciéndose a las " + pelicula2.horario + " en la sala " + pelicula2.sala);
                break;
            case "3":
                alert("La función de " + pelicula3.nombre + " va a estar reproduciéndose a las " + pelicula3.horario + " en la sala " + pelicula3.sala);
                break;
            case "4":
                alert("La función de " + pelicula4.nombre + " va a estar reproduciéndose a las " + pelicula4.horario + " en la sala " + pelicula4.sala);
                break;
            default:
                alert("La función que elegiste no está disponible");
                break;
        }
        break;
    }
    alert("Gracias por la visita, esperamos que disfrutes las maratones de Marvel Studios tanto como nosotros!");
}

elegirPelicula();


