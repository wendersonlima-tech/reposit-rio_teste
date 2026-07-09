JavaScript


// Função para incrementar o contador de curtidas
function curtirPost(botao) {
    // Encontra o elemento de texto que está dentro do botão clicado
    const contadorElemento = botao.querySelector('.like-count');
    
    // Pega o número atual, transforma em número inteiro e soma 1
    let curtidasAtuais = parseInt(contadorElemento.innerText);
    curtidasAtuais++;
    
    // Atualiza o texto na tela
    contadorElemento.innerText = curtidasAtuais;
    
    // Efeito visual simples de clique
    botao.style.transform = 'scale(1.1)';
    setTimeout(() => {
        botao.style.transform = 'scale(1)';
    }, 100);
}