class persona{
    private nacimiento: number;
    private nombre: string;

    constructor(anioNacimiento: number, nombre: string){
        this.nacimiento = anioNacimiento
        this.nombre=nombre;
    };
    
public cualEsTuNombre(): string{
    return "mi nombre es "+ this.nombre.split(" ")
};

public CualEsTuEdad(): string{
    return "MI EDAD ES "
};
public CualEsTuGeneracion(){
    if (this.nacimiento<1975){
        return "soy un baby boomer";
    }
    if (this.nacimiento >=1975 && this.nacimiento <1999){
        return "soy un milenial"
    }
    if (this.nacimiento >=1999 && this.nacimiento <2010){
        return "soy un centenial"
    }
    if (this.nacimiento >=2010){
        return "soy un generacion Z"
    }  
};
public QueAñoNaciste() {
    const edad:number= 2022-(this.nacimiento)
    return "mi edad es " +edad
};
};
//termina la defi de la clase persona
let fede= new persona(2001, "origin");
console.log(fede.cualEsTuNombre());
console.log(fede.CualEsTuGeneracion());
console.log(fede.QueAñoNaciste());
let nombre:string="Nahuel";
const nacimiento=2001;
console.log("hola "+nombre+" desde typescript");
//que loco esto che, me gusta




