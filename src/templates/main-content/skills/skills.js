const showMoreSkills = document.getElementsByClassName('skills__show-more')[0];
const allSkills = document.getElementsByClassName('skills__skills-item');
const skillsItemTitles = document.getElementsByClassName('skills__item-title');

const onMoreSkillsClickHandler = (btn, skills, section) => {
    if (btn.dataset.isOpen === 'false') {
        for (let i = skills.length-1; i >= 4; i--) {
            skills[i].style.display = 'flex';
        }

        btn.dataset.isOpen = true;
        btn.innerHTML = 'Скрыть';

    } else {
        for (let i = skills.length-1; i >= 4; i--) {
            skills[i].style.display = 'none';
        }

        window.scroll({
            top: section.offsetTop,
            behavior: 'smooth'
        })

        btn.dataset.isOpen = false;
        btn.innerHTML = 'Смотреть ещё';
    }
}

const controlResize = () => {
    onMoreSkillsClickHandler(showMoreSkills, allSkills, skillsSection);
}

// В зависимости от размера окна бразуера, скрываем или разворачиваем skill's items
window.addEventListener('resize', () => {
    if (document.body.clientWidth <= 767) {
        showMoreSkills.dataset.isOpen = false;

        for (let i = allSkills.length-1; i >= 4; i--) {
            allSkills[i].style.display = 'none';
        }

        showMoreSkills.addEventListener('click', controlResize);
    } else {
        for (let i = allSkills.length-1; i >= 4; i--) {
            allSkills[i].style.display = 'flex';
        }
    }
})

// нумерация навыков при мобильном экране
for (var i = 0; i < skillsItemTitles.length; i++) {
    skillsItemTitles[i].dataset.skillsNum = `0${i+1}`
}
