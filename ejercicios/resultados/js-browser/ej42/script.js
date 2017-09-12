window.onload = function() {
  const imagenes = [
    'wonder_womanbyn.png',
    'batmanbyn.png',
    'flashbyn.png',
    'supermanbyn.png'
  ];

  const body = document.body;

  function getSuperHeroName(text) {
    const posicionUltimaBarra = text.lastIndexOf("/") + 1;
    return text.substring(posicionUltimaBarra).replace('.png', '').replace('_', ' ').toUpperCase();
  }

  imagenes.forEach(function(imagen) {
    const elemento = document.createElement('img');
    elemento.src = `imgs/${imagen}`;

    elemento.onmouseover = function() {
      const source = elemento.src.replace('byn', '');
      elemento.src = source;
    }

    elemento.onmouseout = function() {
      const source = elemento.src.replace('.png', 'byn.png');
      elemento.src = source;
    }

    elemento.onclick = function() {
      const superheroe = getSuperHeroName(elemento.src);
      alert(superheroe);
    }

    body.appendChild(elemento);
  })
}