//console.log('Hola mundo');

// Tipos de datos en JS

// String: cadena de caracteres. 'a' 'Hola mundo'
// Boolean: true o false.
// Null: nulo. 
// Number: 12345678 "123" es distinto a 123 que es un Numbre
// Undefined: variable no definida
// Object: objeto. 

// Definiciones de Variables

// let
// var: No se utiliza mucho
// const

//var miPrimeraVariable ='lala'

let miPrimeraVariable = "Mi primera variable!"
//console.log(miPrimeraVariable)

// mutabilidad es cuando le cambiamos el valor a una variable
miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable);

// boolean
let miBoolean = true;
let miOtroBool = false;

// numeros
let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

//console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

// undefined

let undef 
//console.log(undef);

// null
let nulo = null
//console.log('nulo', nulo);

// OBJETOS
// los objetos tienen propiedades
// objeto vacio
const miPrimerObjeto = {}

// objeto agrupaciones de datos que hacen sentido entre si
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
};
//console.log(miObjeto.unString);

// ARREGLOS
// arreglo vacio
const arrVacio = [];

//array o arreglo 
const arr = [1,2, 'Hola', 'Hola Mundo', miObjeto];

//console.log(arrVacio, arr);

// push es agregar un elemento a nuestro arreglo
arr.push(5)
//console.log(arr);

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)
//console.log(arrVacio);

// OPERACIONES

/* const suma = 1 + 2;
const restar = 1 - 2;
const multiplicar = 2 * 3;
const dividir = 9 / 3; */
//console.log(suma,restar,multiplicar,dividir);

/* const modulo = 10 % 3 */
//console.log(modulo);

let num = 5;
//const vs let, const no nos deja cambiar el valor de la variable
/* num++
num++
num++
num++
num++ */
//num--


//operador de asignacion

// incrementar el numero o disminuir
num += 5
num -= 5
num *= 5
num /= 2
//console.log(num);

// OPERADORES DE COMPARACION
// operador comparacion o igual extricto
const resultado1 = 5 === 6
// igual no extricta, strings pueden ser iguales al numero si el valor es el mismo
const resultado2 = 5 == '5' // comparamos 5 con un string que tiene un 5, true

const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 4
const resultado7 = 5 <= 5
const resultado8 = 5 <= 6

//DESIGUALDAD 
const resultado9 = 5 !== 6
const resultado10 = 5 != '5'
//console.log(resultado9, resultado10);

//OPERADORES LOGICOS or ||, and &&, not !, or y and hacen SHORT CIRCUIT EVALUATION, evaluan hasta que se encuentre con el primer valor que corte la operacion 

const resultadoOr = false || true // Busca el primer true
//console.log(resultadoOr);

const resultadoAnd = true && false // Busca el primer false
//console.log(resultadoAnd);

const resultadoNot = !true // da vuelta el resultado
//console.log(resultadoNot)

//CONTROL DE FLUJO IF

/* const edad = 5
if (edad > 5 && edad < 18) {
    console.log('El niño puede jugar')
} else {
    console.log('El niño NO puede jugar')
} */

//Control de flujo WHILE
/* let x = 0
while (x < 5) {
    console.log(x);
    x++
} */
//console.log('Terminado el loop')

//CONTROL DE FLUJO SWITCH
/* let y =3;
switch (y) {
    case 1:
        console.log('Yo soy el caso 1');
        break;
    case 2: 
        console.log('Chanchito feliz');
        break;
    case 3: 
        console.log('Chancho triste');
        break;
    default: 
        console.log('No hay chanchitos');
        break;
} */

//CONTROL DE FLUJO FOR
/* for (let i = 0; i < 10; i++) {
    console.log(i)
} */

// lenght nos permite obtener el largo de un arreglo
/* const numeros = [1, 2, 'hola', 4, 5]

for (let i = 0; i < numeros.length; i++) {
    //console.log(i)
    console.log(numeros[i])
} */

//FUNCIONES
/* function iterar(arg1) { // (argumento)
    for (let i = 0; i < arg1.length; i++) {
      //console.log(i)
      console.log(arg1[i])
    }
}
const numeros = [1, 2, 'hola', 4, 5]
const nombres = ['Pedro', 'Juan', 'Felipe', 'Chanchito Feliz', 'Chanchito Triste']

iterar (numeros); //(parametro)
iterar (nombres); //(parametro) */

// OTRAS FUNCIONES

/* function suma (a, b) {
    return a + b;
}
const resultadoSuma1 = suma (1, 2)
const resultadoSuma2 = suma (5, 6)
const resultadoSuma3 = suma (resultadoSuma1, resultadoSuma2)
console.log('resultado', resultadoSuma3); */

//CALLBACK
function sumar (a, b, cb) {
    const r = a + b
    cb(r)
}
function callBack (result) {
    console.log("resultado: ", result)
}
//sumar(2, 3, callBack);

//FAT ARROW FUNCTION no usan palabra function, si tiene solo una sola linea no es necesario colorcar el return

const miFatArrowFuction = (a, b) => a + b;
const otraFaf = (a, b) => {
    return a + b
}
const r = otraFaf(1 , 2);
//console.log(r)

//FUNCION ANONIMA se usa cuando no vamos a ejecutar esta logica nuevamente
sumar(2 , 3 ,function (r) {
    console.log("Soy una funcion anonima y mi resultado es: ", r)
})



