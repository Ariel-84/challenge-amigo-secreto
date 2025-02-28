// array lista de amigos.
let listaAmigos = [];

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}
//Función para agregar un amigo a la lista
function agregarAmigo() {
  let nuevoAmigo = document.getElementById('amigo').value.trim();

//Condición para validar que el nombre no esté vacío o que ya haya sido agregado
  if (nuevoAmigo === '' || listaAmigos.includes(nuevoAmigo)) {
      alert(nuevoAmigo === '' ? 'Ingresa un nombre valido' : 'Este nombre ya ha sido agregado.');
      return;
  }
//Condición para validar que el nombre no sea un número
  if (!isNaN(nuevoAmigo) && nuevoAmigo !== '') {
    alert('Inserte un nombre, no un número.');
    return;
  }
//Agregar el nuevo amigo a la lista
  listaAmigos.push(nuevoAmigo);
  document.getElementById('amigo').value = '';
  actualizarListaAmigos();
}
//Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ''; // Limpiar la lista antes de mostrarla nuevamente

    for (let i = 0; i < listaAmigos.length; i++) {
      let nuevoItem = document.createElement("li");
      nuevoItem.textContent = listaAmigos[i];
      listaElement.appendChild(nuevoItem);
    }
}
//Función para sortear un amigo
function sortearAmigo() {
  if (listaAmigos.length < 2) {  // Validar que haya al menos dos amigos
    alert('Debe haber al menos dos amigos para realizar el sorteo.');
    return;
  }

  // Realizar el sorteo
  let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[indiceSorteado];

  // Mostrar el resultado.
  document.getElementById('resultado').textContent = `El amigo sorteado es: ${amigoSorteado}`;
}

// Asignar títulos iniciales
asignarTextoElemento('h1', 'Amigo Secreto');
asignarTextoElemento('h2', 'Digite el nombre de sus amigos');