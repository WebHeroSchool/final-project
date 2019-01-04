const worksBtn = document.getElementById('works-btn');
const skillsBtn = document.getElementById('skills-btn');
const githubBtn = document.getElementById('github-btn');
const burger = document.getElementsByClassName('burger')[0];
const inputBurger = document.getElementById('input-burger');

worksBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('open');
    inputBurger.checked = false;
    document.body.classList.toggle('modal-open');
    window.scroll({
        top: worksSection.offsetTop,
        behavior: 'smooth'
    })
})

skillsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('open');
    inputBurger.checked = false;
    document.body.classList.toggle('modal-open');
    window.scroll({
        top: skillsSection.offsetTop,
        behavior: 'smooth'
    })
})

githubBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('open');
    inputBurger.checked = false;
    document.body.classList.toggle('modal-open');
    window.scroll({
        top: githubSection.offsetTop,
        behavior: 'smooth'
    })
})

// Анимация открытия бокового меню
burger.addEventListener('click', (e) => {
    burger.classList.toggle('open');
    document.body.classList.toggle('modal-open');
})
