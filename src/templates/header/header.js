const worksBtn = document.getElementById('works-btn');
const skillsBtn = document.getElementById('skills-btn');
const githubBtn = document.getElementById('github-btn');
const burger = document.getElementsByClassName('burger')[0];
const inputBurger = document.getElementById('input-burger');
const header = document.getElementsByClassName('header')[0];

smoothscroll.polyfill();

worksBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('open');
    inputBurger.checked = false;
    document.body.classList.remove('modal-open');
    window.scroll({
        top: worksSection.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
})

skillsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('open');
    inputBurger.checked = false;
    document.body.classList.remove('modal-open');
    window.scroll({
        top: skillsSection.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
})

githubBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('open');
    inputBurger.checked = false;
    document.body.classList.remove('modal-open');
    window.scroll({
        top: githubSection.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
})

header.addEventListener('click', (e) => {
    if (e.target === header || e.target === header.children[0]) {
        burger.classList.remove('open');
        inputBurger.checked = false;
        document.body.classList.remove('modal-open');
    }
})

// Анимация открытия бокового меню
burger.addEventListener('click', (e) => {
    burger.classList.toggle('open');
    document.body.classList.toggle('modal-open');
})
