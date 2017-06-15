# Internet

## ¿Qué es?

En 1970 Vint Cerf y Bob Kahn crean un proyecto militar llamado ARPANET (Advance Research Projects Agency NETwork).

La idea era crear un sistema de comunicación que pueda sobrevivir un ataque nuclear y para lograr este objetivo tenía que ser distribuido (No estar centralizado) y tener conectividad desde principio a fin. También se valoraba poder escalar o crecer.

En 1970 no había un método standard para comunicarse por red
Vint Cerf y Bob Kahn inventan un protocolo llamado Internet Working Protocol y de esta forma nace Internet, Red de redes como una una filosofía de diseño.

### Internet:

* Creada para mover información
* Es de todos
* Cualquiera se comunica con cualquiera
* Gente compartiendo conocimiento

Dado que Internet es una red, es decir que son un montón de computadoras conectadas de distintas maneras vamos a ver los tipos de datos y formas que se pueden transmitir.

### Unidades
Las computadoras saben leer e interpretar binario, es decir que utilizan 0 y 1.

Bits: El bit es la unidad mínima de información empleada en informática, en cualquier dispositivo digital, o en la teoría de la información. 

Ejemplos: ON/OFF 1/0 Si/No

Tabla de unidades

* 8 Bits hacen 1 Byte
* 1000 Bytes hacen 1 Kilo Byte (KB)
* 1000 KB hacen 1 Mega Byte (MB)

### Formas de comunicación:
* Electricidad (depende de cables)
* Luz: Fibra optica (No se pierde señal por la distancia)
* Radio: Wireless/Wifi (binario pasado a frecuencia y pierde efectividad a la distancia)

### Conceptos de Redes:
* Bandwidth / Ancho de banda: Capacidad de transmición, se mide en Bitrate.
* Bitrate: Es una unidad basada en la cantidad de bits por segundo.
* Latency / Latencia: tiempo que tarda un bit en ir desde el emisor hasta el receptor.

### Protocolo:
Set de reglas y standars bien conocidos para comunicarce entre máquinas

### Internet Protocol (IP)
* La dirección en Internet es tan solo un número llamado Internet Protocol (IP)
* Cada dispositivo es único y tiene una dirección única también

#### Ejemplos de dirección de IP: 

IPv4 (1973)
```
  174.129.14.120
```
* Cada una de estas secciones van desde 0 a 255 representan un Byte
* Tiene una longitud de 32 bits
* Se pueden generar 4 Billones de direcciónes únicas

IPv6
```
3FFE:F200:0234:AB00:0123:4567:8901:ABCD
```
* Tiene una longitud de 128 bits
* Se pueden generar muchas pero muchas direcciones únicas

### DNS: Domain Name System

Ejemplo:
```
www.example.com
174.129.14.201
```
* Forma de conectar nuestra compu al destino
* Estan divididos por ejemplo en: .com .org .net
* Se distribuyen en gerarquía
* Fué creado para que sea un protocolo de comunicación Público/Abierto

#### DNS Spoofing: 

Los hackers pueden utilizar una técnica para retornar otro IP para un dominio y de esta forma controlar todo el tráfico que pasar por ahí.

Ejemplos:
nslookup google.com
```
Non-authoritative answer:
Name:	google.com
Address: 64.233.190.101
Name:	google.com
Address: 64.233.190.102
Name:	google.com
Address: 64.233.190.138
Name:	google.com
Address: 64.233.190.100
Name:	google.com
Address: 64.233.190.113
Name:	google.com

Address: 64.233.190.139
```

nslookup mercadolibre.com.ar
```
Non-authoritative answer:
Name:	mercadolibre.com.ar
Address: 209.225.49.78
Name:	mercadolibre.com.ar
Address: 216.33.197.78
```

* Tanto DNS como IP están diseñados para poder escalar.
* No existe una conección directa para que los datos lleguen de una computadora a otra.
* No necesita seguir un camino fijo ya que puede tomar distintos caminos
* Los datos viajan en paquetes.
* En los paquetes viajan distintos tipos de datos.
* Se puede dividir en paquetes más chicos si el contenido es muy grande.
* Al llegar todos los paquetes se puede restablecer el contenido original de gran tamaño.
* Cada paquete sabe de donde viene y hacia donde va.

