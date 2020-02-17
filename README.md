# App1 Sirena Test

Hola!! , esta es la documentacion para poder empezar a probar la aplicacion 1 del test. Para realizar el mismo use NodeJS, Express.JS (server), Axios para los request, Mongoose para conexión con el schema y la DB (MongoDB), JS en general (ECMAScript 6)

## Comencemos

Comparto la coleccioón en POSRTMAN para realizar pruebas sobre la API

https://www.getpostman.com/collections/37ab1ddf84108a7c1321


## SERVERLESS

El repositorio esta coenctado a una app desplegada en HEROKU, por ello todo cambio genera un rebuild. A su vez la APP, esta coenctada contra un cluster Mongo DB creado en Mongo DB Atlas. Ambas sobre cuentas propias.

HEROKU: https://app1sirenatest.herokuapp.com/
MONGODB Atlas: sirenaAPP1DB 

## LOCAL

Clonar o descargar el repositorio. 

Crear en RAIZ archivo "variables.env" con la entrada DB_URLP:

Mongo DB local ejemplo: 
DB_URLP=mongodb://localhost/sirenaAPP1DB

Cluster en la nube utilizar el string de conexion: 
DB_URLP=mongodb+srv://sirena:ZwEZulmpGFU9tbaE@sirenaapp1db-qdv2e.mongodb.net/test?retryWrites=true&w=majority
HOST=localhost


NOTAS:
> No instalé CORs para que se pueda probar loibremente por medio de postman.
> La api no tiene midlleware de autorización, normalmente uso JWT para seguridad, lo podria agregar facilmente.
>utilice async/awaite para trabajar promesas, me es mas claro el codigo de esta forma pero se podria trabajar tranquilamente con promesas.
>la cuenta HEROKIU es gratuita y por ende entra en modo sleep cada una hora aproximadamente, simplemente se puede intentar consumir un metodo para despertarla:
https://app1sirenatest.herokuapp.com/movies
