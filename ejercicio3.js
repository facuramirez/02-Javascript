//* ====== EJERCICIO 3 ======

const numeros = [19, 12, 6, -31, 45, 50, -27, 1, -100, 9, 99, 11];

//* CONSIGNA: Contamos con un listado de números y se solicita crear una función que reciba como parámetro un arreglo de numeros
//* y devuelva el valor mínimo del arreglo.
//* Si el arreglo cuenta con algun valor que no sea un número, devolver false, de lo contrario devolver el valor mínimo.
//* NOTA: No se puede hacer uso de la clase Math y su método min().

function obtenerMinimo(listadoNumeros) {
  const tipoNumber = listadoNumeros.find(
    (numero) => typeof numero !== "number"
  );

  if (tipoNumber) {
    return false;
  }

  let min = 0;

  listadoNumeros.forEach((numero) => {
    if (numero < min) {
      min = numero;
    }
  });

  return min;
}

console.log(obtenerMinimo(numeros));
