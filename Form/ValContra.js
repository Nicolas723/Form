comprobarcontraseñas, function comprobarClave(){
  contraseña1 = document.comprobarcontraseñas.contraseña1.value
  contraseña2 = document.comprobarcontraseñas.contraseña2.value

  if (contraseña1 == contraseña2)
     alert("Coinciden las claves")
  else
     alert("No coinciden las claves")
}

window.onload = function() {
    var myInput = document.getElementById('contraseña1');
    myInput.onpaste = function(e) {
      e.preventDefault();
      alert("No puedees hacer esto");
    }
    
    myInput.oncopy = function(e) {
      e.preventDefault();
      alert("No puedes hacer esto");
    }
}

window.onload = function() {
    var myInput = document.getElementById('contraseña2');
    myInput.onpaste = function(e) {
      e.preventDefault();
      alert("No puedees hacer esto");
    }
    
    myInput.oncopy = function(e) {
      e.preventDefault();
      alert("No puedees hacer esto");
    }
}