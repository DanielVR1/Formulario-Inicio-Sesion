var comprob = false;
function validar() {
    var usuario = document.getElementById('Usuario').value;
    var contraseña = document.getElementById('password').value;
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(usuario)){
        comprob = true;
    }else if (/[0-9]{9}/.test(usuario)){
        comprob = true;
    }else {
        alert("Error de formato.");
        comprob = false;
    }

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8}$/.test(contraseña)){
        comprob = true;
    }else{
        alert("Contraseña incorrecta.");
        comprob = false;
    }

    if(comprob == true){
        pasarPag();
        var nombre = "Cookie 1";
        var valor = document.getElementById('Usuario').value+" "+document.getElementById('password').value;;
        var tiempo = 1;
        setCookie(nombre,valor,tiempo);
    }
}

function mostrarContraseña(){
    var contraseña = document.getElementById("password");
    if(contraseña.type == "password"){
        contraseña.type = "text";
    }else{
        contraseña.type = "password";
    }
}

window.addEventListener("load", inicio);

function inicio(){

    if(document.cookie != "") pasarPag();

}

function inicializar(){
    var btn;
    btn = document.getElementById("botones");
    btn.addEventListener("click", validar);
}

function pasarPag(){
    document.getElementById("pag").innerHTML = "<h4>¡¡Sesión Iniciada!!</h4>";
    document.getElementById("logOut").innerHTML = "<a href='index.html'><input class='boton' type='button' id='eliminar' value='Cerrar Sesion'></a>";

    document.getElementById("eliminar").addEventListener("click", eliminarCookie);

}


function eliminarCookie(){
    var x = document.cookie;
    deleteCookie(x);
}

//COOKIES

function setCookie(nombre, valor, tiempo){
    var d = new Date();
    d.setTime(d.getTime()+tiempo*24*60*60*1000);
    var tiempo = "expires="+d.toUTCString();
    document.cookie = nombre+"="+valor+";"+tiempo+";path=/";
}

function getCookie(nombre){
    var nom= nombre+"=";
    var array = document.cookie.split(";");
    for(var i=0;i<array.length;i++){
        var c = array[i];
        while(c.charAt(0)==" "){
            c = c.substring(1);
        }
        if(c.indexOf(nombre) == 0){
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}

function deleteCookie(nombre){
    alert("Se elimino: "+document.cookie);
    setCookie(nombre,"",0);

}