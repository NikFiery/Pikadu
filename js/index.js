let btnBurger = document.querySelector('header .burger'),
    aside = document.querySelector('aside');

btnBurger.addEventListener( 'click', ()=>{
    aside.style.display = aside.style.display === 'block' ? 'none' : 'block';
}); //проверка кнопочки (бургер)