console.log('***** Hackathon 10 *****');
console.log(`1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y
 los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”`);
 
 let nombre="sebastian";
 let apellido="yabiku";
 let edad=33; 

 const datoPersona=((nombre,apellido,edad)=>{
 return `Hola mi nombre es ${nombre} ${apellido}  y mi edad ${edad}`;
 })
 console.log(datoPersona(nombre,apellido,edad));

 console.log('2. Cree una función que tome números y devuelva la suma de sus cubos.');
 function sumaCubos(n1,n2,n3){
     resultado=Math.pow(n1,3)+Math.pow(n2,3)+Math.pow(n3,3);
     return resultado;
 }
console.log(sumaCubos(2,3,4));
console.log('3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js');
function tipoDato(dato){
    let tipo = typeof(dato);
    console.log(`El dato ingresado: ${dato} es de tipo : ${tipo}`);
}
tipoDato(3);

console.log('4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)');

function sumaElementos(...numeros){
    let suma=0;        
        numeros.forEach(n =>{
        
            suma = suma + n;
            
          });
    return console.log(`la suma de los numeros es: ${suma}`);
    
}
sumaElementos(2,3,4,5,6);

console.log('5. Crear una función que reciba un array de valores y filtre los valores que no son string');

const numerosyletras=[1,'guitarra',2,4,'avl']
function funcionArray(miArray){
    const myfilter = miArray.filter((a)=>{

        return   typeof(a) === 'string';    
    })
       
    return myfilter;
}
console.log(funcionArray(numerosyletras));

console.log('6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.');
const edades=[10,20,300,24,6,-10];
function matrizNumero(edads){
let minimo=edades[0];
let maximo=edades[0];
    edads.forEach((edad)=>{
     if(minimo>edad){
         minimo=edad
     }
     if(maximo<edad){
         maximo=edad;
     }
     

    })
    return console.log(`Numero minimo: ${minimo}
Numero maximo: ${maximo}`);
  
}
matrizNumero(edades);



console.log('7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.');
const matriz10=[0,1,2,3,4,5,6,7,8,9];
function numeroTelefono(numeros){
    let numeroTelefonico=0;
    let aleatorio=[];
  matriz10.forEach((matris,indice) =>{
   
  })
  return console.log(numeroTelefonico);

}
numeroTelefono(matriz10);
















// console.log('8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.');
// console.log('9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.');
// console.log('10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.');
// console.log('11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.');
// console.log('12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.');
// console.log('13. Escriba una función que convierta un objeto en una matriz de claves y valores.');
// console.log('14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.');
// console.log('15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada');
// console.log('16. Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.');
// console.log('17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.');
// console.log('18. Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.');
// console.log('19. Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.');
// console.log('20. Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.');
// console.log('21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".');
// console.log('22. Cree una función que capitalice la última letra de cada palabra.');