"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./classes/Persona");
let nahuel = new Persona_1.Persona(2001, "nahuel");
console.log(nahuel.cualEsTuNombre());
console.log(nahuel.CualEsTuEdad());
console.log(nahuel.CualEsTuGeneracion());
