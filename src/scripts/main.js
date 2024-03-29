document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    //pega a altura do Hero
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    //faz uma verificação com a posição do scroll para ocultar o header apenas enquanto o usuários estiver no hero
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY

        if (posicaoAtual < alturaHero) {
            ocultaElementosHeader();
        }
        else{
            exibeElementosHeader();
        }
    })

    // Oculta todas as abas chamando a função
    hideAllTabs();
    
    // adiciona as classes para que a borda do primeiro botão e a primeira aba seja exibida
    const primeiraAba = document.querySelector('[data-tab-id]');
    primeiraAba.classList.add('shows__list--is-active');
    const primeiroBotao = buttons[0];
    primeiroBotao.classList.add('shows__tabs__button--is-active');

    //capta cada elemento do array e no clique roda as fuções que: 1. coloca dentro da const abaAlvo o data da tabButton clicada (target),
    //2. coloca dentro de aba "data-tab-id" com o valor atual de abaAlvo, 3. remove as classes ativas do elemento anterior e as coloca
    //no elemento clicado (button) e sua respectiva aba
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            hideAllTabs();
            removeButtonActive();
            aba.classList.add('shows__list--is-active');
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreFechaResposta);
    }
});

function ocultaElementosHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function abreFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}