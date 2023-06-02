//____________ENTREGA 1
// alert ("Para continuar al simulador interactivo haga click en aceptar")
// let nombre = prompt("Ingrese su nombre: ").toLowerCase();

// function saludoGeneral() {
//       let saludo;
  
//       if (nombre == "denise") {
//           saludo = "Bienvenida, "
//         } else {
//           saludo = "Bienvenido/a, "
//       }
      
//       nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
//       alert (saludo + nombre + "!!!")
//       console.log (nombre + " Debe ingresar que cantidad de notas quiere promediar")
  
//   } 
//   saludoGeneral ();

// let cantidadNotas = parseInt(prompt("Haremos un promedio sobre la cantidad de notas que quieras. \n¿Cuántas notas deseas ingresar?"));
// console.log(nombre + " debe ingresar " + cantidadNotas + " notas para hacer el promedio " );

// if ((!cantidadNotas) || cantidadNotas <= 0) {
//   alert("Por favor, actualiza la pagina e ingresa un valor valido");
// } else {

//   function calcularPromedio(cantidadNotas) {
//     let sumaNotas = 0;

//     for (let i = 1; i <= cantidadNotas; i++) {
//       let nota = parseFloat(prompt("Ingresa la nota " + i + ":"));
//       console.log (("la nota #" + i) + " es " + nota);
      
//       if (!nota) {
//         alert("Por favor, actualiza la pagina e ingresa un valor valido.");
//         return;
//       }
      
//       sumaNotas += nota;
//     }

//     let promedio = sumaNotas / cantidadNotas;
//     alert("El promedio de las " + cantidadNotas + " notas ingresadas es: " + promedio.toFixed(2));
//     console.log ("Promedio = " + promedio);
//   }
//   calcularPromedio(cantidadNotas);
// }

// alert ("Gracias!! hasta la proxima entrega")




//____________________ENTREGA 2 sin class

// alert("Hola! el simulador funciona cargando los datos de 3 alumnos")

// const alumnos = [];
// const notas = [];
// const asistencia = [];

// //pido nombres nota y asistencia y la cargo a los arrays:
// for (let i=1; i<4; i++) { 
//   let nombre = prompt("Ingrese el nombre del alumno/a " + i + " : ");

//   let nota1 = parseFloat(prompt("Ingrese la primera calificacion del alumno " + i + " : "));
//   let nota2 = parseFloat(prompt("Ingrese la segunda calificacion del alumno " + i + " : "));
//   let nota3 = parseFloat(prompt("Ingrese la tercera calificacion del alumno " + i + " : "));
 
//   let ausencias = parseInt(prompt("Ingrese la cantidad de clases que el alumno/a " + i + "estuvo ausente: "));

//   alumnos.push(nombre);
//   notas.push([nota1, nota2, nota3]);
//   asistencia.push(ausencias)
// }


// //obtener estadoPromedio y estadoAsistencia de cada uno
// for (let i = 0; i < alumnos.length; i++) {
//   const promedio = calcularPromedio(notas[i]);
//   const estadoPromedio = detEstadoPromedio(promedio);
//   const estadoAsistencia = detEstadoAsistencia(asistencia[i]);
//   const estado = promedioAsistencia (estadoPromedio, estadoAsistencia);

//   if (estado === "BECADO EN CODERHOUSE") {
//     alert("¡Felicitaciones " + alumnos[i] + ", serás becado!, tu promedio y tu asistencia son perfectas!!!");
//   } else if (estado === "Felicitado") {
//     if (estadoPromedio === "PROMOCIONADO") {
//       alert("Felicidades " + (alumnos[i]) + ", tu promedio es de: " + promedio.toFixed(0) + ", promocionaste la cursada")
//     } else {
//       alert("Hola " + (alumnos[i]) + ", tu promedio es: " + promedio.toFixed(0) + ", aprobaste la cursada. Recorda inscribirte para rendir el final")
//     }
//   } else if (estado === "Castigado") {
//     alert("Lo sentimos " + alumnos[i] + ", serás castigado duramente");
//   }
// }



// // calcula el promedio:
// function calcularPromedio(notas) {
//   const suma = notas.reduce((total, nota) => total + nota, 0 );
//   return suma / notas.length;
// }

// //determina estadoPromedio:
// function detEstadoPromedio(promedio) {
//   if (promedio === 10) {
//     return "PROMOCIONADO";
//   } else if (promedio >= 4) {
//     return "Aprobado";
//   } else {
//     return "Desaprobado";
//   }
// }

