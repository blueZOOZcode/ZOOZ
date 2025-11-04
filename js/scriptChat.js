const elementoMensagens = document.getElementById("mensagens");
const entradaMensagem = document.getElementById("entradaMensagem");
const botaoEnviar = document.getElementById("botaoEnviar");


const usuarios = [
    "Exn08",
    "Exayled",
    "Migzk",
    "Bruno C.",
    "Pedro09898",
    "Rodolfinho13",
    "RyanSemT",
    "EnzoL2R2",
    "UFRGS",
    "Rosana",
    "PedreiroJeferson",
    "JulioCesar",
    "ghoxt",
    "Nina123",
    "LeoBR",
    "Gustavo",
    "Duda",
    "CarlaZika",
    "GusttavoXP",
    "M4v3rick",
    "Carlos",
    "Pingu_fan",
    "Ana",
    "AnaTwitch",
    "Cleyton_77",
    "DudaGamer",
    "Jhowzin",
    "Mxghty",
    "Luccalit"
];

const mensagensAleatorias = [
    "Slk, tadinho",
    "Tmj Maveras, vai dar tudo certo",
    "Não ta dando onda 😔",
    "Seja forte pingu",
    "Vou donatar pra você pingu",
    "F...",
    "Maverick está atendendo bem aos procedimentos, ocorre-rá tudo bem.",
    "Amém 🙏",
    "Dps do trampo quero ver ele bem ein",
    "Salve pingu",
    "Força pingu 💪",
    "Fé que vai dar certo!",
    "Bora spammar amor no chat ❤️",
    "Kkkk esses comentários",
    "W",
    "Tamo junto galera!",
    "Ele merece todo apoio!",
    "O chat tá lindo hj 🥰",
    "Salve família!",
    "Vem coisa boa aí 🙌",
    "Bora fazer barulho no chat 🔥",
    "Isso foi emocionante demais 😢",
    "Alguém clipa isso agora!!! 🎥",
    "Confia no processo 🙏",
    "Chat tá insano hoje 🔥🔥",
    "Mano, que momento histórico 😭",
    "Hoje o chat tá brabo demais 🔥",
    "KKKK esse cara é uma lenda 😂",
    "Vai dar bom, confia 😎",
    "Alguém manda o clipe disso aí!",
    "Mano, arrepiei com isso 😭",
    "Nem parece real isso 😳",
    "Todo mundo junto pelo pingu 💙",
    "Que vibes boas hoje no chat ✨",
    "A live tá incrível hoje!",
    "Que nostalgia esse momento 😢",
    "Esse clipe vai viralizar com certeza!",
    "Respeita o mito 🔥",
    "A comunidade tá unida demais hoje 🙌",
    "Eu esperei tanto por isso 😭",
    "Tá cada vez melhor!",
    "Kkkkk não aguento esse chat",
    "Meu Deus, que plot twist 😱",
    "Ele é simplesmente o GOAT 🐐",
    "Salve pra geral que tá acompanhando!",
    "Quem tá desde o início sabe 😎",
    "Isso sim é conteúdo de qualidade!",
    "Amanhã vai tá em todos os cortes 😆",
    "Chat, spamma coração ❤️❤️❤️",
    "Como não amar esse momento?",
    "Slk, que vibe boa 😍",
    "Nem parece que já passou tanto tempo!"
];

// Função para criar e mostrar uma mensagem
function adicionarMensagem(usuario, texto) {
    const divMensagem = document.createElement("div");
    divMensagem.classList.add("mensagem");
    divMensagem.innerHTML = `<span class="usuario">${usuario}:</span> ${texto}`;
    elementoMensagens.appendChild(divMensagem);
}

// Quando clicar no botão "Enviar"
botaoEnviar.addEventListener("click", () => {
    const texto = entradaMensagem.value.trim();
    if (texto === "") return;

    // Adiciona sua mensagem
    adicionarMensagem("Você", texto);
    entradaMensagem.value = "";

    elementoMensagens.scrollTop = elementoMensagens.scrollHeight; // rola pro fim

    // looping mensagens aleatórias
    // for (let i = 0; i < 5; i++) {
    //     const usuario = usuarios[Math.floor(Math.random() * usuarios.length)];
    //     const mensagem = mensagensAleatorias[Math.floor(Math.random() * mensagensAleatorias.length)];
    //     setTimeout(() => adicionarMensagem(usuario, mensagem), (i + 1) * 500); // com delay de 0.5s entre elas
    // }
});

// enviar com Enter
entradaMensagem.addEventListener("keypress", (e) => {
    if (e.key === "Enter") botaoEnviar.click();
});

// Mandar msgs a cada 2 segundos
setInterval(() => {
    const usuarioAleatorio = usuarios[Math.floor(Math.random() * usuarios.length)];
    const mensagemAleatoria = mensagensAleatorias[Math.floor(Math.random() * mensagensAleatorias.length)];
    adicionarMensagem(usuarioAleatorio, mensagemAleatoria);
}, 2000);