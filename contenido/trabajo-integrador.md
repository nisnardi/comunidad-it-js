
## Trabajo Integrador
* En esta etapa del curso nos queda integrar todo lo que vimos hasta el momento
* Vamos a necesitar tener la última versión del proyecto para poder seguir
* Podes descargar el proyecto en el [siguiente link](/)
* Para poder conectar Node.js con MongoDB tenemos que utilizar un driver
* Existe un módulo llamado `mongodb` que nos permite interactuar desde Node.js con MongoDB
* Podes leer más sobre este módulo en su [documentación](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/connect/)

```bash
npm install mongodb --save
```

* Luego de instalar el módulo de MongoDB podemos requerirlo desde nuestro proyectos 

```js
const MongoClient = require('mongodb').MongoClient
```

* Para poder conectarnos necesitamos saber la url a donde está corriendo MongoDB
* Si mongo está corriendo en el puerto por defecto y localmente utiliamos la siguiente url

```js
const url = 'mongodb://localhost:27017/apple';
```

* Vemos que utiliza `mongodb` como protocolo
* `localhost` establece que MongoDB está corriendo en nuestra máquina
* `27017` es el puerto que estamos utilizando (por defecto)
* `apple` es el nombre de la base de datos a la cual nos queremos conectar
* Una buena práctica es tener todos estos datos de configuración en un módulo externo
* El objeto `MongoClient` tiene un método `connect` que nos permite conectar con la base de datos
* Este método acepta la `url` donde corre MongoDB como primer parámetro
* También acepta un `callback` como segundo parámetro que se va a ejecutar cuando nos conectemos con MongoDB
* Este callback va a recibir 2 parámetros:
  * error: siguiendo el standard de Node.js este callback puede recibir un error de conexión
  * db: si todo está bien este callback recibe un objeto db que nos permite interactuar con la base de datos
* Luego de utilizar una conexión debemos cerrarla para no dejarla abierta (a no ser que lo necesitemos)
* Utilizamos el método `close` para cerrar la conexión con una base de datos
* Vamos a unir todo lo que vimos hasta acá para conectarnos con MongoDB

```js
// Obtenemos el objeto MongoClient
const MongoClient = require('mongodb').MongoClient

// Configuramos la url dónde está corriendo MongoDB
const url = 'mongodb://localhost:27017/apple';

// Utilizamos el método connect para conectarnos a MongoDB
MongoClient.connect(url, function(error, db) {
  console.log("Conectados a MongoDB");
  
  // Acá va todo el código para interactuar con MongoDB
  
  // Luego de usar la conexión podemos cerrarla
  db.close();
});
```

## Buscar documentos
* Al igual que en el cliente de MongoDB lo primero que tenemos que hacer es seleccionar la colección con la cual queremos interactuar
* Usamos el método `collection` para seleccionar la colección

```js
  var coleccion = db.collection( 'products' );
```

* Ahora que ya tenemos una conexión y la colección podemos ejecutar una query en la base de datos
* Las colecciónes tienen el método `find` que nos permite ejecutar una consulta
* Funciona de manera similar al cliente de MongoDB pero no exactamente igual
* El método `find` retorna un cursor por lo cual tenemos que llamar al método `toArray` para transformar ese resultado a un array

```js
 coleccion.find().toArray(function(err, productos) {
  console.log(productos)
});
```

* De esta forma podemos buscar documentos en la base de datos
* Vamos a agregar esta funcionalidad a nuestro proyecto
* Para poder mostrar los productos desde la base de datos tenemos que modificar la ruta/controller y el template de products

**index.js**
```js
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/apple';

app.get('/products', function (req, res) {
  MongoClient.connect(url, function(error, db) {
    var coleccion = db.collection('products')
    coleccion.find().toArray(function(err, productos) {
      db.close()
      res.render('products', { products: productos, selected: { products: true }})
    })
  })
})
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
* Podes descargar todas las fotos de productos desde el [siguiente link](../assets/db/products)
* Si el usuario ingresa una url que no corresponde con un producto mostramos el mensaje de 'No hay productos`

## Crear un documento
* Para crear un nuevo documento lo vamos a hacer utilizando un template y ruta nueva
* También vamos a tener que modificar el template de productos para agregar un botón de crear nuevo producto

**products.handlebars** 
```html
<a href="/productos/nuevo">+ Nuevo Producto</a>
```

* Agregamos el template del formulario para crear un nuevo producto

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
* Utilizamos el método `deleteOne` para borrar un documento
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

****
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

## Actualizar un documento
* Para actualizar un documento vamos a reutilizar el template del formulario de productos
