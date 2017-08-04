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
var laberinto = document.getElementById("laberinto");
crearCeldas(mapa.length, mapa[0].length)
var btnIzquierda = document.getElementById("btnIzquierda");
var btnDerecha = document.getElementById("btnDerecha");
var btnMover = document.getElementById("btnMover");
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
            if(mapa[i][j] == "o")
            {
                columna.setAttribute("class", "inicio");
            }
            if(mapa[i][j] == "W")
            {
                columna.setAttribute("class", "fin");
            }
            fila.appendChild(columna);
        }
        laberinto.appendChild(fila);
    }
}