// para probar por mientras luego se lee los users del xml
//var nombre = 'jimin';
//var pass = '123456';

/*
la cantidad de intentos se consigue de la bitacora de eventos
con el tipo de evento log in
*/
var tries = 0;

function fetchPostValidationEmployee() {
  const formData = new FormData(document.getElementById('form'));
  console.log('desde fetchpost' + document.getElementById('form'));
  const dataUser = Object.fromEntries(formData);
  console.log(dataUser);
  fetch('http://localhost:9876/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataUser),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.returnValue === 0) {
        location.href = 'empleados.html';
      } else {
        alert('Las credenciales del empleado son incorrectas');
      }
    })
    .catch((error) => console.error('Error:', error));
}

function validarCredenciales() {
  //  var username = document.getElementById('username').value;
  //  var password = document.getElementById('password').value;
  fetchPostValidationEmployee();
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

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío del formulario
  validarCredenciales();
});

// https://www.youtube.com/watch?v=hlwlM4a5rxg
// https://www.w3schools.com/js/js_timing.asp
