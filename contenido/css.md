# CSS - Cascade Style Sheet

## ¿Qué es CSS y para qué sirve?

**CSS** significa **C**ascade **S**tyle **S**heet o hoja de estilo en cascada y nos permite crear reglas que definen propiedades visuales para nuestros elementos.

**Ejemplo de código CSS:**
```CSS

span {
  color: white;
}

```

* En el código de ejemplo definimos que todos los elementos span de nuestro documento/s deben tener la tipografía de color blanco.
* De esta definifición vemos que tenemos una forma de seleccionar elementos y que podemos aplicar una propiedad para modificar la forma en que se ve el contenido de la etiqueta seleccionada.

**Ejemplo de código CSS:**
```CSS

selector {
  nombrepropiedad: valor;
}

```

* En CSS todo el tiempo vamos a estar utilizando estos dos conceptos: 
  * Seleccionar elementos
  * Definir como queremos que se vean
* Según como utilizemos CSS podemos definir como se ve un elemento, un documento o todo nuestro sitio


## Usar CSS 
* Existen diferentes formas de aplicar CSS en o a un documento

### Agregar hoja de estilo en un elemento (atributo style)
* La forma más particular e individual que tenemos de utilizar css es utilizando el atributo **style** que tienen los elementos HTML
* Dentro del atributo style escribimos las propiedades visuales separadas por punto y coma

**Ejemplo:**
```html
<span style="color: white;">Texto en color blanco!!</span>
```

* De esta forma establecemos que **un** elemento span en particular va a tener el color de texto blanco
* Si quiero que **dos** o más elementos tengan el mismo color lo hacemos de la siguiente manera:

**Ejemplo:**
```html
<span style="color: white;">Texto en color blanco!!</span>
<span style="color: white;">Otro texto en color blanco!!</span>
```

* Geníal, ya tenemos 2 span con texto en blanco, ahora me pregunto, si tengo 50 span en el documento, los tengo que modificar uno a uno?, La respuesta es **NO** y ya vamos a ver cómo lo hacemos
* Cuando definimos estilos a nivel elementos lo estamos haciendo de forma individual
* Esta es una buena opción cuando necesitamos que si o si un elemento se vea de una determinada forma
* Utilizando esta definición de css se hace más difícil mantener o modificar nuestros elementos ya que para cambiar el color de una tipografía (como en el ejemplo) vamos a tener que modificar uno a uno todos los elementos (mucho trabajo)
* Si tenemos tan solo un documento puede ser una tarea relativamente simple pero si tenemos 300 documentos se hace más complicado
* Para evitar este problema necesitas otra alternativa que nos permita definir los atributos visuales de nuestros elementos a nivel documento

