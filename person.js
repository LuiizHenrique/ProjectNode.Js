class Person {
    constructor(name)  {
       this.name = name;             
    }          
    sayMyName( ){
       return `My name is ${this.name}!`
    }
}
//Modo de exportar
module.exports = {
   Person,
};