const usuarios = [
    { email: "miguel@gmail.com", senha: "miguel123" },
    { email: "elton@gmail.com", senha: "elton123" }
]


formulario.addEventListener("submit", (event) => {
    const formulario = document.getElementById("formulario").value;
    event.preventDefault();


    const email = document.getElementById("campo-email").value;
    const senha = document.getElementById("campo-senha").value;

    const usuario = usuarios.find(function (u) {
        return u.email === email && u.senha === senha;
    });

    if (usuario) {
        alert("Bem-vindo");
        window.location.href = "index.html";
        
    }else {
        alert("Usuário ou senha inválidos " ) ;
    }

})
