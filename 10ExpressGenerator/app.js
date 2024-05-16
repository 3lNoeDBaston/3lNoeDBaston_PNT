//tenemos que tener las librerias

var createError = require('http-errors');
var express = require('express');
// path archivos xd
var path = require('path');
var cookieParser = require('cookie- parser');

//vamos a crear una ruta inicial
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

//vamos a visualizar los elementos
var app = express ();

//vamos a visualizar las views
//sir ve para decirle al codigo donde se enceutra cada archivo de cada vista xd
app.set('views', path.join(__dirname, 'views'));

//se tiene que definir el tipo de plantilla

app.set('views engine', 'ejs');


//vamos a usar la ruta
app.use('/', indexRouter);

//definir si hay mas rutas linea 11
//TENGO SUEÑOOOOOOO
app.use('/users', userRouter)

//vamos a definir los directorios publicos
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//por si hay un errro 404
app.use(function(req, res, next)
    {
        next(createError(404));
    });

    //para el manejo del handler
    app.use(function(err, req, res, next)
    {
        res.locals.message = err.message;
        //? es operador ternario xd
        res.local.error = req.app.get('env') === 'development' ? err :{};

        //vamos a un error 500
        res.status(err.status || 500);
        res.render('error');
    });

    module.exports = app;