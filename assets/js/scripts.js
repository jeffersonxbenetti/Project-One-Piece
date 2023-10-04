// Objetivo 1 / passo 1 => Mapear(pegar) o botão do personagem para saber quando ele é clicado.
const botoes = document.querySelectorAll(".botao")

// Objetivo 2 / passo 1 => Pegar personagens.
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    // Evento de "clicar" dentro forEach para selecionar um por vez.
    botao.addEventListener("click", () => {

        // Objetivo 1 / passo 3 => Vereficar se tem outro botão selecionado e remover.
        const botaoSelecionado = document.querySelector(".botao.selecionado")
        botaoSelecionado.classList.remove("selecionado")

        // Objetivo 1 / passo 2 => Adicionar a classe "selecionado" no botão que foi clicado.
        botao.classList.add("selecionado")   

        //objetivo2 / passo 3 => Verificar sem tem personagem selecionado e remover.
        const personagemSelecionado = document.querySelector(".personagem.selecionado")  
        personagemSelecionado.classList.remove("selecionado") 

        //objetivo 2 => Colocar a classe selecionado no personagem.
        personagens[indice].classList.add("selecionado")

    })
});