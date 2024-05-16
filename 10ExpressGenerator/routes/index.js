var express = require('express');
var router = express.Router();

//ruta principl jjijiji
router.get('/', function(req, res)
{
    //render sirve para leeer el formato de plantillas
    res.render('index', {title: 'Ejemplo Express'});
});

module.exports = router;