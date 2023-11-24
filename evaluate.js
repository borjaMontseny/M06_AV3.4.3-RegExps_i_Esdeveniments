function comprobarRegExp(regex, texto, checkEx) {
  if (regex.test(texto)) {
    checkEx.style.display = 'inline';
  } else {
    checkEx.style.display = 'none';
  }
}

window.onload = function() {
    var regExpData = /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/; // DD-MM-AAAA
    var regExpData2 = /^([0-2][0-9]|(3)[0-1])(-|\/)(((0)[0-9])|((1)[0-2]))(-|\/)\d{4}$/; // DD-/MM-/AAAA
    var regeExpTelefon = /^(?:\d{9}|\d{3} \d{3} \d{3}|\d{2} \d{3} \d{2} \d{2})$/;  // 977751487, 977 751 487, 97 712 34 56
    var regeExpTelefon2 = /^(\+\d{3} ?)?(?:\d{9}|\d{3} \d{3} \d{3}|\d{2} \d{3} \d{2} \d{2})$/;
    var regexpContrassenya = /^[0-9a-zàáèéíïòóúüçñ]{9,}$/i;

    var inputEx1 = document.getElementById("inputEx1");
    var checkEx1 = document.getElementById("checkEx1");

    var inputEx2 = document.getElementById("inputEx2");
    var checkEx2 = document.getElementById("checkEx2");

    var inputEx3 = document.getElementById("inputEx3");
    var checkEx3 = document.getElementById("checkEx3");

    var inputEx4 = document.getElementById("inputEx4");
    var checkEx4 = document.getElementById("checkEx4");

    var inputEx5 = document.getElementById("inputEx5");
    var checkEx5 = document.getElementById("checkEx5");

    inputEx1.addEventListener("input", function () {
      comprobarRegExp(regExpData, inputEx1.value, checkEx1);
    });

    inputEx2.addEventListener("input", function () {
      comprobarRegExp(regExpData2, inputEx2.value, checkEx2);
    });

    inputEx3.addEventListener("input", function () {
      comprobarRegExp(regeExpTelefon, inputEx3.value, checkEx3);
    });

    inputEx4.addEventListener("input", function () {
      comprobarRegExp(regeExpTelefon2, inputEx4.value, checkEx4);
    });

    inputEx5.addEventListener("input", function () {
      comprobarRegExp(regexpContrassenya, inputEx5.value, checkEx5);
    });
}