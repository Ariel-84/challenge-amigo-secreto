let listaAmigos = [];

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value.trim();
    if (nuevoAmigo !== '') {
      listaAmigos.push(nuevoAmigo);
      document.getElementById('amigo').value = '';
      actualizarListaAmigos();
    } else {
      alert('Ingresa un nombre válido');
    } 
  }
    function actualizarListaAmigos() {
        let listaElement = document.getElementById('listaAmigos');
        listaElement.innerHTML = '';
        for (let i = 0; i < listaAmigos.length; i++) {
          let nuevoItem = document.createElement("li");
          nuevoItem.textContent = listaAmigos[i];
          listaElement.appendChild(nuevoItem);
        }
      }


function sortearAmigo() {

}

asignarTextoElemento('h1','Amigo Secreto' );
asignarTextoElemento('h2','Digite el nombre de sus amigos' );