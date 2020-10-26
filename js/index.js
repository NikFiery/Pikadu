let btnBurger = document.querySelector('header .burger'),
    aside = document.querySelector('aside');

btnBurger.addEventListener( 'click', ()=>{
    aside.style.display = aside.style.display === 'block' ? 'none' : 'block';
}); //проверка кнопочки (бургер)


let btn = document.querySelector('.aside__btn .aside__btn--push'),
    posts = document.querySelector('.main__wrapper .main__post'),
    newPost = document.querySelector('.main__wrapper .new-post')

btn.addEventListener( 'click', ()=>{
    posts.style.display = posts.style.display === 'flex' ? 'none' : 'flex',
    newPost.style.display = newPost.style.display === 'flex' ? 'none' : 'flex',
    posts.style.display = newPost.style.display === 'flex' ? 'none' : 'flex';
});//проверка кнопочки (новый пост)

