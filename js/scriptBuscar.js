formulario.addEventListener("submit", (event) => {
    const formulario = document.getElementById("formulario").value;
    event.preventDefault();


    const pais = document.getElementById("escolha-pais").value;

    if (pais.toLowerCase() === "brasil") {
        window.location.href = "paginaBrasil.html";
        
    }else if (pais.toLowerCase() === "austrália") {
        window.location.href = "paginaAustralia.html";
        
    }
    else if (pais.toLowerCase() === "antártica") {
        window.location.href = "paginaAntartica.html";
        
    }
    else if (pais.toLowerCase() === "china") {
        window.location.href = "paginaChina.html";
        
    }
    else{
        window.location.href = "paginaProcurar.html";
    }

})

