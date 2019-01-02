const worksBtn = document.getElementById('works-btn');
const skillsBtn = document.getElementById('skills-btn');
const githubBtn = document.getElementById('github-btn');
const burger = document.getElementsByClassName('burger')[0];

worksBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: worksSection.offsetTop,
        behavior: 'smooth'
    })
})

skillsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: skillsSection.offsetTop,
        behavior: 'smooth'
    })
})

githubBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: githubSection.offsetTop,
        behavior: 'smooth'
    })
})

burger.addEventListener('click', (e) => {
    burger.classList.toggle('open');

    document.body.classList.toggle('fixed');
})
