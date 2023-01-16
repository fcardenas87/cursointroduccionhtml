//Pregunta 1
function largoDelNombre(nombre_colaborador = "") {

    let resultado = ""

    if (typeof nombre_colaborador === 'string') {

        if (nombre_colaborador.length < 5 ) {

            resultado = `Es un nombre corto. Su largo es de: ${nombre_colaborador.length}`;

        } else {

           if (nombre_colaborador.length >= 11 ) {

           
            resultado = `Es un nombre largo. Su largo es de: ${nombre_colaborador.length}`

            } else {

           
            resultado = "Es un nombre común. Su largo es de: "+ nombre_colaborador.length;

           }

        }

       

    } else {

       

        resultado = "El parámetro recibido es invalido";

    }

    return resultado;

  }

 

  console.log(`${largoDelNombre("Felipe")}`);


  //Pregunta 2

  const arreglo_1 = [1,2,3, 'Curico', 'Santiago', false, true];

 function contarTipoNumber(arreglo_1) {

     let contador = 0;

     for (const i in arreglo_1) {

         if (typeof arreglo_1[i] === 'number' ) {

             contador +=1;

          }

     }

 return contador;

 }    

  console.log('La cantidad de tipo number es: ' + contarTipoNumber(arreglo_1));

 //Pregunta 3

 const trabajador = {nombre: 'Felipe', edad: 35, altura: 1.73};

function datosPersona(trabajador) {

const {nombre, edad, altura} = trabajador;

console.log(`Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}"`)

return;

}

datosPersona(trabajador);

//pregunta 4

const arreglo_1 = [1,2,3,4,5,6,7,8,9,10];
 const largo = arreglo_1.length
 resultado = ""
 contador = 0
 function obtenerCantidadDePares(numero1, numero2) {
 if (numero2 > (largo-1)) {
        console.log("Numero 2 excede el largo del arreglo");
     
 } else {
     if (numero1 > numero2) {
         console.log("El rango a analizar es 0");
     } else {
         for (let i = numero1; i <= numero2; i++) {
             valor1 = (Math.trunc(arreglo_1[i]/2))*2;
           
             if (arreglo_1[i] === valor1) {
                 contador +=1;
             } 
             
         }
         console.log(`El total de numeros pares en el rango es: ${contador}`);
      }
     
 }
 }
 
 obtenerCantidadDePares(2,10)

 //Pregunta 5

 const objetoFijo = {
    empresa: "e-Contact",
    datos: {
      empleados: 100,
      direccion: {
        calle: "Calle Amunategui",
        numero: 212,
        piso: 19,
      },
      sectores: [
        "Contabilidad",
        "Finanzas",
        "Informática",
        "Atención al público",
      ],
      sedes: {
        Chile: { telefono: 56227566262, empleados: 35 },
        Peru: { telefono: 5116358614, empleados: 25 },
        EEUU: { telefono: 17864978777, empleados: 43 },
        Ecuador: { telefono: null, empleados: 19 },
        Colombia: { telefono: 3178952449, empleados: 28 },
      },
    },
  };
  
  const econtact = objetoFijo
  
  function obtenerCantidadDeSedes(econtact) {
  
  console.log(Object.keys(objetoFijo.datos.sedes));
  const cantidad = Object.keys(objetoFijo.datos.sedes)
  console.log(`La cantidad de sedes es: ${cantidad.length}`);
  
  }
  
  obtenerCantidadDeSedes(econtact)

  //pregunta 6

  const objetoFijo = {
    empresa: "E-Contact",
    datos: {
      empleados: 100,
      direccion: {
        calle: "Calle Córdoba",
        numero: 476,
        piso: 3,
      },
      sectores: [
        "Contabilidad",
        "Finanzas",
        "Informática",
        "Atención al público",
      ],
      sedes: {
        Chile: { telefono: 56227566262, empleados: 35 },
        Peru: { telefono: 5116358614, empleados: 25 },
        EEUU: { telefono: 17864978777, empleados: 43 },
        Ecuador: { telefono: null, empleados: 19 },
        Colombia: { telefono: 3178952449, empleados: 28 },
      },
    },
  };
  
  const sedes_paises = Object.keys(objetoFijo.datos.sedes);
  let pos = 0;
  fono = ""
  valido = 0
  
  function obtenerTelefonoPeru(pais) {
  for (const pos in sedes_paises) {

    if (sedes_paises[pos] === pais) {
        valido = 1
        } 
    }
  if (valido === 1) {
    fono = `El fono de ${pais} es ${objetoFijo.datos.sedes[pais].telefono}`;
  } else {
    fono = `El país ${pais} no tiene asignado un teléfono`
  }
  
  console.log(fono);
  return fono;
  }
  
  obtenerTelefonoPeru('holanda');

  //pregunta 7

