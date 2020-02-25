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
        confirmarCookie();
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


function inicializar(){
    var btn;
    btn = document.getElementById("botones");
    btn.addEventListener("click", validar);
}

function pasarPag(){
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
    document.getElementById("pag").innerHTML = "<h4>Se elimino la cookie!!</h4>";
    setCookie(nombre,"",0);

}

function confirmarCookie(){
    var usu = document.getElementById('Usuario').value;
    var con = document.getElementById('password').value;
    var array = document.cookie.split("=");
    for ( var i=0;i<array.length;i++){
    if(usu == array[i] && con == array[i+1]){
        document.getElementById("pag").innerHTML = "<h4>¡¡Sesión Iniciada Correctamente!!</h4>";
        pasarPag();
        var n = "Logeado Correctamente";
        var x = document.getElementById("Usuario").value;
        tiempo = 1;
        setCookie(n,x,tiempo);
        break;
    }else{
        document.getElementById("pag").innerHTML = "<h4>¡¡ERROR!!</h4>";

    }

}
}
