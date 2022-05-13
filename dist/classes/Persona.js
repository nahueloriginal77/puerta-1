"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    cualEsTuNombre() {
        return "mi nombre es " + this.nombre.split(" ");
    }
    ;
    CualEsTuEdad() {
        return "MI EDAD ES ";
    }
    ;
    CualEsTuGeneracion() {
        if (this.nacimiento < 1975) {
            return "soy un baby boomer";
        }
        if (this.nacimiento >= 1975 && this.nacimiento < 1999) {
            return "soy un milenial";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "soy un centenial";
        }
        if (this.nacimiento >= 2010) {
            return "soy un generacion Z";
        }
    }
    ;
    QueAñoNaciste() {
        const edad = 2022 - (this.nacimiento);
        return "mi edad es " + edad;
    }
    ;
}
exports.Persona = Persona;
