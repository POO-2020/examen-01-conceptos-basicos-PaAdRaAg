import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"

export default class Hotel{
    /**
     * 
     * @param {string} nombre 
     */
    constructor(nombre){
        this.nombre = nombre;
        this.reservaciones = new Reservacion();
    }

    getNumHuespedes(){
        return(`${this.reservaciones.forEach()}`)
    }

    ptint(){
        return (`${this.reservaciones.forEach()}`)
    }
}