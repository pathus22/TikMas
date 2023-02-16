var lenguajes = false;

function addalllisteners(){

    document.getElementById("botonpatito").addEventListener("click", patito);
}

function patito(){
    document.getElementById("btnpatito").innerHTML = "Pato";
}

function mostrarEducacionEnLenguajes()
{
    lenguajes = !lenguajes;

    if(lenguajes){
        document.getElementById("btnlenguajes").innerHTML = "Ocultar Educacion en Idiomas";
        document.getElementById("educacionEnIdiomas").innerHTML = 
        `
        <h3><u>INSTITUTO BRITANICO</u> <a href="https://www.liceobritanico.com/">(ir a sitio)</a></h3> 
        <p>Ingles B2 - 8 años de uso</p>
        <p>2005-2013</p>
        <hr>
        <h3><u>INSTITUTO LENGUAS VIVAS</u> <a href="https://www.lenguasvivas.net/">(ir a sitio)</a></h3> 
        <p>Portugues A2</p>
        <p>2014-2016</p>
        <hr>
        ` 
    }
    else{
        document.getElementById("btnlenguajes").innerHTML = "Ver Educacion en Idiomas";
        document.getElementById("educacionEnIdiomas").innerHTML = "";
    }
}

