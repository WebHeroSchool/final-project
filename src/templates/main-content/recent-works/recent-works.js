const showMoreWorks = document.getElementsByClassName('recent-works__show-more')[0];
const recentWorksRows = document.getElementsByClassName('recent-works__row');

showMoreWorks.dataset.isOpen = false;

for (let i = 1; i < recentWorksRows.length; i++) {
    recentWorksRows[i].style.display = 'none';
}

showMoreWorks.addEventListener('click', (e) => {
    if (showMoreWorks.dataset.isOpen === 'false') {
        for (let i = 1; i < recentWorksRows.length; i++) {
            recentWorksRows[i].style.display = 'flex';
        }

        showMoreWorks.dataset.isOpen = true;
        showMoreWorks.innerHTML = 'Скрыть';

        window.scroll({
            top: worksSection.offsetTop,
            behavior: 'smooth'
        })
    } else {
        for (let i = 1; i < recentWorksRows.length; i++) {
            recentWorksRows[i].style.display = 'none';
        }

        showMoreWorks.dataset.isOpen = false;
        showMoreWorks.innerHTML = 'Смотреть ещё';
    }
});
