//vamos a crear una funcion que se encargue de poder validar que exitan unicamente numeros dentro del capo de inversion
//operador ternario sive para poner a prueba todo lo que venga 
//e= event

function validarn(e)
{
    var teclado = (document.all)? e.keycode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;//expresion regular
    var codigo = string. fromCharCode(teclado);
    return patron.test(codigo);
}


function interes()
{
    var valor =  document.getElementById("cantidadi").value;
    var parseo = parseFloat(valor);
    var interes = parseo * (0.037/12);
    var total = interes + parseo;
    document.getElementById("saldoi").value = "$" + total;
}

function borrar(){
    document.getElementById("cantidadi").value = "";
    document.getElementById("saldoi").value = "";
}