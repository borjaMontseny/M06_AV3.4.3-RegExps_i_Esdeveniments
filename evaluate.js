var regExpData = /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/; // DD-MM-AAAA
var regExp

var inputEx1 = document.getElementById("inputEx1");

// Función para obtener y manejar el valor actualizado
function obtenerValorActualizado() {
  var valueInsideInput = inputEx1.value;
  console.log(valueInsideInput); // O haz algo con el valor actualizado
}

// Escuchar cambios en el campo de entrada
inputEx1.addEventListener("input", obtenerValorActualizado);

function comprovarRegExp(){

}