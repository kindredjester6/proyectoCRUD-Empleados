// para probar por mientras luego se lee los users del xml
var nombre = 'jimin';
var pass = '123456';

/*
la cantidad de intentos se consigue de la bitacora de eventos
con el tipo de evento log in
*/
var tries = 0;

function validarCredenciales() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  let isGood = true;
  let empty = '';
  if (username === empty && password === empty) {
    alert('El campo de usuario y contraseña no puede estar vacíos');
    isGood = false;
  } else {
    if (!password === pass) {
      alert('Contraseña incorrecta');
      tries += 1;
    }
    if (!password === pass) {
      alert('Contraseña incorrecta');
      tries += 1;
    }
    if (tries === 5) {
      document.getElementById('btnLog').disabled = true;
      setTimeout(
        alert(
          'Demasiados intentos de login, intente de nuevo dentro de 10 minutos',
        ),
        600000,
      );
    }
  }
  return isGood;
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío del formulario
  if (validarCredenciales()) {
    console.log('yes');
  }
});

// https://www.youtube.com/watch?v=hlwlM4a5rxg
// https://www.w3schools.com/js/js_timing.asp
