const worksBtnFooter = document.getElementById('works-btn-footer');
const skillsBtnFooter = document.getElementById('skills-btn-footer');
const githubBtnFooter = document.getElementById('github-btn-footer');

worksBtnFooter.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: worksSection.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
})

skillsBtnFooter.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: skillsSection.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
})

githubBtnFooter.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: githubSection.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
})
