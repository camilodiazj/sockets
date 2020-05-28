var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexion con el server');
});

//on = escuchar sucesos
socket.on('enviarMensaje', function(message) {
    console.log({
        Servidor: message
    });
});

//emit = Enviar información 
socket.emit('enviarMensaje', {
    user: 'kmilo',
    messsage: 'ola q ase'
}, function(respuesta) {
    console.log('respuesta server', respuesta);
});