const objetoFijo = {
    empresa: "E-Contact",
    datos: {
      empleados: 100,
      direccion: {
        calle: "Calle Córdoba",
        numero: 476,
        piso: 3,
      },
      sectores: [
        "Contabilidad",
        "Finanzas",
        "Informática",
        "Atención al público",
      ],
      sedes: {
        Chile: { telefono: 56227566262, empleados: 35 },
        Peru: { telefono: 5116358614, empleados: 25 },
        EEUU: { telefono: 17864978777, empleados: 43 },
        Ecuador: { telefono: null, empleados: 19 },
        Colombia: { telefono: 3178952449, empleados: 28 },
      },
    },
  };
  
  const sedes_paises = Object.keys(objetoFijo.datos.sedes);
  let pos = 0;
  fono = ""
  contador = 0
  pais = null
  
  function obtenerPaisesConTelefono(econtact) {
  
  
  for (const pos in econtact.datos.sedes) {
    
    if (typeof econtact.datos.sedes[pos].telefono !== 'object') {
        contador +=1;
        } 
    }
  
  console.log(`El total de paises con telefono asignado es: ${contador}`);
  return contador;
  }
  
  obtenerPaisesConTelefono(objetoFijo);

  //Pregunta 8
  let valor = 0

  function calculoMatematico(str1, str2, str3) {
  
  if (str1 !== "+" && str1 !== "-" && str1 !== "*" && str1 !== "/") {
      console.log("La operación matemática que intenta realizar es inexistente");
  } else {
      if ((str1 ==='/') && (str3 === 0)) {
          console.log("No se puede dividir por cero");
      } else {
          if ((typeof str2 !== 'number') || (typeof str3 !== 'number')) {
              console.log("Valor no permitido");
          } else {
              switch (str1) {
                  case "+":
                      valor = str2 + str3;
                      break;
                  case "-":
                      valor = str2 - str3;
                      break;
                  case "*":
                      valor = str2 * str3;
                      break;
                  case "/":
                      valor = str2 / str3;
                      break;   
              }
              console.log(`El resultado es: ${valor}`);  
          }
      }         
  }
  return valor;
  }
  
  calculoMatematico('?', 1, 15);

  //Pregunta 9
  arreglo = []

  function cargarArreglo(numero) {
  
  let i = 1
  
  if (numero > 0) {
      while (i <= (numero * 2)) {
          arreglo.push(numero);
          i +=1
      }
      console.log(arreglo);
      return arreglo; 
  } else {
      console.log("El número ingresado debe ser mayor a 0");
  }
  }
  
  cargarArreglo(3);

  //pregunta 10

  contador = 0

//Pregunta 11

function sumatoria(numeros = []){
    let resultado = 0;
    for (let index = 0; index < numeros.length; index++) {
      resultado+=numeros[index];
      
    }
    return resultado;
  }  

  console.log(`La sumatoria total es: ${sumatoria([1,3,10,100,0])}`);

  //Pregunta 12

  const objetoFijo = {
    empresa: "E-Contact",
    datos: {
      empleados: 100,
      direccion: {
        calle: "Calle Córdoba",
        numero: 476,
        piso: 3,
      },
      sectores: [
        "Contabilidad",
        "Finanzas",
        "Informática",
        "Atención al público",
      ],
      sedes: {
        Chile: { telefono: 56227566262, empleados: 35 },
        Peru: { telefono: 5116358614, empleados: 25 },
        EEUU: { telefono: 17864978777, empleados: 43 },
        Ecuador: { telefono: null, empleados: 19 },
        Colombia: { telefono: 3178952449, empleados: 28 },
      },
    },
  };
  
  let suma = 0;
  let validador = false;
  
  function verificarCantidadEmpleados(econtact = {}) {
  
  const totalEmpleados = econtact.datos.empleados;
  
  for (const i in econtact.datos.sedes) {
    suma = suma + econtact.datos.sedes[i].empleados;
  
    } 
  
  if ( totalEmpleados === suma) {
    validador = true
  } 
  return validador;
  }
  
  console.log(`¿Las cantidades son iguales? : ${verificarCantidadEmpleados(objetoFijo,100)}`);

  //pregunta 13

  function calcularCuadrados(arreglo = arregloFijo) {
    let resultado= [];
  for (let index = 0; index < arreglo.length; index++) {
    resultado.push(arreglo[index]**2)
    
  }
  return resultado
  }

  //Pregunta 14
  
  function validarArreglo(numeros = []) {
    let suma = 0;
    if(numeros.length >= 6){
      for (let index = 0; index < numeros.length; index++) {
        suma+= numeros[index]
        
      }
    }
    if(suma > 100){
      return true
    }
    return false
  }

