document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('cast-scenes__content--is-active')
            removeBotaoAtivo();
            botao.target.classList.add('cast-scenes__button--is-active');
            
            
        })
    }
})

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar--is-active');
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('cast-scenes__button--is-active');
    }
}

function escondeAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('cast-scenes__content--is-active');
    }
}
