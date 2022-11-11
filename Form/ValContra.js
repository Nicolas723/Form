comprobarcontraseñas, function comprobarClave(){
  contraseña1 = document.comprobarcontraseñas.contraseña1.value
  contraseña2 = document.comprobarcontraseñas.contraseña2.value

  if (contraseña1 == contraseña2)
     alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo")
  else
     alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo")
}

window.onload = function() {
    var myInput = document.getElementById('contraseña1');
    myInput.onpaste = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
    
    myInput.oncopy = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
}

window.onload = function() {
    var myInput = document.getElementById('contraseña2');
    myInput.onpaste = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
    
    myInput.oncopy = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
}