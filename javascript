/*
    ==================================================
    VERIFICAÇÃO DE FATOS - HAMBURGUERIA
    ==================================================

    Este JavaScript controla os botões
    "Ver resposta".
*/


/*
    querySelectorAll() encontra todos os elementos
    que possuem a classe "botao".

    Como temos três cards, teremos três botões.
*/

const botoes = document.querySelectorAll(".botao");


/*
    forEach() percorre cada botão encontrado.

    Dessa maneira, não precisamos escrever o mesmo
    código três vezes.
*/

botoes.forEach(function (botao) {


    /*
        addEventListener() cria uma ação para o botão.

        Neste caso, a ação acontece quando o usuário
        clicar no botão.
    */

    botao.addEventListener("click", function () {


        /*
            parentElement pega o elemento "pai" do botão.

            Como o botão está dentro de um <article>,
            card será o card correspondente.
        */

        const card = botao.parentElement;


        /*
            querySelector(".resposta") procura, dentro
            daquele card, o elemento que possui a classe
            "resposta".
        */

        const resposta = card.querySelector(".resposta");


        /*
            classList.toggle() adiciona ou remove
            a classe "mostrar".

            Se a classe não existir:
            -> adiciona.

            Se já existir:
            -> remove.
        */

        resposta.classList.toggle("mostrar");


        /*
            contains() verifica se a classe "mostrar"
            está presente.
        */

        if (resposta.classList.contains("mostrar")) {


            /*
                Se a resposta estiver aparecendo,
                mudamos o texto do botão.
            */

            botao.textContent = "Esconder resposta";


        } else {


            /*
                Se a resposta estiver escondida,
                voltamos ao texto original.
            */

            botao.textContent = "Ver resposta";

        }

    });

});
