const fontSelector = document.getElementById('font-selector');
const fontSelectorTest = fontSelector.nextElementSibling;

const bgColorSelector = document.getElementById('bg-color-selector');
const bgColorSelectorTest = bgColorSelector.nextElementSibling;

const colorSelector = document.getElementById('color-selector');
const colorSelectorTest = colorSelector.nextElementSibling;

const main = document.getElementsByTagName('main')[0];
const article = document.getElementsByTagName('article')[0];

function initialRender() {
    if (localStorage.length === 0) {
        const defaultValues = {
            font: 'sans-serif',
            bgColor: 'var(--light)',
            color: 'var(--dark)'
        }
        localStorage.setItem('userPreferences', JSON.stringify(defaultValues));
    } else {
        const userValues = JSON.parse(localStorage.getItem('userPreferences'));

        fontSelectorTest.style.fontFamily = userValues.font;
        main.style.fontFamily = userValues.font;

        bgColorSelectorTest.style.backgroundColor = userValues.bgColor;
        main.style.backgroundColor = userValues.bgColor;

        colorSelectorTest.style.color = userValues.color;
        main.style.color = userValues.color;
    }
}

initialRender();

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
};

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r},${g},${b})`;
};

fontSelector.addEventListener('change', (event) => {

    fontSelectorTest.style.fontFamily = event.target.value;
    main.style.fontFamily = fontSelectorTest.style.fontFamily;

    const userValues = JSON.parse(localStorage.getItem('userPreferences'));
    userValues.font = bgColorSelectorTest.style.fontFamily;
    localStorage.setItem('userPreferences', JSON.stringify(userValues));
});

bgColorSelector.addEventListener('change', (event) => {

    if (event.target.value === 'random') {
        bgColorSelectorTest.style.backgroundColor = randomRgbColor();
        main.style.backgroundColor = bgColorSelectorTest.style.backgroundColor;
    }
    bgColorSelectorTest.style.backgroundColor = event.target.value;
    main.style.backgroundColor = bgColorSelectorTest.style.backgroundColor;

    const userValues = JSON.parse(localStorage.getItem('userPreferences'));
    userValues.bgColor = bgColorSelectorTest.style.backgroundColor;
    localStorage.setItem('userPreferences', JSON.stringify(userValues));
});

colorSelector.addEventListener('change', (event) => {

    if (event.target.value === 'random') {
        colorSelectorTest.style.color = randomRgbColor();
        main.style.color = colorSelectorTest.style.color;
        colorSelectorTest.style.backgroundColor = 'var(--dark)';
    } else if (event.target.value === 'var(--light)') {
        colorSelectorTest.style.color = event.target.value;
        main.style.color = event.target.value;
        colorSelectorTest.style.backgroundColor = 'var(--dark)';
    } else {
        colorSelectorTest.style.color = event.target.value;
        main.style.color = event.target.value;
        colorSelectorTest.style.backgroundColor = 'var(--light)';
    }

    const userValues = JSON.parse(localStorage.getItem('userPreferences'));
    userValues.color = colorSelectorTest.style.color;
    localStorage.setItem('userPreferences', JSON.stringify(userValues));
})