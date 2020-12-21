function policial() {
    alert("Parabéns agora você é um Policial Militar. Você passou pelo período de 1 ano no curso de formação para se tornar Policial então a cidade está pior que antes, sua primeira missão é controlar uma multidão que está destruindo tudo no centro do Rio, pessoas mascaradas estão ateando pedras, fogos de artificio e coquetéis molotov contra a equipe de policias. Faça a sua escolha: ")

    var esc = prompt('1 -  Você saca sua pistola e atira para o alto para dispersar os manisfestantes \n2 - Você se abriga e arramessa uma granada de gás lagrimogênio.\n 3 - Você sai da formação e corre em direção a multidão para prender algum manifestante.    \n 4 - Você atira em um dos manifestantes para desestimular os outros agressores ')

    if (esc == 1) {
        alert("Alguns manifestantes correrem mas um cinegrafista filmou sua atitude e publicou nas redes sociais. No dia posterior a corregedoria da polícia militar te intima para dar explicações")
        esc = prompt("Você está no tribunal explique sua atitude ao juiz \n1 - Atirei pro alto porque era mais eficiente \n2 - Era minha única opção.\n3 - Atirei porque era proporcional a agressão sofrida. \n4 - Era minha primeira missão então fiquei nervoso com tantos agressores ao meu redor.")
        if (esc != 4) {
            alert("O juiz recusou sua justificativa. Você será punido com 20 dias de prisão e será afastado dos serviços de rua")
            mostraBoxDica("A primeira vez é sempre mais complicada")
        } else {
            alert("Você conseguiu se safar! o juiz acatou sua justificativa. Você sofreu uma punição escrita e continuará no serviço normalmente")

        }

    } else if (esc == 2) {
        alert("Os manifestantes se dispersaram rapidamente. \n Agora que os manifestantes estão menos agrupados aproveite a situação")
        esc = prompt('1 -  Você escolhe um e parte para captura-lo\n2 -  Você atira com munição de borracha contra alguns manifestantes isolados\n3 - Avança com sua formação para ganhar terreno\n4 - Recua porque o gás está te afetando.')

        if (esc == 1) {
            mostraBoxDica("Até parece que um camisa 10 joga sozinho")
        } else if (esc == 2 || esc == 3) {
            alert("Boaa guerreiro mantenha-se firme")
        } else if (esc == 4) {
            alert("QUE TIPO DE GUERREIRO É VOCÊ?!")
        }
    }






}

function mostraBoxDica(msg) {
    var acoes = document.getElementById("boxDica");
    acoes.innerHTML =
        `
        <h3>Dica</h3>
        <p> Você perdeu!
        <p> ` + msg + ` </p>
         `

}