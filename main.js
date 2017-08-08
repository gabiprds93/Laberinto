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
{
    celdas[i]= new Array(mapa[0].length);    
}
var laberinto = document.getElementById("laberinto");
var btnIzquierda = document.getElementById("btnIzquierda");
var btnDerecha = document.getElementById("btnDerecha");
var btnMover = document.getElementById("btnMover");
var btnSalida = document.getElementById("btnSalida");
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

crearCeldas(mapa.length, mapa[0].length);

btnMover.onclick = function()
{
    var x = actual.x;
    var y = actual.y;
    var xInicio = x;
    var yInicio = y;
    var direccion = actual.direccion;
    var imagen = document.createElement("img");
    if(direccion == "arriba")
    {
        if(celdas[x][y].className == "inicio")
        {
            actual.x = x-1;
            imagen.setAttribute("src", "flechaArriba.png");
            celdas[actual.x][y].appendChild(imagen);
        }
        else if(mapa[x-1][y] == "_")
        {
            celdas[x][y].removeChild(celdas[x][y].firstChild);
            actual.x = x-1;
            imagen.setAttribute("src", "flechaArriba.png");
            celdas[actual.x][y].appendChild(imagen);
        }
    }
    else if(direccion == "derecha")
    {
        if(mapa[x][y+1] == "_")
        {
            celdas[x][y].removeChild(celdas[x][y].firstChild);
            actual.y = y+1;
            imagen.setAttribute("src", "flechaDerecha.png");
            celdas[x][actual.y].appendChild(imagen);
        }
    }
    else if(direccion == "abajo")
    {
        if(celdas[x+1][y].className == "fin")
        {
            celdas[x][y].removeChild(celdas[x][y].firstChild);
            alert("Ganaste. Juego terminado");
            crearCeldas(mapa.length, mapa[0].length);
            clearInterval(timer);
        }
        else if(mapa[x+1][y] == "_")
        {
            celdas[x][y].removeChild(celdas[x][y].firstChild);
            actual.x = x+1;
            imagen.setAttribute("src", "flechaAbajo.png");
            celdas[actual.x][y].appendChild(imagen);
        }
    }
    if(direccion == "izquierda")
    {
        if(mapa[x][y-1] == "_")
        {
            celdas[x][y].removeChild(celdas[x][y].firstChild);
            actual.y = y-1;
            imagen.setAttribute("src", "flechaIzquierda.png");
            celdas[x][actual.y].appendChild(imagen);
        }mapa.length, mapa[0].length
    }
}

btnDerecha.onclick = function()
{
    var x = actual.x;
    var y = actual.y;
    var imagen = document.createElement("img");
    if(actual.direccion == "arriba")
    {
        imagen.setAttribute("src", "flechaDerecha.png");
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "derecha";
    }
    else if(actual.direccion == "derecha")
    {
        imagen.setAttribute("src", "flechaAbajo.png");
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "abajo";
    }
    else if(actual.direccion == "abajo")
    {
        imagen.setAttribute("src", "flechaIzquierda.png");
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "izquierda";
    }
    else if(actual.direccion == "izquierda")
    {
        imagen.setAttribute("src", "flechaArriba.png");
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "arriba";
    }
}

btnIzquierda.onclick = function()
{
    var x = actual.x;
    var y = actual.y;
    var imagen = document.createElement("img");
    if(actual.direccion == "arriba")
    {
        imagen.setAttribute("src", "flechaIzquierda.png");
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "izquierda";
    }
    else if(actual.direccion == "izquierda")
    {
        imagen.setAttribute("src", "flechaAbajo.png");
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "abajo";
    }
    else if(actual.direccion == "abajo")
    {
        imagen.setAttribute("src", "flechaDerecha.png");
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "derecha";
    }
    else if(actual.direccion == "derecha")
    {
        imagen.setAttribute("src", "flechaArriba.png");
        celdas[x][y].removeChild(celdas[x][y].firstChild);
        celdas[x][y].appendChild(imagen);
        actual.direccion = "arriba";
    }
}

var timer;
var x = 0;
var y = 0;
var n = 0;

btnSalida.onclick = function()
{
    btnMover.onclick();
    timer = setInterval(salida, 500);
}

function salida()
{
    x = actual.x;
    y = actual.y
    btnIzquierda.onclick();
    btnMover.onclick();
    console.log(x)
    if(actual.x == x && actual.y == y)
    {
        btnDerecha.onclick();
        btnMover.onclick();
    }
    if(actual.x == x && actual.y == y)
    {
        btnDerecha.onclick();
        btnMover.onclick();
    }
    if(actual.x == x && actual.y == y)
    {
        btnDerecha.onclick();
        btnMover.onclick();
    }
    n++;
}