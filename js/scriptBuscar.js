formulario.addEventListener("submit", (event) => {
    const formulario = document.getElementById("formulario").value;
    event.preventDefault();


    const pais = document.getElementById("escolha-pais").value;

    if (pais.toLowerCase() === "brasil") {
        window.location.href = "paginaBrasil.html";    
    }
    else if (pais.toLowerCase() === "austrália" || pais.toLowerCase() === "sydney") {
        window.location.href = "paginaAustralia.html";  
    }
    else if (pais.toLowerCase() === "antártica" || pais.toLowerCase() === "pingo & pinga" || pais.toLowerCase() === "pingo" || pais.toLowerCase() === "pinga") {
        window.location.href = "paginaAntartica.html";
    }
    else if (pais.toLowerCase() === "china" || pais.toLowerCase() === "oreo") {
        window.location.href = "paginaChina.html"; 
    }
    else if (pais.toLowerCase() === "maverick") {
        window.location.href = "paginaLivePiguim.html"; 
    }
    else{
        window.location.href = "paginaProcurar.html";
    }

})

