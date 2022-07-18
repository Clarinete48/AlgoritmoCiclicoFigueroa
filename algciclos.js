//Desafio Algoritmo ciclico

let bikeTipe=prompt("Elige un tipo de bici para conocer su precio\nMTB\nEnduro\nCrossCountry\nRuta\n(s-para salir)");
let precio=0;

while(bikeTipe!="s"){
    switch(bikeTipe){
        case "MTB":
        case "mtb":
        case "Mtb":            
         alert("MountainBike 5.000$");
            precio=precio+5000;
            break;
        case "ENDURO":
        case "enduro":
        case "Enduro":
            alert("Enduro Bike 6.000$");
            precio=precio+6000;
            break;
        case "CROSSCOUNTRY":
        case "crosscountry":
        case "CrossCountry":
            alert("CrossCountry Bike 5.000$");
            precio=precio+5000;
            break;
        case "RUTA":
        case "ruta":
        case "Ruta":
            alert("Ruta Bike 7.000$");
            precio=precio+7000;
            break;
        default:
            alert("Este producto no existe");
            break;
    }
    bikeTipe=prompt("Elige un tipo de bici para conocer su precio (s-para salir)");
}

console.log("Precio total $"+precio);


