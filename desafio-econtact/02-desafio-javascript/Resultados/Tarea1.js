
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];
const numerosEnteros = [];

let validador = false;

function quitarParteDecimal(arregloNumerosReales = []) {

for (const i in arregloNumerosReales) {
   numerosEnteros.push(Math.trunc(arregloNumerosReales[i]));
} 

return numerosEnteros;

}

console.log(`El arreglo con numeros enteros: ${quitarParteDecimal(numerosReales)}`);
   


