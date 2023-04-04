function CalcularKits(){
    let num = Number(document.getElementById("kits").value);
    let pontos;

    if(num < 0)
        pontos = -1;
    else if(num >= 0 && num < 16)
        pontos = 0;
    else if(num >= 16 && num < 40)
        pontos = 1000;
    else if(num >= 40 && num < 65)
        pontos = 2500;
    else if(num >= 65 && num < 80)
        pontos = 4000;
    else if(num >= 80)
        pontos = 5000;

    if (pontos == -1)
        document.getElementById("pontos").innerHTML = "Impossível Calcular";
    else    
        document.getElementById("pontos").innerHTML = "Total de pontos = " + pontos;
}