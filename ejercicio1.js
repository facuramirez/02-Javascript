//* ====== EJERCICIO 1 ======

const numeros = [5, 12, 91, 25, 5, 63, 89, 25, 101, 47, 91, 63];

//* Contamos con un listado de números en los cuales puede haber o no repetidos.

//* CONSIGNA: Crear una función que reciba como parámetro un arreglo de números y devuelva
//* un arreglo con los números pero quitando los repetidos.
//* NOTA: No se puede usar el objeto Set.

function quitarRepetidos(listadoNumeros) {
  const nuevoArreglo = [];

  listadoNumeros.forEach((numero) => {
    const condicion = nuevoArreglo.includes(numero);
    if (!condicion) {
      nuevoArreglo.push(numero);
    }
  });

  return nuevoArreglo;
}

function quitarRepetidos2(listadoNumeros) {
  const nuevoArreglo = [];

  listadoNumeros.forEach((numero) => {
    !nuevoArreglo.includes(numero) && nuevoArreglo.push(numero);
  });

  return nuevoArreglo;
}

// console.log(quitarRepetidos(numeros));
console.log(quitarRepetidos2(numeros));
