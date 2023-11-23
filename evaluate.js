var regExpData = /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/; // DD-MM-AAAA
var regExpData2 = /^([0-2][0-9]|(3)[0-1])(-|\/)(((0)[0-9])|((1)[0-2]))(-|\/)\d{4}$/; // DD-/MM-/AAAA
var regeExpTelefon = /^\d{9}|\d{3} \d{3} \d{3}|\d{2} \d{3} \d{2} \d{2}$/;  // 977751487, 977 751 487, 97 712 34 56
var regeExpTelefon2 = /^(\+\d{3} ?)?(\d{9}|\d{3} \d{3} \d{3}|\d{2} \d{3} \d{2} \d{2})$/;
var regexpContrassenya = /^[0-9a-zàáèéíïòóúüçñ]{9,}$/i;

var inputEx1 = document.getElementById("inputEx1");
var checkEx1 = document.getElementById("checkEx1");

var inputEx2 = document.getElementById("inputEx2");
var checkEx1 = document.getElementById("checkEx2");

var inputEx3 = document.getElementById("inputEx3");
var checkEx1 = document.getElementById("checkEx3");

var inputEx4 = document.getElementById("inputEx4");
var checkEx1 = document.getElementById("checkEx4");

var inputEx5 = document.getElementById("inputEx5");
var checkEx1 = document.getElementById("checkEx5");

inputEx1.addEventListener("input", comprovarRegExp(regExpData, inputEx1.value, checkEx1));

function comprobarRegExp(regexpString, texto, checkEx) {
  // Se crea una expresión regular a partir del string proporcionado
  var regex = new RegExp(regexpString);

  // Se verifica si la expresión regular coincide con el texto
  while (regex.test(texto)) {
    checkEx.style.display;
  }
}