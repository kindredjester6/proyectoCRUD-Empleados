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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function fetchGetJSONData(valor) {
  if (valor == '') {
    valor = '%20';
  }
  fetch(`http://localhost:9876/empleados/${valor}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      mostrarEmpleados(data.recordset);
    })
    .catch((error) => console.error('Unable to fetch data:', error));
}

function mostrarEmpleados(data) {
  eliminarElemTabla();
  for (let empleado = 0; empleado < data.length; empleado++) {
    var tr = document.createElement('tr');
    for (let i = 0; i < Object.values(data[empleado]).length; i++) {
      let createTd = document.createElement('td');
      createTd.textContent = Object.values(data[empleado]).at(i);
      createTd.classList.add('tableData');
      tr.appendChild(createTd);
    }
    var tablero = document.getElementById('tablero');
    tablero.appendChild(tr);
  }
}

function eliminarElemTabla() {
  let nodeList = document.getElementById('tablero').childNodes;
  if (nodeList.length > 2) {
    for (var i = 2; !(nodeList.length == 2); i) {
      var item = nodeList[i];
      item.remove();
    }
  }
}
function validarCredenciales() {
  //  var username = document.getElementById('username').value;
  //  var password = document.getElementById('password').value;
  fetchPostValidationEmployee();
  if (tries === 5) {
    //fetchGetJSONData(document.getElementById('search').childNodes
    document.getElementById('btnLog').disabled = true;
    setTimeout(alert('Demasiados intentos de login, intente de nuevo dentro de 10 minutos'), 600000);
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío del formulario
  validarCredenciales();
});

// https://www.youtube.com/watch?v=hlwlM4a5rxg
// https://www.w3schools.com/js/js_timing.asp
