const pageSelect = document.querySelector('select');
const pageHtml = document.querySelector('html');

document.body.style.padding = '10px';

function themeUpdate(bgColor, textColor) {
    pageHtml.style.backgroundColor = bgColor;
    pageHtml.style.color = textColor;
}

pageSelect.addEventListener('change', () => {
    const choice = pageSelect.value;

    switch (choice) {

        case 'white':
            themeUpdate(choice, 'black');
            break;
        case 'black':
            themeUpdate(choice, 'white');
            break;
        case 'purple':
            themeUpdate(choice, 'white');
            break;
        case 'yellow':
            themeUpdate(choice, 'black');
            break;
        case 'psychedelic':
            themeUpdate('pink', 'blue')
    }
});


// (pageSelect.value === 'black') ?
//     themeUpdate('black', 'white') :
//     themeUpdate('white', 'black')



let response;
let score = 90;
let machineActive = true;

if (machineActive) {

    switch (true) {
        case (score < 0 || score > 100):
            response = "This is not possible, an error has occurred.";
            break;

        case (score >= 0 && score <= 19):
            response = "That was a terrible score — total fail!";
            break;

        case (score >= 20 && score <= 39):
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
            break;

        case (score >= 40 && score <= 69):
            response = "You did a passable job, not bad!";
            break;

        case (score >= 70 && score <= 89):
            response = "That's a great score, you really know your stuff.";
            break;

        case (score >= 90 && score <= 100):
            response = "What an amazing score! Did you cheat? Are you for real?";
            break;

    }

} else {
    response = 'The machine is turned off. Turn it on to process your score.';
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${score}.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
