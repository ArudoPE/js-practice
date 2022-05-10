//Queryselect "selects" an HTML using a CSS selector
const pageSelect = document.querySelector('select');
const pageParagraph = document.querySelector('p');

pageSelect.addEventListener('change', setWeather);

function setWeather() {
    const choice = pageSelect.value;

    switch (choice) {
        case 'sunny':
            setPageParagraph('It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.');
            break;
        case 'rainy':
            setPageParagraph('Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.');
            break;
        case 'snowing':
            setPageParagraph('The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.');
            break;
        case 'overcast':
            setPageParagraph('It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.');
            break;
        default:
            setPageParagraph('');
    }
}

function setPageParagraph(paragraph) {
    //textContent
    pageParagraph.textContent = paragraph;
}