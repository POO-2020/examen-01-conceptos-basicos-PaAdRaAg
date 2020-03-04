import Huesped from "./huesped.js"

export default class Reservacion{
    /**
     * 
     * @param {number} numeroHabitacion Número que identifica a la habiltación
     * @param {Date} fechaLlegada Fecha de llegada de los huéspedes
     * @param {number} noches Número de noches reservadas
     * @param {Huesped} huespedes Personas que estarán hospedadas en esta habitación
     */
    constructor(numeroHabitacion, noches){ 
    this.numeroHabitacion = numeroHabitacion;
    this.fechaLlegada = new Date(año, mes -1, dia)
    this.noches = noches;
    this.huespedes = new Huesped();
    }

    getFechaFormatoCorto(){
        let date = this.fecha.getDate();
        let month = this.fecha.getMonth() + 1;
        let year = this.fecha.getFullYear();
        return(`${date}/${month}/${year}`);
    }

    addHuesped(){
        return(`${this.huespedes}`)

    }

    getNumHuespedes(){
        return(`${this.huespedes.forHeach()}`)

    }

    print(){
        return(`Habitación ${this.numeroHabitacion}, fecha de llegada ${this.fechaLlegada}, ${this.noches} noches reservadas, ${this.huespedes}`)

    }
}