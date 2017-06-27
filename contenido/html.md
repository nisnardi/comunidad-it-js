# HTML - HyperText Markup Language

## ¿Qué es HTML?

[HTML](https://developer.mozilla.org/es/docs/Web/HTML) significa [HyperText Markup Language](https://es.wikipedia.org/wiki/HTML) o lenguaje de marcas de hipertexto y se utiliza para estructurar documentos web.

Un lenguaje de marcas utiliza etiquetas para definir estructuras y mostrar distintos tipos de datos como pueden ser textos, imagenes, videos, etc.

Podemos decir que el HTML describe la estructura de nuestro documento o página utilizando etiquetas (tags).

Para conocer más sobre los distintos tipos de etiquetas podemos utilizar el sitio de [Mozilla Developer Network o MDN](https://developer.mozilla.org/es/docs/Web/HTML/Elemento).

Existen diferentes versiones de HTML y en la actualidad utilizamos la versión de [HTML5](https://es.wikipedia.org/wiki/HTML5).

Muchas paginas web son la versión electrónica de documentos reales. Por ejemplo en [lanacion.com.ar](http://www.lanacion.com.ar) podemos encontrar la versión digital del contenido que sale publicado en el diario de manera física.

En la publicación [Carreras de drones: cómo entrenan y quiénes compiten en la Argentina](http://www.lanacion.com.ar/2020025-carreras-de-drones-como-entrenan-y-quienes-compiten-en-la-argentina) podemos ver un claro ejemplo de como estructurar una noticia.

**Tenemos un título principal:**

```
Carreras de drones: cómo entrenan y quiénes compiten en la Argentina
```

**Una bajada:**
```
[Video] Leonardo Cascavilla y Santiago Nardi integran el Ezeiza Team; en +Despiertos contaron en qué consiste la Led Cup 2017
```

**La nota:**
```
Las carreras de drones se hacen en todo el mundo..
```

**Material audiovisual (el video)**

**Autor:**
```
Martina Rua
```

**Fecha:**
```
MIÉRCOLES 03 DE MAYO DE 2017 • 12:01
```

**Etiquetas realacionadas:**
```
Drones
```

**Y sin duda lo mejor de la nación, una lista de comentarios.**

En un artículo más largo podemos encontrar más secciones con otros títulos, textos e imagenes. Estas estructuras ayudan al leector a entender la noticia y de alguna forma estamos acostumbrados a este formato. También podemos hacer un análisis similar en un blog post como puede ser [medium.com](https://medium.com/@kentcdodds/classes-complexity-and-functional-programming-a8dd86903747).

De alguna forma estamos acostumbrados a este tipo de estructuras gracias a los diarios u otro tipo de publicación física similar. Ahora bien, qué pasa cuando tenemos que estructurar otro tipo de documentos como puede ser un Twit?

![Ejemplo twit de la nacion](../assets/html/ejemplo_la_nacion.png)

En este ejemplo podemos ver:

**Contenido:**
```
Arabia Saudita hace un drástico giro con un nuevo heredero
```

**Fecha:**
```
8:03 - 22 jun. 2017
```

**Imagen**

**Datos del autor:**
```
El avatar de la nación
```

**Campo de texto para ingresar una respuesta:**
```
Twittea tu respuesta
```

**Botones para interactuar:**

* Siguiendo o seguir al usuario
* Respuestas
* Retwittear
* Agregar a Pocket
* Poner que me gusta
* Mandar un mensaje directo a otro usuario

En síntesis a la hora de crear páginas web nos vamos a encontrar que cada uno de nuestros proyectos va a tener secciones que tiene una estructura particular. HTML nos brinda las etiquetas para describir las distintas partes de nuestro documento.

**La Nación en HTML:**
![La Nacion en HTML](../assets/html/lanacion_en_html.png)

## Estructura

### Estructura de un tag de HTML (etiqueta)
Una etiqueta actúa como un contenedor y describe los datos o información que contienen entre la etiqueta de apertura y la de cierre.

```html
<tipoDeEtiqueta>Contenido</tipoDeEtiqueta>
```

Una etiqueta esta compuesta por: 

**Etiqueta de apertura:**
* `<` un signo menor que se conoce como apertura de la etiqueta
* `tipoDeEtiqueta` puede ser una o varias letras que describen el tipo de etiqueta que queremos crear (título, link, imagen, etc)
* `>` un signo mayor que se conoce como cierre de la etiqueta

```html
<tipoDeEtiqueta>
```
**Contenido:**

* Contenido de la etiqueta: puede ser un texto u otro/s elemento/s de HTML

```html
<tipoDeEtiqueta>Bienvenidos a HTML!!
```

**Etiqueta de cierre:**
* Tiene la misma estructura que la etiqueta de apertura
* Se tiene que llamar igual que la estrcutura de apertura para que el browser entienda que acá termina lo que comenzó con la etiqueta de apertura
* `/` tiene una barra inclinada para determinar que es una etiqueta de cierre (sino sería igual que la de apertura) 

```html
</tipoDeEtiqueta>
```

**Elemento:**
* Podemos diferenciar que las etiquetas son las de apertura y cierre
* Llamamos elemento al conjunto de etiquetas de apertura y cierre que tiene contenido

```html
<tipoDeEtiqueta>Bienvenidos a HTML!!</tipoDeEtiqueta>
```

**Etiquetas sin contenido:**
* Algunas etiquetas no tienen contenido y funcionan como placeholder (un lugar donde vamos a poner algo).
* Este tipo de etiquetas utilizan la apertura y cierre en una sola estructura
* Un ejemplo de este tipo de etiquetas es el contenedor para insertar una imagen.

```html
<img />
```

**Ejemplo de un elemento con otro elemento:**
En el siguiente ejemplo tenemos una etiqueta (no sabemso de que tipo) que tiene como contenido un texto (Bienvenidos a HTML!!) y una imagen que por ahora no sabemos cual es.

En este ejemplo vemos que el texto y la imagen tienen un márgen izquierdo para visualizar de forma rápida y fácil que son contenido del elemento llamado tipoDeEtiqueta. Esta técnica se conoce como [identación o identado](https://es.wikipedia.org/wiki/Indentaci%C3%B3n) y es una buena práctica para evitar tener problema a la hora de armar documentos con estructuras más complejas.

```html
<tipoDeEtiqueta>
  Bienvenidos a HTML!!
  <img />
</tipoDeEtiqueta>
```

### Atributos de los elementos
* Los elementos en HTML pueden tener atributos que nos sirven para describirlo mejor, agregar funcionalidad o alterar su comportamiento.
* El atributo **id** nos permite identificar de forma única un elemento dentro del documento. (Sólo deberíamos tener un elemento de este tipo por documento, ejemplo: Un título principal con el id: titulo)
* El atributo class nos permite establecer a que clase de CSS pertenece un elemento. De esta forma podemos agrupar elementos por la forma que se ven o comportan. (Podemos utilizar la misma clase en varios elementos)

Ejemplo usando ID y class
```html
<tipoDeEtiqueta id="titulo-principal" class="rojo"></tipoDeEtiqueta>
```

### Estructura de un documento HTML

Todo documento HTML va a tener las siguientes estructuras principales.

* Declaración de tipo de documento (doctype)
* Etiqueta HTML que actúa como elemento principal de nuestro documento
* Un encabezado para agregar información adiciónal sobre la página (head)
* Un cuerpo con el contenido de nuestro documento (body)

#### DOCTYPE:

Dado que existen distintas versiones de HTML vamos a comenzar nuestro documento declarando la versión que vamos a utilizar así el browser interpreta el resto del contenido de forma correcta.

El browser puede renderizar el documento sin esta declaración pero nosotros siempre lo vamos a definir para evitarnos problemas y sobre todo para tener un documento bien formado.

**DOCTYPE versión HTML5:**
```html
<!DOCTYPE html>
```

#### HTML
Esta etiqueta es el elemento padre de todo nuestro documento. Establecemos que estamos armando una estructura en HTML. 

```html
<html></html>
```

#### HEAD
Dentro de la etiqueta HTML vamos a tener una sección donde podemos describir cosas sobre nuestra página. Esta sección se llama HEAD (cabeza) y no va a ser visible en el documento ya que es de uso interno del browser.

```html
<head></head>
```

#### BODY
* El browser va a renderizar todo el contenido que esta dentro de este elemento. Podemos decir que es todo lo que vemos en pantalla.

```html
<body></body>
```

#### Title
* El contenido de la etiqueta title se ve en la parte superior del browser o como contenido de los tabs(solapa).
```html
<head>
  <title>Título de nuestro documento y se ve en el tab del browser.</title>
</head>
```

#### Práctica
[Ejercicio 1](../ejercicios/consignas/html/ej01.md)

## Etiquetas
* Títulos H1/H6
* Etiqueta párrafo
* Contenedor genérico (div, span)
* Comentarios
* Crear nuestra primer página web
* Distintos tipos de títulos (h2 al h6)
* Salto de línea (br)
* Línea divisora (hr)

### Títulos H1/H6
* En HTML tenemos 6 niveles de etiquetas para los títulos de nuestro documento o secciones.
* Los títulos utilizan la etiqueta **h** y el número de tipo de título.
* El browser por defecto muestra la diferencia entre los títulos utilizando una tipografía más grande para el H1 y la más pequeña para el H6.
* Más adelante nosotros vamos a definir como se ven los títulos de nuestro documento.
* Conceptualmente debemos utilizar los títulos en orden respetando su gerarquía. (primero el h1, después el 2, etc)

**Ejemplos:**
```html
<h1>Título Principal del documento</h1>
<h2>Título secundario</h2>
<h3>Título 3</h3>
<h4>Título 4</h4>
<h5>Título 5</h5>
<h6>Título 6</h6>
```

### Etiqueta párrafo
* Por medio de la etiqueta **p** creamos un párrafo.
* Establecemos el contenido entre la etiqueta de apertura y cierre.
* El párrafo es un **elemento en bloque** y es por esto que el browser por defecto nos va a mostrar un párrafo por linea.
* El browser sólo renderiza un espacio en blanco e ignora el resto.

**Ejemplo**
```html
<p>Contenido de mi párrafo.</p>
<p>Contenido de          mi párrafo.</p> (sólo va a mostrar un espacio)
<p>Contenido de mi          párrafo.</p> (sólo va a mostrar un espacio)
```

#### Práctica
[Ejercicio 2](../ejercicios/consignas/html/ej02.md)
[Ejercicio 3](../ejercicios/consignas/html/ej03.md)

### Contenedores genéricos
#### Div
* Existe un contenedor genérico llamado **div** que nos permite agrupar contenido.
* El div es un **elemento bloque** por defecto.

**Ejemplo:**
```html
<div>
  <h1>Noticia</h1>
  <p>Contenido de la noticia.</p>
</div>
```

#### Span
* Existe un contenedor genérico llamado **span** que nos permite agrupar contenido.
* El span es un **elemento en linea (inline)** por defecto y esto significa que se va a ver un elemento junto al otro sin ocupar todo el lugar disponible.
* Por default normalmente el browser no aplica ningún estilo especial a este tipo de elementos pero nos va a permitir hacerlo desde css.
* Podemos utilizar estos contenedores genéricos inline como parte de un elemento en bloque (como puede ser un div o párrafo).

**Ejemplo:**
```html
<span>Elemento en linea</span>
<span>Elemento en linea</span> (Estos dos spans se van a ver en la misma linea)
<p>Este párrafo tiene un <span>sector especial</span></p>
```

### Comentarios
* En los lenguajes de programación existe siempre alguna forma de comentar nuestro código ya sea porque no queremos que se ejecute o por la necesidad de dejar documentada alguna funcionalidad.
* Podemos utilizar comentarios de una o muchas líneas (multilinea).
* El browser no renderiza los comentarios en la vista de nuestro documento
* Cualquiera puede ver nuestros comentarios en el código fuente de nuestro documento.
* HTML utiliza la siguiente sintáxis para los comentarios

**Ejemplo:**
```html
<!-- Comentario en una sola línea -->
<!-- 
  Comentario con varias líneas
  Comentario con varias líneas
  Comentario con varias líneas
  Comentario con varias líneas
-->
```
### Salto de línea (br)
* Utilizando al etiqueta **br** forzamos un salto de línea

**Ejemplo:**
```html
<p>Contenido de nuestro párrafo en una línea <br /> 
Contenido de nuestro párrafo en otra línea</p>
<br />
<br />
Podemos utilizar el salto de linea <br />
en cualquier lado de nuestro documento.
```

### Línea divisora (hr)
* Por medio de la etiqueta **hr** dibujamos una linea divisora

**Ejemplo:**
```html
<h1>Título principal de nuestro documento</h1>
<h2>Título secundario</h2>
<hr />
<p>Contenido de nuestro documento</p>
```

#### Práctica
[Ejercicio 4](../ejercicios/consignas/html/ej04.md)

### Formato de texto
* Existen algunas etiquetas de HTML que nos permiten describir como es el texto del documento
* Podemos utilizar la etiqueta **strong** para resaltar un texto.
* Queda a criterio del browser como mostrar el contenido de esta etiqueta. En general lo hace con formato de negrita.
* Para efectos visuales vamos a utilizar CSS.

**Ejemplo:**
```html
<strong>Texto resaltado o remarcado!!</strong>
```

## Listas
* Existen muchos casos en los que podemos utilizar listas
* En HTML hay 3 tipos de listas:
  * Desordenadas:
  * Ordenadas
  * Definición

### Lista desordenada (ul)
* Las listas desordenadas tienen como detalle un bullet
* Dado que son desordenadas no importa el orden de sus elementos
* Se utiliza la etiqueta **ul** para establecer que es una lista del tipo desordenada o **U**nordered **L**ist.
* Este tipo de listas tienen elementos **li** del tipo elemento de lista o **l**ist **i**tem

**Ejemplo:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### Práctica
[Ejercicio 5](../ejercicios/consignas/html/ej05.md)

### Lista ordenada (ol)
* Las listas ordenadas tienen como detalle números ordenados (1, 2, 3, etc)
* Dado que son ordenadas importa el orden de sus elementos
* Se utiliza la etiqueta **ol** para establecer que es una lista del tipo ordenada o **O**rdered **L**ist.
* Al igual que la lista desordenada, esta lista tiene elementos **li** del tipo elemento de lista o **l**ist **i**tem

**Ejemplo:**
```html
<ol>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ol>
```

#### Práctica
[Ejercicio 6](../ejercicios/consignas/html/ej06.md)

### Lista de definición
* Este tipo de lista se utiliza para mostrar un término y definiciones (glosario)
* Definimos este tipo de lista con la etiqueta **dl** de lista de definición o **D**efinition **L**ist
* Utilizamos la etiqueta **dt** para establecer el término
* Por medio de la etiqueta **dd** establecemos cual es la definición del término anterior

**Ejemplo:**
```html
<dl>
  <dt>Término</dt>
  <dd>Definición</dd>
</dl>
```

#### Práctica
[Ejercicio 7](../ejercicios/consignas/html/ej07.md)

### Listas anidadas
* Las listas se pueden anidar metiendo como contenido de un elemento de lista una nueva lista
* Puede ser cualquier tipo de lista
* Se pueden utilizar para crear distintos tipos de menu

![Se te vuela la peluca](../assets/html/mindblown.gif)

**Ejemplo:**
```html
<ul>
  <li>Item 1</li>
  <li>
    <ol>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ol>
  </li>
</ul>
```

#### Práctica
[Ejercicio 8](../ejercicios/consignas/html/ej08.md)

## Hipervínculos
* Podemos vincular documentos utilizando hipervínculos
* La etiqueta **a** establece un nuevo vínculo
* Por medio del atributo **href** podemos vincular documentos
* El atributo **href** acepta una dirección absoluta, relativa o un email como valor y define de que tipo de hipervínculo es
* Entre la etiqueta de apertura y cierre ponemos el contenido del link
* Como contenido podemos poner una imágen y así generar otro efecto visual

**Ejemplo:**
```html
<a href="#">Contenido de mi link</a>
```

### Link externo
* Utilizando una ruta externa como atributo **href** podemos relacionar nuestro documento con un sitio exterior.

**Ejemplo:**
```html
<a href="http://google.com">Buscar</a>
```

### Links con rutas absolutas y relativas
* Para definir el atributo href podemos utilizar una ruta absoluta o relativa.
* Ruta absoluta se llama cuando utilizamos la ruta completa al documento. Puede ser local o de un sitio externo.

**Ejemplo:**
```html
<a href="http://yahoo.com">Abrir Yahoo</a>
<a href="c:\Usuarios\mi_nombre\mi_cv.pdf">Mirá mi CV</a>
```

* Podemos relacionar los documentos utilizando una ruta relativa.
* Este tipo de rutas está definida por la relación que tienen los documentos
* Podemos utlizar el concepto que utilizamos desde la consola para entrar y salir de una carpeta
* Para acceder a la raíz del sitio podemos utilizar **/**

**Ejemeplo:**
```html
<a href="/">Volver a Home</a>
```

* Si tenemos 2 archivos que estan al mismo nivel podemos utilizar el nombre de los mismos como vínculo.

![Archivos relativos](../assets/html/link_relativo.png)

**Ejemplo:**
```html
En index.html:
<a href="about.html">Sobre Mi</a>

En about.html:
<a href="index.html">Sobre Mi</a>
```

* Podemos relacionar un archivo que esta dentro de una carpeta utilizando el nombre de la **carpeta/nombre del archivo**
* También podemos establecer relación desde el archivo que esta dentro de la carpeta con uno que esta afuera utilizando **../** tantas veces como niveles de profundidad que tenga que salir

![Archivos relativos](../assets/html/link_relativo2.png)

**Ejemplo:**
```html
En index.html:
<a href="about/about.html">Sobre Mi</a>

En about/about.html:
<a href="../index.html">Sobre Mi</a>
```

### Atributo target
* Por medio del atributo **target** que tienen los hipervinculos y el valor **_blank** podemos establecer que queremos que ese documento se abra en una ventana nueva
* Los browsers actuales pueden abrir este documento en un tab nuevo si el browser lo soporta.

**Ejemplo:**
```html
<a href="http://comunidadit.org" target="_blank">Comunidad IT</a>
```

## Link de mail
* En el atributo **href** podemos establecer un tipo de valor especial **mailto** para decirle al browser que queremos abrir algún programa de envío de mail que tenga instalado el usuario
* Utilizamos el valor **mailto:dirección@gmail.com** para establecer cual es el mail que queremos utilizar

```html
<a href="mailto:pepe@gmail.com">Contacto</a>
```

### Punto de anclaje
* Utilizando el concepto de punto de anclaje podemos navegar a una sección del documento utilizando un link.
* Al utilizar un punto de anclaje el browser se sitúa en la posición donde encuentre dicho punto.
* Para esto utilizamos un elemento hipervínculo **a** con el atributo **name** que queremos utilizar como anclaje.

**Ejemeplo**
```html
Definimos el anclaje en un documento
<a name="noticias"></a>

Desde el mismo documento podemos utilizar:
<a href="#noticias">Ir a la sección noticias</a>

Desde otro archivo:
<a href="archivo.html#noticias">Ir a la sección noticias</a>
```

#### Práctica
[Ejercicio 9](../ejercicios/consignas/html/ej09.md)

[Ejercicio 10](../ejercicios/consignas/html/ej10.md)

[Ejercicio 11](../ejercicios/consignas/html/ej11.md)

[Ejercicio 12](../ejercicios/consignas/html/ej12.md)

[Ejercicio 13](../ejercicios/consignas/html/ej13.md)

[Ejercicio 14](../ejercicios/consignas/html/ej14.md)

[Ejercicio 15](../ejercicios/consignas/html/ej15.md)

## Creando sitios:

### Medium
* Vamos a crear un sitio similar a [Medium](https://medium.com/) con todo lo que vimos hasta este momento.

#### Práctica
[Sitio 1](../ejercicios/consignas/html/sitio01.md)

## Imagenes
* En HTML podemos utilizar la etiqueta **img** como contenedor de una imagen
* Dado que no tiene contenido es un tipo de etiqueta que tiene apertura y cierre en una sola etiqueta
* Para establecer el contenido del contenedor utilizamos el atributo **src** que significa source o fuente
* Esta etiqueta es un elemento en linea es decir que podemos poner uno al lado del otro
* Por defecto el contenedor va a tomar el tamaño original de la imagen
* Al trabajar en web siempre tratamos de optimizar las imagenes para que pesen lo menos posible
* Encontramos diferentes tipos de imagenes: [jpg](https://es.wikipedia.org/wiki/Joint_Photographic_Experts_Group), [png](https://es.wikipedia.org/wiki/Portable_Network_Graphics) y [gif](https://es.wikipedia.org/wiki/Graphics_Interchange_Format) entre otras
* [Optimización de la imagen - Developers Google](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?hl=es-419)

**Ejemplo**
```html
<img src="mifoto.jpg" />
```

* En el atributo **src** acepta tanto rutas absolutas como relativas 

**Ejemplo**
```html
Imagenes con rutas relativas:
<img src="imagenes/mifoto.jpg" />

Salgo de una carpeta, entro a la carpeta imágenes y busco el archivo mifoto.jpg
<img src="../imagenes/mifoto.jpg" />

Imagen con ruta absoluta:
<img src="http://images6.fanpop.com/image/photos/39500000/il-570xN-917420114-2kdu-rick-and-morty-39567961-300-370.jpg" />
```

* Utilizando los atributos **height** para la altura y **width** para el ancho podemos establecer el tamaño que queremos que tenga el contenedor. 
* Si no utilizamos bien las proporciones podemos hacer que la imagen se vea mal
* Podemos establecer un número como valor de estos atributos y la unidad de medida es en pixel

```html
<img src="mifoto.jpg" height="300" width="300" />
```
* El atributo alt nos permite establecer un texto que describa la imagen.
* Este atributo lo utilizan los lectores de pantalla o es el mensaje que vemos cuando no se puede cargar la imagen
* Es una buena práctica describir nuestras imagenes con este atributo

**Ejemplo:**
```html
<img src="programando.jpg" alt="En esta foto estoy programando" />
```

* También existe un atributo llamado **title** que nos permite agregar más información sobre la imagen
* Algunos browsers muestran un cartelito o tooltip al pasar el mouse sobre la imagen

**Ejemplo:**
```html
<img src="programando.jpg" title="Soy super ñoño!!!"  />
```

#### Práctica
[Ejercicio 16](../ejercicios/consignas/html/ej16.md)

### Foto con detalle
* Muchas veces necesitamos mostrar una imagen con un detalle, para esto HTML5 incorpora los elementos **figure** y **figcaption**
* Como contenido de **figure** podemos poner una imagen o más imagenes
* Utilizamos **figcaption** para establecer el detalle de la/s imagen/es
* Con varios de estos elementos podemos crear una especie de galería de imagenes
* Los browsers más viejos no saben renderizar estos elementos y simplemente muestran el contenido
* Para saber el nivel de soporte de HTML5 de nuestro browser podemos utilizar el siguiente [sitio](https://html5test.com)

**Ejemplo:**
```html
<figure>
  <img src="programando.png">
  <figcaption>Programando como un campeón</figcaption>
</figure>
```

## Tablas

* Etiquetas table, tr, td
* Partes de una tabla (tbody, thead, tfoot)
* Unir celdas y columnas (row y col span)

##  Formulario

* Definir un formulario
* Distintos tipos de inputs (Text, textareas, submit, button, dropdowns, checkbox, radiobutton, etc)

## Audio y video

## Iframe