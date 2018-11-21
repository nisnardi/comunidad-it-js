
## Trabajo Integrador
* En esta etapa del curso nos queda integrar todo lo que vimos hasta el momento
* Vamos a necesitar tener la última versión del proyecto para poder seguir desde donde dejamos en Node.js
* Podes descargar el proyecto en el [siguiente link (branch nodejs)](https://github.com/nisnardi/comunidad-it-proyecto-integrador-node-js/tree/nodejs)
* También vamos a restablecer nuestra base de datos



* Para poder conectar Node.js con MongoDB tenemos que utilizar un driver
* Existe un módulo llamado `mongodb` que nos permite interactuar desde Node.js con MongoDB
* Podes leer más sobre este módulo en su [documentación](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/connect/)

```bash
npm install mongodb --save
```

* Luego de instalar el módulo de MongoDB podemos requerirlo desde nuestro proyecto

```js
const MongoClient = require('mongodb').MongoClient
```

* Para poder conectarnos necesitamos saber la url donde está corriendo MongoDB
* Si mongo está corriendo localmente y en el puerto por defecto
* Creamos la variable dbName con el nombre de la base de datos que quermeos utilizar
* Creamos la variable collectionName con el nombre de la colección que quermeos utilizar

```js
const url = 'mongodb://localhost:27017';
const dbName = 'apple';
const collectionName = 'products';
```

* Vemos que utiliza `mongodb` como protocolo
* `localhost` establece que MongoDB está corriendo en nuestra máquina
* `27017` es el puerto que estamos utilizando (por defecto)
* `apple` es el nombre de la base de datos a la cual nos queremos conectar
* Para poder utilizar MongoClient tenemos que crear una nueva instancia pasando la url donde nos queremos conectar

```js
const client = new MongoClient(url);
```

* Una buena práctica es tener todos estos datos de configuración en un módulo externo
* El objeto `MongoClient` tiene un método `connect` que nos permite conectar con la base de datos
* También acepta un `callback` como segundo parámetro que se va a ejecutar cuando nos conectemos con MongoDB
* Este callback va a recibir 2 parámetros:
  * error: siguiendo el standard de Node.js este callback puede recibir un error de conexión
  * client: el cliente que nos permite communicarnos con MongoDB
* Luego de utilizar una conexión debemos cerrarla para no dejarla abierta (a no ser que lo necesitemos)
* Utilizamos el método `close` para cerrar la conexión con una base de datos
* Vamos a unir todo lo que vimos hasta acá para conectarnos con MongoDB

```js
// Obtenemos el objeto MongoClient
const MongoClient = require('mongodb').MongoClient

// Configuramos la url dónde está corriendo MongoDB, base de datos y nombre de la colección
const url = 'mongodb://localhost:27017';
const dbName = 'apple';
const collectionName = 'products';

// Creamos una nueva instancia de MongoClient
const client = new MongoClient(url);

// Utilizamos el método connect para conectarnos a MongoDB
client.connect(function (err, client) {
  // Acá va todo el código para interactuar con MongoDB
  console.log("Conectados a MongoDB");
  
  // Luego de usar la conexión podemos cerrarla
  client.close();
});
```

## Elegir la base de datos
* Utilizamos el cliente que creamos para establecer la base de datos que queremos elegir por medio del método `db`
* El método `db` acepta un string como parámetro con el nombre de la base de datos que queremos elegir
* Retorna un objecto que representa la base de datos

```js
  const db = client.db('apple');
```

## Buscar documentos
* Al igual que en el cliente de MongoDB lo primero que tenemos que hacer es seleccionar la colección con la cual queremos interactuar
* Usamos el método `collection` para seleccionar la colección

```js
  const coleccion = db.collection( 'products' );
```

* Ahora que ya tenemos una conexión y la colección podemos ejecutar una query en la base de datos
* Las colecciónes tienen el método `find` que nos permite ejecutar una consulta
* Funciona de manera similar al cliente de MongoDB pero no exactamente igual
* El método `find` retorna un cursor por lo cual tenemos que llamar al método `toArray` para transformar ese resultado a un array

```js
 coleccion.find().toArray(function(err, productos) {
  console.log(productos);
});
```

* De esta forma podemos buscar documentos en la base de datos
* Vamos a agregar esta funcionalidad a nuestro proyecto
* También borramos el array de products

**index.js**
```js
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
const dbName = 'apple';
const collectionName = 'products';
```

* Para poder mostrar los productos desde la base de datos tenemos que modificar la ruta/controller y el template de products

```js
app.get('/products', function (req, res) {
  const client = new MongoClient(url);
  client.connect(function (err, client) {
    const db = client.db(dbName);
    const coleccion = db.collection(collectionName);
    coleccion.find().toArray(function (err, productos) {
      client.close();
      res.render('products', { products: productos, selected: { products: true } });
    });
  });
});
```

**products.handlebars**
```html
<h1>Apple - Products</h1>
<p>Listado de productos</p>

<ol>
{{#each products}}
  <li>{{this.name}}</li>
{{/each}}
</ol>

<h2>Productos Por AJAX</h2>
<div id="productos">
  <img src="/img/loading.gif" alt="loading" width="30" />
</div>
```

* Al llamar a `http://localhost:3000/products` obtenemos la lista de productos desde la base de datos
* En este proyecto tenemos otra forma de listar los productos usando ajax por lo cual vamos a modificar la ruta/controller de api para que retorne también los mismos productos

**index.js**
```js
app.get('/api/products', function (req, res) {
  const client = new MongoClient(url);
  MongoClient.connect(url, function(error, db) {
    var coleccion = db.collection('products')
    coleccion.find().toArray(function(err, productos) {
      db.close()
      res.json(productos)
    })
  })
})
```

* Al modificar la respuesta de nuestra ruta tenemos que cambiar la forma en la que mostramos los datos en el llamado de AJAX
* Tenemos que llamar a `crearListaDeProductos(respuesta)` con tan solo la respuesta ya que es un array de productos
* Dentro de la función `crearListaDeProductos` ya no obtenemos sólo el nombre del producto sino que es un objeto
* Es por eso que cambiamos la forma de obtener el nombre del producto `elemento.textContent = producto.name`
* Si realizamos estos cambios podemos ver el AJAX funcionando de nuevo

**script.js**
```js
  const crearListaDeProductos = (productos) => {
    const lista = document.createElement('ul')
    const contenedor = document.querySelector('#productos')
    
    productos.forEach((producto) => {
      const elemento = document.createElement('li')
      elemento.textContent = producto.name
      lista.appendChild(elemento)
    })
 
    contenedor.appendChild(lista)
  }

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        const respuesta = JSON.parse(xmlhttp.responseText);
        ocultarLoader()
        crearListaDeProductos(respuesta)
      }
  };
```

* Ahora nuestras rutas muestran los mismos productos
* Este sería un muy buen momento para buscar la forma de crerar una función/modulo que encapsule esta funcionalidad así tenemos todo este código en un solo lugar

## Buscar un documento
* Ahora que ya listamos los productos estaría bueno poder ver el detalle de cada producto
* Vamos a tener que modificar tanto la ruta/controller de producto como también el template
* También necesitamos modificar el template de productos para que nos lleve a la pagina de detalle de cada producto

**products.handlebars**
```html
<ol>
{{#each products}}
  <li>
    <a href="/products/{{this.name}}">
      {{this.name}}
    </a>
  </li>
{{/each}}
</ol>
```

* Modificamos el template de `products` para que cada producto tenga un link a su descripción
* Utilizamos la propiedad name para crear la url a donde queremos mandar al usuario a ver el detalle
* Vamos a crear links similares a `http://localhost:3000/products/MacBook`
* Para buscar un sólo documento utilizamos el método `findOne`
* Este método acepta como primer parámetro el criterio de búsqueda como vimos en el cliente de mongo
* Modificamos la ruta para que reciba un parámetro `name` en lugar de `id`, este cambio es sólo para entender que es la propiedad name y no id
* `findOne` retorna en el callback el documento encontrado

**index.js**
```js
app.get('/products/:name', function (req, res) {
  const name = req.params.name

  MongoClient.connect(url, function(error, db) {
    var coleccion = db.collection('products')
    coleccion.findOne({name: name}, function(err, producto) {
      db.close()
      res.render('product', { product: producto })
    });
  })
})
```

* Recordamos que el objeto `request` tiene la propiedad `params` para obtener el valor pasado por url y que definimos con `:name`
* Ahora sólo nos queda modificar el template de `product`

**product.handlebars**
```bash
<a href="/products">Ir a Products</a>
{{#if product}}
  <h2>{{product.name}}</h2>
  <div class="categorias">
    {{#each product.categories}}
      <span>{{this}}</span>
    {{/each}}
  </div>
  <div>Precio: U$S{{product.price}}</div>
  <div>Stock: {{product.stock}}</div>
  <div>
    <img src="/img/products/{{product.picture}}" />
  </div>
{{else}}
  <div>No hay productos</div>
{{/if}}
```

* En este template accedemos a cada una de las propiedades del objeto producto que son las mismas que tiene el documento JSON obtenido desde la base de datos
* Recorremos las categorias utilizando el helper `each` ya que es un array
* Podemos mostrar la imagen del producto combinando la ruta utilizando la propiedad `product.picture`
* Para agregar las fotos de los productos creamos la siguiente estructura de carpetas:
```
.
└── public
    ├── img
        └── products

```
* Podes descargar todas las fotos de productos desde el [siguiente link](../assets/db/products)
* Copiar todas las fotos descargadas a la `carpeta public/img/products`
* Si el usuario ingresa una url que no corresponde con un producto mostramos el mensaje de 'No hay productos`
* Podes cambiar este mensaje por uno que te guste más!

## Crear un documento
* Para crear un nuevo documento lo vamos a hacer utilizando un template y ruta nueva
* También vamos a tener que modificar el template de productos para agregar un botón de crear nuevo producto

**products.handlebars** 
```html
<a href="/productos/nuevo">+ Nuevo Producto</a>
```

* Creamos el archivo productform.handlebars dentro de la carpeta views
* Agregamos el siguiente formulario

**productform.handlebars** 
```html
{{#if message}}
  <div class="success">{{message}}</div>
{{/if}}
<div>
  <a href="/products">volver a productos</a>
</div>
<h1>Crear un nuevo producto</h1>
<form action="/productos/nuevo" method="post">
  <div>
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre" required>
  </div>
  <div>
    <label for="precio">Precio</label>
    <input type="text" name="precio" id="precio" required>
  </div>
  <div>
    <label for="stock">Stock</label>
    <input type="text" name="stock" id="stock" required>
  </div>
  <div>
    <label for="imagen">Imagen</label>
    <input type="text" name="imagen" id="imagen" required>
  </div>
  <input type="submit" value="Crear">
</form>
```

* Ahora sólo nos queda escribir las rutas 
* Creamos una ruta por `GET` sólo para renderizar el formulario vacío
* También creamos una ruta por `POST` a donde vamos a `submitear` los valores para crear el producto
* Para crear un producto utilizamos el método `insertOne` que acepta un documento como primer parámetro y un callback como segundo
* El `callback` recibe un error o una respuesta

**index.js**
```js
app.get('/productos/nuevo', function(req, res) {
  res.render('productform')
})

app.post('/productos/nuevo', function(req, res) {
  const producto = { 
    name: req.body.nombre, 
    price: parseInt(req.body.precio),
    stock: parseInt(req.body.stock), 
    picture: req.body.imagen, 
    categories: ["macbook", "notebook"]
  }
  
  MongoClient.connect(url, function(error, db) {
    var coleccion = db.collection('products')
    coleccion.insertOne(producto, function(error, resultado) {
      res.render('productform', {message: 'Producto creado!'})
    })
  })
})
```

* Luego de crear el nuevo producto mostramos un mensaje para notificar al usuario sobre la acción realizada
* También podríamos definir un mensaje de error por si las cosas no sale bien
* En esta ruta deberíamos agregar validación para asegurarnos que lleguen los datos de forma correcta
* Dado que todos los valores llegan en formato de string tenemos que transformar el precio y stock a número
* Y ya que estamos tocamos el css para mostrar mejor el mensaje

**styles.css**
```css
.success {
  padding: 10px;
  background-color: lightgreen;
  color: green;
  margin-right: 30px;
  margin-top: 10px;
}
```

## Borrar un documento
* Para borrar un producto vamos a crear una nueva ruta
* Utilizamos el método `deleteOne` de coleccion para borrar un documento
* Dado que queremos estar seguros de borrar el producto correcto vamos a utilizar la propiedad `_id`
* Al ser `_id` un tipo de dato especial de MongoDB tenemos que requerir el módulo `ObjectID de mongodb`
* Vamos a ejecutar esta ruta por `POST` y recibimos el parámetro `_id` por la url
* Luego de borrar el documento utilizamos el método `redirect` que tiene el objeto `response` para mandar al usuario de nuevo a la lista de productos

**index.js**
```js
const ObjectId = require('mongodb').ObjectID;

app.post('/productos/borrar/:id', function(req, res) {
  const id = req.params.id

  MongoClient.connect(url, function(error, db) {
    var coleccion = db.collection('products')
    coleccion.deleteOne({_id: ObjectId(id)}, function(err, resultado) {
      res.redirect('/products');      
    })
  })
})
```

* Ahora sólo nos queda agregar el botón para borrar un producto
* Agregamos el siguiente formulario en el template de producto

**product.handlebars**
```html
<a href="/products">Ir a Products</a>
{{#if product}}
  <h2>{{product.name}}</h2>
  <div class="categorias">
    {{#each product.categories}}
      <span>{{this}}</span>
    {{/each}}
  </div>
  <div>Precio: U$S{{product.price}}</div>
  <div>Stock: {{product.stock}}</div>
  <div>
    <img src="/img/products/{{product.picture}}" />
  </div>


  <form action="/productos/borrar/{{product._id}}" method="post">
    <input type="submit" value="Borrar">
  </form>

{{else}}
  <div>No hay productos</div>
{{/if}}
```

* De esta forma ya podemos borrar productos desde nuestro sitio

## Actualizar un producto
* Para actualizar un producto vamos a crear primero el formulario
* Creamos el siguiente archivo, copiamos y pegamos el siguiente código

**updateproductform.handlebars**
```html
{{#if message}}
<div class="success">{{message}}</div>
{{/if}}
<div>
  <a href="/products">volver a productos</a>
</div>
<h1>Actualizar un producto</h1>
<form action="/productos/update/{{product._id}}" method="post">
  <div>
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre" value="{{product.name}}" required>
  </div>
  <div>
    <label for="precio">Precio</label>
    <input type="text" name="precio" id="precio" value="{{product.price}}" required>
  </div>
  <div>
    <label for="stock">Stock</label>
    <input type="text" name="stock" id="stock" value="{{product.stock}}" required>
  </div>
  <div>
    <label for="imagen">Imagen</label>
    <input type="text" name="imagen" id="imagen" value="{{product.picture}}" required>
  </div>
  <input type="submit" value="Actualizar">
</form>
```

* Este formulario es muy similar al de crear pero tiene algunas diferencias
* Podríamos usar sólo un formulario para ambos casos pero creamos dos para que sea más fácil explicar
* Este formulario utiliza una variable `product` donde tenemos todos los datos del producto seleccionado
* La primer diferencia que encontramos es en el valor del atributo action del formulario
* En este caso vamos a enviar los datos a la siguiente ruta `/productos/update/{{product._id}}`
* Esta ruta se crea de forma dinámica según el valor _id del producto que recibe este formulario
* También vamos a usar las propiedades `name, price, stock y picture` del producto como valores del atributo value de cada uno de los inputs
* De esta forma asignamos inicialmente el valor que tiene cada uno de los atributos del producto
* El botón de submit ahora dice Actualizar en lugar de Crear
* Cuando el usuario submitea estos datos vamos a enviar a la ruta `/productos/update/{{product._id}}` todos los valores que tiene el formulario
* Si el usuario modifica algún valor será enviado como parte de los datos del producto modificado
* Los datos que no son modificados quedan igual que antes
* Ya que tenemos el formulario armado podemos crear la ruta que lo va a renderizar

**index.js**
```js
app.get('/productos/update/:id', function (req, res) {
  const id = req.params.id;
  const client = new MongoClient(url);

  client.connect(function (err, client) {
    const db = client.db(dbName);
    const coleccion = db.collection(collectionName);
    coleccion.findOne({ _id: ObjectId(id) }, function (err, producto) {
      client.close();
      res.render('updateproductform', { product: producto });
    });
  });
});
```

* En esta ruta recibimos el parámetro :id que representa el id del producto a actualizar
* Usamos de nuevo el método `findOne` del driver de mongo para buscar un producto por `_id`
* Recibimos en el callback el producto encontrado y se lo pasamos al formulario
* Luego express envía el resultado final de unir los datos del producto con los del formulario
* Ya tenemos creados el template y la ruta por lo cual podemos agregar el link para modificar un producto

****
```html
<form action="/productos/borrar/{{product._id}}" method="post">
  <input type="submit" value="Borrar">
  <a href="/productos/update/{{product._id}}">Actualizar producto</a>
</form>
```

* Dado que vamos a utilizar el método GET en nuestra ruta para actualizar el producto podemos utilizar un link para direccionar al usuario al formulario
* Probamos todo el código junto y vemos como al hacer click en `actualizar producto` dentro del detalle del producto nos llega a un formulario que tiene inicialmente todos los datos cargados
* Modificamos algunos valores
* Hacemos click en el botón `Actualizar`
* En este momento se ejecuta el action del formulario y envía los datos por post a la ruta `/productos/update/{{product._id}}`
* Para realmente poder actualizar los datos vamos a tener que crear la misma ruta pero ahora en versión POST en lugar de GET

**index.js**
```js
app.post('/productos/update/:id', function (req, res) {
  const id = req.params.id;
  const producto = {
    name: req.body.nombre,
    price: parseInt(req.body.precio),
    stock: parseInt(req.body.stock),
    picture: req.body.imagen
  }

  const client = new MongoClient(url);

  client.connect(function (err, client) {
    const db = client.db(dbName);
    const coleccion = db.collection(collectionName);
    coleccion.updateOne({ _id: ObjectId(id) }, { $set: producto }, function (err, respuesta) {
      coleccion.findOne({ _id: ObjectId(id) }, function (err, producto) {
        client.close();
        res.render('updateproductform', { message: 'Producto actualizado!', product: producto });
      });
    });
  });
})
```

* Al ejecutar el formulario enviamos por POST los datos del producto actualizado
* Utilizando los parámetros del request vamos a obtener el id del producto que vamos a actualizar
* Luego tomamos los valores enviados desde el formulario y creamos un objeto producto
* Asignamos a cada propiedad el valor correspondiente, por ejemeplo `name: req.body.nombre`
* Luego nos conectamos a mongo
* Utilizamos el método `updateOne` para actulizar un producto
* Este método acepta como primer valor un objecto con el cual vamos a buscar un documento utilizando las propiedades del mismo
* Dado que tenemos el _id del producto lo utilizamos como criterio de búsqueda
* El segundo parámetro es un objeto con todos los valores que queremos actualizar
* En nuestro ejemplo vamos a actualizar todos los campos ya que no estamos haciendo diferencia entre los valores que fueron actualizados y los que no
* Si bien ya actualizamos nuestro producto a nivel base de datos todavía nos queda renderizar algo para mostrarle al usuario
* Para poder recrear el formulario actualizado vamos a buscar el producto nuevamente
* Utilizamos el método `findOne` para buscar un producto y utilizamos el _id
* Ahora sólo queda unir el formulario con los datos del producto y un mensaje de éxito
* Pasamos los valores message y product los cuales serán remplazados en la vista updateproductform

```js
res.render('updateproductform', { message: 'Producto actualizado!', product: producto });
```

* Enviamos la respuesta al cliente y terminamos la operación
* De esta forma logramos crear, obtener, modificar y borrar un producto
* Podemos utilizar esta técnica para crear, obtener, modificar y borrar cualquier otro tipo de dato como podría ser por ejemplo un usuario
* Cada uno de estos temas abre la posibilidad de aprender muchas cosas más y espero que lo sigas haciendo