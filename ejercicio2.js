//* ====== EJERCICIO 2 ======

const alumnosRegulares = ["Pablo", "Jorge", "Laura", "Francisco", "Carla"];
const alumnosEgresados = [];

//* Contamos con 2 (dos) arreglos, un listado con alumnos regulares y otro listado con alumnos egresados.

//* CONSIGNA: Crear una función que reciba 3 (tres) parámetros, un arreglo con el listado de alumnos regulares,
//* otro arreglo con el listado de alumnos egresados, y un tercer parámetro indicando el nombre del alumno que desea
//* pasar de "regular" a "egresado". La función debe devolver el listado de alumnos egresados.
//* Nota: El primero que egresa debe ser el primero de la lista "alumnosEgresados"
//* En caso de no contar con mas alumnos regulares devolver un objeto con el siguiente formato:
//* {
//*   ok: false,
//*   msg: 'Ya no existen mas alumnos regulares'
//* }

//* En caso de que el alumno pasado como argumento no se encuentre, devolver false.

function traspasarAlumnos(listadoRegulares, listadoEgresados, alumno) {
  if (listadoRegulares.length === 0) {
    return {
      ok: false,
      msg: "Ya no existen mas alumnos regulares",
    };
  }

  if (!alumnosRegulares.includes(alumno)) return false;

  listadoEgresados.push(alumno);

  const index = listadoRegulares.indexOf(alumno);

  listadoRegulares.splice(index, 1);

  return listadoEgresados;
}

console.log(traspasarAlumnos(alumnosRegulares, alumnosEgresados, "Pablo"));
console.log(traspasarAlumnos(alumnosRegulares, alumnosEgresados, "Jorge"));
console.log(traspasarAlumnos(alumnosRegulares, alumnosEgresados, "Carla"));
console.log(traspasarAlumnos(alumnosRegulares, alumnosEgresados, "Francisco"));
console.log(traspasarAlumnos(alumnosRegulares, alumnosEgresados, "Laura"));
console.log(traspasarAlumnos(alumnosRegulares, alumnosEgresados, "PEPE"));
