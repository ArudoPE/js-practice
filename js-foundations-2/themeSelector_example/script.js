const pageSelect = document.querySelector('select');
const pageHtml = document.querySelector('html');

document.body.style.padding = '10px';

function themeUpdate(bgColor, textColor) {
    pageHtml.style.backgroundColor = bgColor;
    pageHtml.style.color = textColor;
}

pageSelect.addEventListener('change', () =>

    (pageSelect.value === 'black') ?
        themeUpdate('black', 'white') :
        themeUpdate('white', 'black')
        );