### Routers:
* Se encargan de direccionar los paquetes
* Si una ruta esta congestionada busca otro camino

#### Internet Protocol (IP)
* El router busca el camino más barato para llegar a destino.
* El camino puede no ser el más efectivo.
* Fault Tolerant: Se pueden mandar paquetes por distintos caminos si hay algún problema en algún lado.

### TCP: Transmission Control Protocol
* Maneja o administra que todos los paquetes enviados y recibidos
* Es como un correo garantizado
* Al recibir todos los paquetes TCP firma que esta todo bien y le envía a la otra computadora un recibo
* En caso de faltar algún paquete TCP no lo va a confirmar y el server va a tener que enviar todos los paquetes restantes

#### TCP + Router:
* Escalan
* Cuantos más routers tenemos más confiable es
* Se puede escalar/crecer sin cortar el servicio
* Diagrama de Connect/Communicate/Collaborate

### HTTP & HTML
Web Browser: Navegadores como Chrome, IE, Firefox
URL: Uniform Resource Locator

### HTTP: Hyper Text Transfer Protocol
* Podemos pensarlo como el lenguaje que usa una computadora para pedile un documeneto a otra.

```
GET Request
  GET NombreDeDocumento.html
```

### HTML: Hyper Text Markup Language
* Lenguage para decirle al Browser como tiene que mostrar/estructurar un documento.
* Tags: Son etiquetas que representan un determinado elemento, por ejemplo: un título, párrafo, link o imágen.
* En el caso de archivos externos como puede ser una imágen o un video van a tener un dirección única.
* El browser manda pedidos individuales por cada uno de los recursos (videos, imagenes, etc) y los va a mostrar cuando termine de recibirlos (descargar)

### ¿Cómo enviar datos desde una compu (Cliente) a otra (Servidor)?:
* Se envían los datos en formato de texto plano y usando el método POST
Query=bla+bla
* Server envía Cookie con la respuesta para saber quien sos (la cookie es un ID)
* En el próximo pedido se envía los datos de la cookie y de esa forma el server sabe quien sos.

Algunas cosas que tenemos que saber de Internet es:
* Es completamente abierta.
* Las conecciones son compartidas.
* La información se envía en texto plano.
* Tiene problema de seguridad.
* Se necesita algún canal seguro

#### Secure Channel
* SSL: Secure Socket Layer
* TLS: Transport Layer Security
* SSL & TLS: Capa que rodea y protege nuestros datos
* Nace HTTPS: Hyper Text Transfer Protocol Secure
* La comunicación entre el Server y Cliente se hace utilizando un Certificado Digital.
* Estos certificados los dan entidades que verifican la identidad del sitio (como un DNI).
* Si no tiene un certificado válido el browser nos muestra un error por seguridad.

#### HTTP & DNS: 
* Menejan el envío y recepción de los archivos web
* TCP/IP & Routing: Hacen posible el envío y recepción de los archivos rompiendo en paquetes más chicos el contenido, transportandolo y rearmando los paquetes al llegar.
* Todas estas capas trabajan juntas

Todos estos trajan juntos:

```
HTTP & DNS
TCP/IP & Routers
Cables / Radio / Wifi
```

## Videos

Los siguientes videos son parte de [Code.org®](https://code.org) que es una organización sin fines de lucro dedicada a expandir el acceso a la informática y aumentar la participación de las mujeres y minorías.

### Internet
* [¿Qué es Internet?](https://www.youtube.com/watch?v=Dxcc6ycZ73M)
* [Internet: Alambres, Cables y Wifi](https://www.youtube.com/watch?v=ZhEf7e4kopM)
* [Internet: Direcciónes IP y DNS](https://www.youtube.com/watch?v=5o8CwafCxnU)
* [Internet: Paquetes, Routing y Confiabilidad](https://www.youtube.com/watch?v=AYdF7b3nMto)
* [Internet: HTTP y HTML](https://www.youtube.com/watch?v=kBXQZMmiA4s)

### Extras
* [Internet: Encriptado y Llaves públicas](https://www.youtube.com/watch?v=ZghMPWGXexs)
* [Internet: Seguridad Informática y Crimen](https://www.youtube.com/watch?v=AuYNXgO_f3Y)
* [Internet: ¿Cómo funciona un buscador?](https://www.youtube.com/watch?v=LVV_93mBfSU)