### Definir el color de texto:
* Por medio de la propiedad **color** podemos establecer el color de tipografía que tiene un elemento
* Esta propiedad **color** acepta un color como valor, dentro de las opciones puede ser:
  * Nombre de color en ingles (white, red, blue, yellow, gray, etc)
  * Color en formato RGB (rgb(0,0,0)) donde cada valor va de 0 a 255 siendo 0 el apagado y 255 prendido
  * [Color Hexadecimal](http://www.blogoff.es/2008/11/19/colores-en-hexadecimal-una-introduccion/)
* Para saber más pueden visitar el [sitio de MDN](https://developer.chrome.com/devtools/docs/elements-styles)

### Selector básico por tipo de elemento
* Utilizando el selector por tipo de elemento podemos agrupar la forma de aplicar estilos a los elementos según el nombre de su etiqueta
* Este es un selector general ya que va a seleccionar **TODOS** los elementos del mismo tipo

**Ejemplo:**
```css
  p {
    color: blue;
  }

  div {
    color: rgb(255, 0, 0);
  }

  span {
    color: #00FF00;
  }
```

```html
<p>Texto en color azul</p>
<p>Texto en color azul y <span>verde</span></p>
<div>Texto en color rojo</div>
<div>Texto en color rojo y <span>verde</span></div>
<span>Texto en color verde</span>
```

#### Práctica
[Ejercicio 1](../ejercicios/consignas/css/ej1.md)

### Agregar hoja de estilo en un documento (style)
* Por medio de la etiqueta **style** podemos definir los estilos que queremos para nuestros elementos a nivel documento
* Utilizando selectores podemos cambiar la forma que se ve uno o muchos elementos del mismo tipo
* Para definir que el texto que estamos escribiendo dentro de la etiqueta **style** es css, utilizamos el atributo **type** con el valor "text/css"
* Si bien podemos omitir este atributo ya que HTML5 no lo require dejamos en manos del browser como interpretar el contenido de esta etiqueta
* Para estar más seguro y lograr mejor compatibilidad con browsers anteriores definimos el atributo **type** del elemento **style**

**Ejemplo:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Usando CSS</title>
    <style type="text/css">
      span {
        color: white;
      }
    </style>
  </head>
  <body>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
  </body>
</html>
```

* Con tan solo un cambio podemos establecer que todos nuestros elementos span se vean de otro color

**Ejemplo:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Usando CSS</title>
    <style type="text/css">
      span {
        color: red;
      }
    </style>
  </head>
  <body>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
  </body>
</html>
```

#### Práctica
[Ejercicio 2](../ejercicios/consignas/css/ej2.md)

* Esta forma de utilizar los estilos está buena cuando necesitamos definir estilos para un documento
* Si bien esta forma es más general que definir los estilos en cada elemento, sigue siendo una individual a nivel documento
* Un sitio va a tener más de un documento y si queremos mantenerlo necesitamos una forma de poder unificar todos los estilos para todos nuestros documentos

### Agregar hoja de estilo en un documento externo (link)
* Utilizando la etiqueta **link** podemos vincular un documento HTML con uno de CSS
* Todas las reglas que definamos en el documento CSS van a ser aplicadas en todos los documentos vinculados
* Esta es la mejor forma de unificar los estilos para nuestro sitio y es una forma más general de hacerlo
* La etiqueta **link** tiene los siguientes atributos y valores:
  * **href:** establece el path al documento CSS
  * **type:** al igual que en la definición de la etiqueta **style** especificamos que el contenido de este documento vinculado es "text/css"
  * **rel:** establece la relación con el otro documento y utilizamos el valor "stylesheet"

**Ejemplo:** 

Archivo: styles.css
```css
span {
  color: white
}
```

Archivo: index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Index</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
  </body>
</html>
```

Archivo: contact.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Contact</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
  </body>
</html>
```

* Con tan solo un cambio en la hoja de estilo podemos modificar todos los documentos vinculados

**Ejemplo:** 

Archivo: styles.css
```css
span {
  color: red
}
```

Archivo: index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Index</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
  </body>
</html>
```

Archivo: contact.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Contact</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
  </body>
</html>
```

#### Práctica
[Ejercicio 3](../ejercicios/consignas/css/ej3.md)

* CSS se llama Hoja de estilo en cascada ya que los elementos pueden heredar propiedades visuales de padre a hijo
* Si establecemos estilos al **body** todos los elementos que esten en el documento van a heredar esos atributos
* No todos los elementos son heredables
* Una buena forma de ver esto es utilizando la barra de [developer tools](https://developer.chrome.com/devtools/docs/elements-styles)
* Los estilos que definimos en un archivo externos pueden ser sobrescritos utilizando la etiqueta **styles**
* Los estilos definidos en style pueden ser sobrescritos utilizando el atributo **style** de los elementos
* De esta forma podemos ver que utilizamos conceptos generales y son pisados por los más individuales
* Este mismo concepto se da entre elementos
* Si definimos atributos visuales para el **body** podemos sobrescribir como se ven los **párrafos** por ejemplo dejando que el resto de los elementos hereden las propiedades declaradas en el **body**

**Ejemplo:** 

styles.css
```css
 p {
   color: red;
 }
```

```html
<link href="styles.css" type="text/css" rel="stylesheet" />

<style type="text/css">
  p {
    color: blue;
  }
</style>

<p style="color: black;">Texto en color negro!!</p>
```
* Como podemos ver en este ejemplo el estilo que establecemos en el elemento va a ser el que quede definido finalmente
* El estilo definido en el documento (etiqueta style) pisa el que esta definido en el archivo general. En este caso importa el orden en que fueron llamados los estilos
* Como regla podemos decir que siempre ponemos los estilos más generales primero y después sobrescribimos lo que necesitamos

#### Práctica
[Ejercicio 4](../ejercicios/consignas/css/ej4.md)

## Modelo de Caja
* Podemos pensar los elementos de HTML como una caja
* Este concepto se conoce como box model

![Box Model](../assets/css/css-box-model.png)

* **content:** es el contenido del elemento, por ejemplo un texto u otros elementos
* **padding:** es un margen interno entre el borde y el contenido, podemos establecer diferentes valores para la parte superior, inferior, izquierda y derecha
* **border:** es el borde de la caja y se le pueden aplicar diferentes estilo
* **margin:** es el margen externo de la caja, podemos establecer diferentes valores para la parte superior, inferior, izquierda y derecha

* En HTML existen elementos del tipo en bloque (block) y en linea (inline)
* Estos tipos de elementos se diferencian en la forma que se comportan y como se aplican los atributos de la caja
* Los elementos en linea por ejemplo ignoran los márgenes superiror e inferior pero si aplica los de izquierda y derecha
* También los elementos en linea ignoran las propiedades de ancho y alto (lo vemos más adelante)

**IMPORTANTE**
* Para calcular el ancho de un elemento tenemos que tener en cuenta:
  * Ancho del elemento
  * Espacio asignado para padding (margen interno)
  * Ancho del borde
  * Espacio asignado a los márgines 
* Sumando todos estos valores obtenemos el ancho real de los elementos
* Algunos browsers viejos manejaban el modelo de la caja de otra forma y esto traía inconpatibilidad entre ellos


### Selectores y atributos

#### Colores: 
* Color, Background-color
* Fonts: familias, tamaño, decorados, pesos, alineado

### Modelo de caja
* Tamaños
* Overflow
* Border
* Padding
* Margin
* Display: inline, block, inline-block, none
* Sombra
* Bordes redondeados

### Listas

### Formularios

### Posicionamiento

### Media Query (mostrar sólo que existen)

### Grilla (Usar una librería de grilla)