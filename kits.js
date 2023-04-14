function toggleMode(){
    const html = document.documentElement
//trocar o tema de fundo

    /*if(html.classList.contains("dark")){
        html.classList.remove("dark")
    } else{
        html.classList.add("dark")
    }*/
    html.classList.toggle("dark") 

//trocar o tema do profile img
    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a img
    /*if(html.classList.contains("dark")){
    //se tiver light mode, add a img light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else{
    //se não, manter a img normal
        img.setAttribute('src', "./assets/avatar.png")
    }*/
}

function Kits(){
    let num = Number(document.getElementById("kits").value);
    let arroz = Number(document.getElementById("arroz").value);
    let feijao = Number(document.getElementById("feijao").value);
    let mac = Number(document.getElementById("mac").value);
    let oleo = Number(document.getElementById("oleo").value);
    let nutren = Number(document.getElementById("nutren").value);

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

    if(arroz > 0)
        pontos += (arroz * 10);

    if(feijao > 0)
        pontos += (feijao * 2);

    if(mac > 0)
        pontos += (mac * 0.5);

    if(oleo > 0)
        pontos += (oleo * 1);

    if(nutren > 0)
        pontos += (nutren * 25);

    if (pontos == -1)
        alert("Impossível Calcular");
    else    
        alert("Total de pontos = " + pontos);
}