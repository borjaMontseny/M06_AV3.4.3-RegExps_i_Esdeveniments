var regExpData = /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/; // DD-MM-AAAA
var regExpData2 = /^([0-2][0-9]|(3)[0-1])(-|\/)(((0)[0-9])|((1)[0-2]))(-|\/)\d{4}$/; // DD-/MM-/AAAA
var regeExpTelefon = /^\d{9}|\d{3} \d{3} \d{3}|\d{2} \d{3} \d{2} \d{2}$/;  // 977751487, 977 751 487, 97 712 34 56
var regeExpTelefon2 = /^(\+\d{3} ?)?(\d{9}|\d{3} \d{3} \d{3}|\d{2} \d{3} \d{2} \d{2})$/;

var inputEx1 = document.getElementById("inputEx1");
var inputEx2 = document.getElementById("inputEx2");
var inputEx3 = document.getElementById("inputEx3");
var inputEx4 = document.getElementById("inputEx4");
var inputEx5 = document.getElementById("inputEx5");

var regexpContrassenya = /^[0-9a-zàáèéíïòóúüçñ]{9,}$/i;

// Escuchar cambios en el campo de entrada
inputEx1.addEventListener("input", comprovarRegExp());


function comprobarRegExp(regexpString, texto) {
  // Se crea una expresión regular a partir del string proporcionado
  var regex = new RegExp(regexpString);

  // Se verifica si la expresión regular coincide con el texto
  return regex.test(texto);
}

function mostrarOKSign() {
  while (comprobarRegExp(regexpString, texto)) {

  }
}