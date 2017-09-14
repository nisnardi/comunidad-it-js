/*
 * Usando API https://swapi.co/
 * https://swapi.co/api/films/
*/

function showLoading() {
  const loading = document.getElementById('loading');
  loading.style.display = 'block';
}

function hideLoading() {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
}

function mostrarPelicula(pelicula) {
  const contenido = document.querySelector('#contenido');
  const elemento = document.createElement('p');
  elemento.textContent = `nombre: ${pelicula.title}, episodio: ${pelicula.episode_id}, año: ${pelicula.release_date}`
  contenido.appendChild(elemento);
}

window.onload = function() {
  const xmlhttp = new XMLHttpRequest();
  const url = 'https://swapi.co/api/films/';
  const contenido = document.querySelector('#contenido');

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        hideLoading();
        const respuesta = JSON.parse(xmlhttp.responseText);
        const cantidadDePeliculas = respuesta.count;
        const peliculas = respuesta.results;
        
        contenido.innerHTML = ` <h1>Cantidad de películas: ${respuesta.count}</h1>`;
        peliculas.forEach(mostrarPelicula)
      }
  };

  xmlhttp.open("GET", url, true);

  xmlhttp.send();
}