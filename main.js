import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"
import Hotel from "./hotel.js"

class Main{
    constructor(){
        this.hotel = "El amanecer"
        this.huesped = new Huesped();
    }

    getDescripcion(){
        this.huesped.getDescripcion(huesped1);
        this.huesped.getDescripcion(huesped2);
        this.huesped.getDescripcion(huesped3);
    }

    getFechaFormatoCorto(){
        this.reservacion.getFechaFormatoCorto();
    }


}
var huesped1 = new Huesped("Pedro Gonzáles", "Masculino");
var huesped2 = new Huesped("Hernesto Solis", "Masculino");
var huesped3 = new Huesped("Eulalia Ramírez", "Femenino");

var app = new Main();
app.getDescripcion();
app.getFechaFormatoCorto();