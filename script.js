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