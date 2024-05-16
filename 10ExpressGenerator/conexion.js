var mysql = require('mysql2');

//primero vamos a conectarbis

var conexion = mysql.createConnection(
    {
        host : 'localhost', //aqui va la ip
        database : 'alumnos4IV7',
        user : 'root',
        password : 'M1B3114D4m4_1206'
    });

//ejecutamos la conexion
conexion.connect(function(error)
{
    //si no conecta
    if(error)
        {
            throw error;
            console.log('solo juguito contigo');
        }
        else
        {
            console.log('si conecto');
        }
})

//vamos a consultar
conexion.query ('select * from registro', function(error, respuesta)
{
    if(error)
        {
            console.log('no tablita');
        }
        else
        {
            //como no se cuantos datos tengo debo de recorres para eso se ocupa
            respuesta.forEach(respuesta => 
                {
                    console.log(respuesta);
                });
        }
}
);

/*
//vamos a agregar
conexion.query('insert into registro(nombre, appat, apmat, correo, password) values("Diego Noé", "Hernández", "Rodríguez", "noeDBaston@gmail.com", "L4Burr174")', function(error)
{
    if(error)
        {
            throw error;
            console.log('No se pudo insertar');
        }
        else
        {
            console.log('Registro exitoso, ', respuesta);
        }
});

*/
//uncion para actualizar datos
const cambiar = "UPDATE registro SET nombre='Dana' WHERE boleta=2";
conexion.query(cambiar,  function(error)
{
    if(error)
        {
            throw error;
            console.log('No se pudo hacer el cambio');
        }
        else
        {
            console.log('Se pudieron actualizar los datos correctamente xd')
        }
});


//Funcion para borrar datos
const borrarxd = "DELETE FROM registro WHERE boleta= 12 ";
conexion.query(borrarxd, function(error)
{
    if(error)
        {
            throw error;
            console.log('No se pudieron eliminar los registros');
        }
        else
        {
            console.log('Se borraron los datos seleccionados');
        }
});