// //determina estadoAsistencia
// function detEstadoAsistencia(ausencias) {
//   if (ausencias === 0) {
//     return "ASISTENCIA PERFECTA";
//   } else if (ausencias <= 4) {
//   return "Regular";
//   } else {
//   return "Libre";
//   }
// }

// //// determina el estadoAlumno (depende de estadoPromedio y estadoAsistencia):
// function promedioAsistencia(estadoPromedio, estadoAsistencia) {
//   if (estadoPromedio === "PROMOCIONADO" && estadoAsistencia === "ASISTENCIA PERFECTA") {
//     return "BECADO EN CODERHOUSE"
//   } else if (
//     estadoPromedio === "PROMOCIONADO" ||
//     estadoPromedio === "Aprobado" && estadoAsistencia === "Regular" ||
//     estadoPromedio === "Aprobado" && estadoAsistencia === "ASISTENCIA PERFECTA" ) {
//       return "Felicitado";
//     } else {
//       return "Castigado";
//     }
// }

class Alumno {
  constructor(nombre, notas, ausencias) {
    this.nombre = nombre;
    this.notas = notas;
    this.ausencias = ausencias;
  }

  calcularPromedio() {
    const suma = this.notas.reduce((total, nota) => total + nota, 0);
    return suma / this.notas.length;
  }

  detEstadoPromedio() {
    const promedio = this.calcularPromedio();
    if (promedio === 10) {
      return "PROMOCIONADO";
    } else if (promedio >= 4) {
      return "Aprobado";
    } else {
      return "Desaprobado";
    }
  }

  detEstadoAsistencia() {
    if (this.ausencias === 0) {
      return "ASISTENCIA PERFECTA";
    } else if (this.ausencias <= 4) {
      return "Regular";
    } else {
      return "Libre";
    }
  }

  promedioAsistencia() {
    const estadoPromedio = this.detEstadoPromedio();
    const estadoAsistencia = this.detEstadoAsistencia();

    if (estadoPromedio === "PROMOCIONADO" && estadoAsistencia === "ASISTENCIA PERFECTA") {
      return "BECADO EN CODERHOUSE";
    } else if (
      estadoPromedio === "PROMOCIONADO" ||
      (estadoPromedio === "Aprobado" && estadoAsistencia === "Regular") ||
      (estadoPromedio === "Aprobado" && estadoAsistencia === "ASISTENCIA PERFECTA")
    ) {
      return "Felicitado";
    } else {
      return "Castigado";
    }
  }
}

alert("Hola! El simulador funciona cargando los datos de 3 alumnos");

const alumnos = [];

for (let i = 1; i < 4; i++) {
  let nombre = prompt("Ingrese el nombre del alumno/a " + i + " : ");

  let nota1 = parseFloat(prompt("Ingrese la primera calificacion del alumno " + i + " : "));
  let nota2 = parseFloat(prompt("Ingrese la segunda calificacion del alumno " + i + " : "));
  let nota3 = parseFloat(prompt("Ingrese la tercera calificacion del alumno " + i + " : "));

  let ausencias = parseInt(prompt("Ingrese la cantidad de clases que el alumno/a " + i + " estuvo ausente: "));

  const alumno = new Alumno(nombre, [nota1, nota2, nota3], ausencias);
  alumnos.push(alumno);
}

for (let i = 0; i < alumnos.length; i++) {
  const alumno = alumnos[i];
  const estado = alumno.promedioAsistencia();

  if (estado === "BECADO EN CODERHOUSE") {
    alert("¡Felicitaciones " + alumno.nombre + ", serás becado! ¡Tu promedio y tu asistencia son perfectas!");
  } else if (estado === "Felicitado") {
    if (alumno.detEstadoPromedio() === "PROMOCIONADO") {
      alert("Felicidades " + alumno.nombre + ", tu promedio es de: " + alumno.calcularPromedio().toFixed(0) + ", promocionaste la cursada.");
    } else {
      alert("Hola " + alumno.nombre + ", tu promedio es: " + alumno.calcularPromedio().toFixed(0) + ", aprobaste la cursada. Recuerda inscribirte para rendir el final.");
    }
  } else if (estado === "Castigado") {
    alert("Lo sentimos " + alumno.nombre + ", serás castigada/o.");
  }
}