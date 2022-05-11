var persona = /** @class */ (function () {
    function persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    persona.prototype.cualEsTuNombre = function () {
        return "mi nombre es " + this.nombre.split(" ");
    };
    persona.prototype.CualEsTuEdad = function () {
        return "MI EDAD ES ";
    };
    persona.prototype.CualEsTuGeneracion = function () {
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
    };
    persona.prototype.QueAñoNaciste = function () {
        var edad = 2022 - (this.nacimiento);
        return "mi edad es " + edad;
    };
    return persona;
}());
;
//termina la defi de la clase persona
var fede = new persona(2001, "origin");
console.log(fede.cualEsTuNombre());
console.log(fede.CualEsTuGeneracion());
console.log(fede.QueAñoNaciste());
var nombre = "Nahuel";
var nacimiento = 2001;
console.log("hola " + nombre + " desde typescript");
//que loco esto che, me gusta
