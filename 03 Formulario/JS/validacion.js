/* javascript es un lenguaje de progracmacion multiparadigma
acepta programacion funcioal, no estructurado, POO, eventos 
Dento JS no existe int, double float, string, etc
para el manejo  de variables con tipo de dato no existe estandar ES6 el cual os dice que pra el manejo de variables tenemo:
VAR LET CONST*/

//vamos a hacer yba función para comprobar que el campo nombre sea mayor a 3 caracteres

function validar(formulario){
    if(formulario.nombre.value.length < 4){
        alert("por favor escribe mas de 3 caracteres para el nombre");
        formulario.nombre.focus();
        return false;
    }
    var abcOK ="qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var checkStr = formulario.nombre.value;
    alert(checkStr);
    var allValido= true;

    //vamos a hacer un bucle mediante el cual primero obtenga la cadena del nombre el cual primero obtenga la cadena del nombre y la separa en caracteres, una vez que tenga cada caracter debo de compararlo con la cadena que en este casi
    for( var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i); //separarla por caracteres
        for( var j=0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
    }
    if (!allValido) {
        alert("escriba unicamente letras en el campo de nombre")
        formulario.nombre.focus();
        return false;
    }
    

    var abcOK ="1234567890";

    var checkStr = formulario.edad.value;
    alert(checkStr);
    var allValido= true;

    //vamos a hacer un bucle mediante el cual primero obtenga la cadena del nombre el cual primero obtenga la cadena del nombre y la separa en caracteres, una vez que tenga cada caracter debo de compararlo con la cadena que en este casi
    for( var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i); //separarla por caracteres
        for( var j=0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
    }
    if (!allValido) {
        alert("escriba unicamente numeros en el campo de edad")
        formulario.nombre.focus();
        return false;
    }


    //para validar ek cirreo es necesatio contar con una espresion regular porque tenemos un formato el cual es
    //texto.texto@texto.texto

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    var txt= formulario.correo.value;
    alert("Email" + (b.text(txt)?" ":"no ")+ "valido");

    return b.test;
}








