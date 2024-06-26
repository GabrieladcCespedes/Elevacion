
/**Gabriela Céspedes */
/** Practica leer JavaScript de la misma manera como el intérprete lo lee. */
//Ejemplo
// GIVEN
console.log(example);
var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//ES6
console.log(example);
let example = "I'm the example!";    
//AFTER HOISTING BY THE INTERPRETER
/**
    console.log(example); //ReferenceError, la variable 'exemple' no ha sido inicialida o declarada
    let example = "I'm the example!";
 */


//Ejercicio 1
console.log(hello);                                   
var hello = 'world'; 
//AFTER HOISTING BY THE INTERPRETER 
/**
    var hello;
    console.log(hello); // undefined, variable indefinida
    hello = "I'm the example";
 */                             


//Ejercicio 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
/**
    var needle; // se eleva
    var needle = 'haystack';
    function test(){ // se eleva la funcion
        var needle;// se eleva al principio de la funcion
        var needle = 'magnet';
        console.log(needle); // imprime "magnet"
    } 
    test(); // imprime 'magnet'
*/ 


//Ejercicio 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER
/**
    var brendan; // se eleva
    var brendan = 'super cool';
    function print(){ 
        brendan = 'only okay';  
        console.log(brendan); //only okay
    }
    console.log(brendan); // se imprime 'super cool'
*/


//Ejercicio 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
/**
    var food; // se eleva 
    var food = 'chicken';
    console.log(food); // se imprime 'chicken'
    function eat(){ // se eleva la funcion 
        var food; // se eleva al principio de la funcion 
        food = 'half-chicken'; 
        console.log(food); 
        food = 'gone';
    }
    eat(); // se imprime 'half-chicken'
 */


//Ejercicio 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER HOISTING BY THE INTERPRETER
/**
    var mean; // se eleva 
    mean(); // TypeError: mean is not a funcion, la variable es llamada pero aun no esta asignada a una funcion
    console.log(food); // ReferenceError: food is not defined
    mean = function() {
        var food = "chicken"; // se eleva
        food = "chicken"; 
        console.log(food); // imprime "chicken"
        food = "fish";
        console.log(food); // imprime "fish"
    }
    console.log(food); // ReferenceError: food is not defined, no esta definido
 */


//Ejercicio 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
/** 
    var genre; // se eleva
    function rewind() { // se eleva la funcion
        var genre; se eleva al principio de la funcion 
        genre = "rock";
        console.log(genre); // imprime "rock"
        genre = "r&b", 
        console.log(genre); // imprime "r&b"
    }
    console.log(genre); // undefined, no esta difinido aun 
    genre = "disco"
    rewind();  // imprime "rock" y "r&b"
    console.log(genre); // imprime "disco" 
*/



//Ejercicio 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
/**
 * var dojo; //se eleva
 * function learn(){
 *  var dojo; // se eleva al principio de la funcion 
 *  dojo = "seattle"
 *  console.log(dojo); // imprime "seattle"
 *  dojo = "burbank"
 *  console.log(dojo); // imprime "burbank"
 * }
 * var dojo = "san jose";
 * console.log(dojo); // imprime "san jose"
 * lear(); // imprime "seattle" y "burbank"
 * console.log(dojo); // imprime "san jose"
 */


//Ejercicio 8 Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//AFTER HOISTING BY THE INTERPRETER
/**
    function makeDojo(name, students){ // se eleva la funcion
        const dojo = {}; // se declara 
        dojo.name = name; 
        dojo.students = students;
        if(dojo.students > 50){ // si el valor de dojo.students es mayor a 50
            dojo.hiring = true; // se asigna a dojo.hiring el valor true 
        }
        else if(dojo.students <= 0){ // sino si, dojo.students es menor o igual a 0
            dojo = "closed for now"; // se intenta asignar la cadena "closed for now", lo que dara un error ya que dojo es una const
        }
        return dojo;
    }
    console.log(makeDojo("Chicago", 65)); // retorna "Chicago, 65, true"
    console.log(makeDojo("Berkeley", 0)); // TypeError: Assignment to constant variable
 */
