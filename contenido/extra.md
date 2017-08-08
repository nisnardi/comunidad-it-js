

\n     Nueva Línea
\t     Tabulador
\r     Retorno de Línea
\'     Apóstrofe o comilla sencilla
\"     Comilla doble
\\     Carácter Backslash



## Propiedades y métodos de string
### Propiedad length
* Por medio de la propiedad length podemos saber cuántos caracteres tiene un **string**
* La propiedad **length** retorna o devuelve un número con la cantidad de caracteres que tiene el texto
* Lo utilizamos de la siguiente manera:

**Ejemplo:**
```js
let texto = 'Bienvenidos a ECMAScript!!';
let cantidadDeCaracteres = texto.length;

console.log(cantidadDeCaracteres);
```

* En este ejemplo declaramos una variable `texto` con el valor `Bienvenidos a ECMAScript!!` y otra variable `cantidadDeCaracteres` donde guardamos la cantidad de caracteres que tiene la variable `texto`
* También podemos obtener el mismo resultado sin utilizar la variable `cantidadDeCaracteres`

**Ejemplo:**
```js
let texto = 'Bienvenidos a ECMAScript!!';
console.log(texto.length);
```

#### Prácticas
[Ejercicio 20](../ejercicios/consignas/js/ej20.md)
[Ejercicio 21](../ejercicios/consignas/js/ej21.md)

### Métodos de String
* Los métodos nos permiten obtener funcionalidad para los distintos tipos de datos
* Este método retorna un nuevo string con el texto concatenado
* Podemos ver una lista de métodos del tipo String en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
* Vamos a ver algunos de los métodos más conocidos y jugar un poco con ellos

**Ejemeplo:**
```js
let variableString = 'valor de nuestro string';

// Al tener un valor del tipo string podemos llamar a un método utilizando un punto (como con la propiedad length) y paréntesis ()
variableString.metodo();

// También podemos pasar un valor a los métodos para lograr una funcionalidad específica
variableString.metodo(valor);
```

## Concat
* Hasta ahora vimos que podemos utilizar el símbolo + para concatenar 2 valores
* Los strings tienen un método llamado **concat** que nos permite concatenar valores
* Podes saber más sobre este método en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/concat)

**Ejemplo:**
```js
let texto = 'Hola ';
let nombre = 'Marta';

// Concatenamos los strings usando el método concat
let mensaje = texto.concat(nombre);

console.log(mensaje);
```

* En este ejemplo se imprime el texto **Hola Marta**
* También se pueden pasar múltiples valores a ser concatenados

**Ejemplo:**
```js
let texto = 'ECMA';
console.log(texto.concat('Script', ' es lo mejor', ' del mundo de la programación'));
```
* en este ejemplo concatenemos varios strings al contenido de la variable texto
* Se muestra en pantalla el mensaje: **ECMAScript es lo mejor del mundo de la programación**;

#### Prácticas
[Ejercicio 22](../ejercicios/consignas/js/ej22.md)

### Mayúsculas y minúsculas
* Podemos transformar un texto a mayúscula o minúscula utilizando los métodos **toUpperCase** y **toLowerCase** respectivamente

**Ejemplo:**
```js
let textoEnMayuscula = 'HOLA';
let textoEnMinuscula = 'amigos';

console.log(textoEnMayuscula.toLowerCase()); // muestra el texto hola
console.log(textoEnMinuscula.toUpperCase()); // muestra el texto AMIGOS

console.log(textoEnMayuscula); // muestra el texto HOLA
console.log(textoEnMinuscula); // muestra el texto amigos
```
#### Prácticas
[Ejercicio 23](../ejercicios/consignas/js/ej23.md)
[Ejercicio 24](../ejercicios/consignas/js/ej24.md)

### Caracteres y posiciones
* Por medio del método **charAt** podemos saber que caracter se encuentra en una determinada posición de un string
* Este método acepta un valor numérico como parámetro
* El primer caracter esta ubicado en la posición 0
* Para saber cual es el último caracter podemos utilizar la propiedad **length**
* Dado que el primer elemento arranca en 0 a la logitud del string debemos restarle uno

**Ejemplo:**
```js
let textoSuperLargo = 'Este texto es bien largo así podemos saber varias cosas de él.';
let primerCaracter = textoSuperLargo.charAt(0);
let posicionDelUltimoCaracter = textoSuperLargo.length - 1;
let ultimoCaracter = textoSuperLargo.charAt(posicionDelUltimoCaracter);

// Accedemos al primer caracter E
console.log(primerCaracter);
console.log(ultimoCaracter);
```

#### Prácticas
[Ejercicio 25](../ejercicios/consignas/js/ej25.md)
[Ejercicio 26](../ejercicios/consignas/js/ej26.md)


includes
indexOf
lastIndexOf
replace

slice
split
substr
substring

trim






#### Operador de asignación y aritméticos
* Simple
* Aritméticos
* Asignación y Aritméticos

#### Operadores de comparación 
* Simple
* Estricto

#### Operadores lógicos

#### Precedencia de operadores

#### Cambio de tipo

#### Estructuras de control
* If/Else
* Operador Ternario
* Uso de Expresiones
* Switch
* Truthy and Falsy

#### Estructuras de repetición
* for
* while
* do/while
* break

#### Funciones
* Declaración y uso
* Funciones anónimas
* Retornar un valor
* Parámetros
* Objeto arguments dentro de una función
* Funciones anidadas

####  Array
* Índices
* Asignación de valores
* Métodos y Propiedades más usadas

#### Estructuras de repetición sobre un array
* ForEach
* Map
* Filter

#### Object
* Definición objeto literal
* Crear / acceder a una propiedad de un objeto
* Propiedades dinámicas de un objeto

#### Callbacks

#### Visibilidad
* Scope
* Variables Globales / Variables Locales
* Hoisting
* Closure

#### Parámetros por copia o referencia

#### Recursividad

#### Modo estricto

#### Objectos avanzado
* Métodos de un objeto
* Prototype
* Funciones constructoras
* Clases