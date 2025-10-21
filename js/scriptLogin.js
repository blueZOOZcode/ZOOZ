const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    alert("CADASTRADO COM SUCESSO!! ")
})