alert ("Para continuar al simulador interactivo haga click en aceptar")
let nombre = prompt("Ingrese su nombre: ").toLowerCase();

function saludoGeneral() {
      let saludo;
  
      if (nombre == "denise") {
          saludo = "Bienvenida, "
        } else {
          saludo = "Bienvenido/a, "
      }
      
      nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
      alert (saludo + nombre + "!!!")
      console.log (nombre + " Debe ingresar que cantidad de notas quiere promediar")
  
  } 
  saludoGeneral ();

let cantidadNotas = parseInt(prompt("Haremos un promedio sobre la cantidad de notas que quieras. \n¿Cuántas notas deseas ingresar?"));
console.log(nombre + " debe ingresar " + cantidadNotas + " notas para hacer el promedio " );

if ((!cantidadNotas) || cantidadNotas <= 0) {
  alert("Por favor, actualiza la pagina e ingresa un valor valido");
} else {

  function calcularPromedio(cantidadNotas) {
    let sumaNotas = 0;

    for (let i = 1; i <= cantidadNotas; i++) {
      let nota = parseFloat(prompt("Ingresa la nota " + i + ":"));
      console.log (("la nota #" + i) + " es " + nota);
      
      if (!nota) {
        alert("Por favor, actualiza la pagina e ingresa un valor valido.");
        return;
      }
      
      sumaNotas += nota;
    }

    let promedio = sumaNotas / cantidadNotas;
    alert("El promedio de las " + cantidadNotas + " notas ingresadas es: " + promedio.toFixed(1));
    console.log ("Promedio = " + promedio);
  }
  calcularPromedio(cantidadNotas);
}

alert ("Gracias!! hasta la proxima entrega")