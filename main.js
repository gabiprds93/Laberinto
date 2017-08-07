var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"
];
var celdas = new Array(mapa.length);
for (var i=0;i<mapa.length;i++)
	celdas[i]= new Array(mapa[0].length);
var laberinto = document.getElementById("laberinto");
var btnIzquierda = document.getElementById("btnIzquierda");
var btnDerecha = document.getElementById("btnDerecha");
var btnMover = document.getElementById("btnMover");
var actual;

function crearCeldas(nFilas, nColumnas)
{
    while(laberinto.childNodes.length >= 1)
    {
        laberinto.removeChild(laberinto.firstChild);
    }
    laberinto.border = "1";
    for(var i = 0; i < nFilas; i++)
    {
        var fila = document.createElement('tr');
        for(var j = 0; j < nColumnas; j++)
        {
            var columna = document.createElement('td');
            if(mapa[i][j] == "*")
            {
                columna.setAttribute("class", "pared");
            }
            else if(mapa[i][j] == "o")
            {
                columna.setAttribute("class", "inicio");
                actual = {x:i, y:j, direccion:"arriba"};
            }
            else if(mapa[i][j] == "W")
            {
                columna.setAttribute("class", "fin");
            }
            fila.appendChild(columna);
            celdas[i][j] = columna;
        }
        laberinto.appendChild(fila);
    }
}

function iniciar()
{
    var imagen = document.createElement("img");
    imagen.setAttribute("src", "inicio.png")
    imagen.setAttribute("width", "30px")
    celdas[actual.x][actual.y].appendChild(imagen);
}

crearCeldas(mapa.length, mapa[0].length);
iniciar();

btnMover.onclick = function()
{
    var x = actual.x;
    var y = actual.y;
    var direccion = actual.direccion;
    
    console.log(celdas[actual.x][actual.y].className)
    if(celdas[actual.x][actual.y].className == "inicio")
    {var imagen = document.createElement("img");
    imagen.setAttribute("src", "flechaArriba.png")
    imagen.setAttribute("width", "30px")
    celdas[actual.x][actual.y].removeChild(celdas[actual.x][actual.y].firstChild);
    celdas[actual.x][actual.y].appendChild(imagen);}
    
    if(direccion == "arriba")
    {
        if(mapa[x-1][y] == "_")
        {
            celdas[x][y].removeChild(celdas[x][y].firstChild);
            actual.x = x-1;
            var imagen = document.createElement("img");
            imagen.setAttribute("src", "flechaArriba.png");
            imagen.setAttribute("width", "30px")
            celdas[actual.x][y].appendChild(imagen);
        }
    }
    else if(direccion == "derecha")
    {
        if(mapa[x][y+1] == "_")
        {
            celdas[x][y].removeChild(celdas[x][y].firstChild);
            actual.y = y+1;
            var imagen = document.createElement("img");
            imagen.setAttribute("src", "flechaDerecha.png");
            imagen.setAttribute("width", "30px")
            celdas[x][actual.y].appendChild(imagen);
        }
    }
    else if(direccion == "abajo")
    {
        if(mapa[x+1][y] == "_")
        {
            celdas[x][y].removeChild(celdas[x][y].firstChild);
            actual.x = x+1;
            var imagen = document.createElement("img");
            imagen.setAttribute("src", "flechaAbajo.png");
            imagen.setAttribute("width", "30px")
            celdas[actual.x][y].appendChild(imagen);
        }
    }
    if(direccion == "izquierda")
    {
        if(mapa[x][y-1] == "_")
        {
            celdas[x][y].removeChild(celdas[x][y].firstChild);
            actual.y = y-1;
            var imagen = document.createElement("img");
            imagen.setAttribute("src", "flechaIzquierda.png");
            imagen.setAttribute("width", "30px")
            celdas[x][actual.y].appendChild(imagen);
        }
    }
}

btnDerecha.onclick = function()
{
    var x = actual.x;
    var y = actual.y;
        console.log(actual);
    if(actual.direccion == "arriba")
    {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "flechaDerecha.png");
        imagen.setAttribute("width", "30px")
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "derecha";
    }
    else if(actual.direccion == "derecha")
    {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "flechaAbajo.png");
        imagen.setAttribute("width", "30px")
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "abajo";
    }
    else if(actual.direccion == "abajo")
    {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "flechaIzquierda.png");
        imagen.setAttribute("width", "30px")
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "izquierda";
    }
    else if(actual.direccion == "izquierda")
    {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "flechaArriba.png");
        imagen.setAttribute("width", "30px")
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "arriba";
    }
}

btnIzquierda.onclick = function()
{
    var x = actual.x;
    var y = actual.y;
        console.log(actual);
    if(actual.direccion == "arriba")
    {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "flechaIzquierda.png");
        imagen.setAttribute("width", "30px")
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "izquierda";
    }
    else if(actual.direccion == "izquierda")
    {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "flechaAbajo.png");
        imagen.setAttribute("width", "30px")
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "abajo";
    }
    else if(actual.direccion == "abajo")
    {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "flechaDerecha.png");
        imagen.setAttribute("width", "30px")
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "derecha";
    }
    else if(actual.direccion == "derecha")
    {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "flechaArriba.png");
        imagen.setAttribute("width", "30px")
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "arriba";
    }
}
//var idActual=actual.td.firstChild.id;
//idActual++;
//idActual %=4;
//actual.td.removeChild(actual.td.firstChild);
//var img = document.createElement("img");
//img.src =  "img/"+idActual+".png";
//img.id= idActual;
//actual.td.appendChild(img);