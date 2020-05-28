const { io } = require('../server');

io.on('connection', client => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        user: 'Admin',
        message: 'Bienvenido wapo'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*  if (message.user) {
             callback({
                 respuesta: 'TODO SALIÓ BIEN!'
             });
         } else {
             callback({
                 respuesta: 'TODO MALIO SAL'
             });
         }; */


    });

});