//Pregunta 15

function validarNombre(nombres = [], nombre) {
    for (let i = 0; i < nombres.length; i++) {
      if (nombres[i].toLowerCase() === nombre.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  //Pregunta 16

  function devolverPosicion(numeros, numero) {

    for (const i in numeros) {
        if (numeros[i] === numero) {
           pos = pos + i + ',';
        } 
    } 
    
    if (pos === "") {
        pos = "No se encuentra"
    } 
    return pos;
    }
    
    console.log(`El numero se está en la posición: ${devolverPosicion([4,5,7,10,6,10],3)}`);

    //Pregunta 17

    const objetoFijo = {
        empresa: "E-Contact",
        datos: {
          empleados: 100,
          direccion: {
            calle: "Calle Córdoba",
            numero: 476,
            piso: 3,
          },
          sectores: [
            "Contabilidad",
            "Finanzas",
            "Informática",
            "Atención al público",
          ],
          sedes: {
            Chile: { telefono: 56227566262, empleados: 35 },
            Peru: { telefono: 5116358614, empleados: 25 },
            EEUU: { telefono: 17864978777, empleados: 43 },
            Ecuador: { telefono: null, empleados: 19 },
            Colombia: { telefono: 3178952449, empleados: 28 },
          },
        },
      };
      
      let encontrado = false;
      
      function verificarSector(econtact, sector) {
      
      for (const i in econtact.datos.sectores) {
        if (econtact.datos.sectores[i] === sector) {
           encontrado = true
        } 
      } 
      return encontrado;
      }
      
      console.log(`¿Sector encontrado?: ${verificarSector(objetoFijo,'Informática')}`);

      //Pregunta 18

      const objetoFijo = {
        empresa: "E-Contact",
        datos: {
          empleados: 100,
          direccion: {
            calle: "Calle Córdoba",
            numero: 476,
            piso: 3,
          },
          sectores: [
            "Contabilidad",
            "Finanzas",
            "Informática",
            "Atención al público",
          ],
          sedes: {
            Chile: { telefono: 56227566262, empleados: 35 },
            Peru: { telefono: 5116358614, empleados: 25 },
            EEUU: { telefono: 17864978777, empleados: 43 },
            Ecuador: { telefono: null, empleados: 19 },
            Colombia: { telefono: 3178952449, empleados: 28 },
          },
        },
      };
      
      
      let contador = 0;
      
      function verificarCantidadEmpleados(econtact, cantidad) {
      
      
      
      for (const i in econtact.datos.sedes) {
        if (econtact.datos.sedes[i].empleados < cantidad) {
           contador += 1
        } 
      } 
      return contador;
      }
      
      console.log(`La cantidad de sedes es : ${verificarCantidadEmpleados(objetoFijo,30)}`);

      //Pregunta 19

      const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador', segundo_nombre: 'Valenzuela' }

      let validador = false;
      
      function verificarClave(objeto, clave) {
      
      const claves = Object.keys(objeto);
      
      for (const i in claves) {
         if (claves[i] === clave) {
          validador = true
         } 
      } 
      
      return validador;
      }
      
      console.log(`La clave de evrificación es: ${verificarClave(alumno,'segundo_nombre')}`);

    //Pregunta 20


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




