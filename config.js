/*=============================================
El process es un objeto global que corre en todo el entorno de desarrollo de nodeJS
=============================================*/
process.env.PORT = process.env.PORT || 4000;
process.env.SECRET = "noquieroquesesepa";
process.env.CADUCIDAD= 60*60*24*30;