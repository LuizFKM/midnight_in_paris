document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            const diretor = document.querySelector(`.cast-scenes__director`);
            const movies = document.querySelector(`.cast-scenes__movies`);
            escondeAbas();
            aba.classList.add('cast-scenes__content--is-active')
            diretor.classList.add('cast-scenes__director--is-active')
            movies.classList.add('cast-scenes__movies--is-active')
            removeBotaoAtivo();
            botao.target.classList.add('cast-scenes__button--is-active');
            
        })
    }
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('cast-scenes__button--is-active');
    }
}

function escondeAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        
        tabsContainer[i].classList.remove('cast-scenes__director--is-active');
        tabsContainer[i].classList.remove('cast-scenes__movies--is-active');
        tabsContainer[i].classList.remove('cast-scenes__content--is-active');
    }
}
