const showMoreSkills = document.getElementsByClassName('skills__show-more')[0];
const allSkills = document.getElementsByClassName('skills__skills-item');
const skillsItemTitles = document.getElementsByClassName('skills__item-title');

showMoreSkills.dataset.isOpen = false;

if (window.screen.width <= 767) {
    for (var i = allSkills.length-1; i >= 4; i--) {
        allSkills[i].style.display = 'none';
    }

    showMoreSkills.addEventListener('click', (e) => {
        if (showMoreSkills.dataset.isOpen === 'false') {
            for (var i = allSkills.length-1; i >= 4; i--) {
                allSkills[i].style.display = 'flex';
            }

            showMoreSkills.dataset.isOpen = true;
            showMoreSkills.innerHTML = 'Скрыть';

            window.scroll({
                top: skillsSection.offsetTop,
                behavior: 'smooth'
            })

        } else {
            for (var i = allSkills.length-1; i >= 4; i--) {
                allSkills[i].style.display = 'none';
            }

            showMoreSkills.dataset.isOpen = false;
            showMoreSkills.innerHTML = 'Смотреть ещё';
        }

    })
}


// нумерация навыков при мобильном экране
for (var i = 0; i < skillsItemTitles.length; i++) {
    skillsItemTitles[i].dataset.skillsNum = `0${i+1}`
}
