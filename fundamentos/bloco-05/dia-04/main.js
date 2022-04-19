const fontSelector = document.getElementById('font-selector');
const fontSelectorTest = fontSelector.nextElementSibling;

const bgColorSelector = document.getElementById('bg-color-selector');
const bgColorSelectorTest = bgColorSelector.nextElementSibling;

const colorSelector = document.getElementById('color-selector');
const colorSelectorTest = colorSelector.nextElementSibling;

const fontSizeSelector = document.getElementById('font-size-selector');
const fontSizeSelectorTest = fontSizeSelector.nextElementSibling;

const main = document.getElementsByTagName('main')[0];
const article = document.getElementsByTagName('article')[0];

function initialRender() {
    if (localStorage.length === 0) {
        const defaultValues = {
            font: 'sans-serif',
            fontSize: '13px',
            bgColor: 'light',
            color: 'dark'
        }
        localStorage.setItem('userPreferences', JSON.stringify(defaultValues));
    } else {
        const userValues = JSON.parse(localStorage.getItem('userPreferences'));

        fontSelectorTest.style.fontFamily = userValues.font;
        main.style.fontFamily = userValues.font;

        if (userValues.bgColor === 'random') {
            bgColorSelectorTest.style.backgroundColor = randomRgbColor(); 
            main.style.backgroundColor = bgColorSelectorTest.style.backgroundColor;
        } else {
            bgColorSelectorTest.style.backgroundColor = `var(--${userValues.bgColor})`;
            main.style.backgroundColor = `var(--${userValues.bgColor})`;
        }

        if (userValues.color === 'random') {
            colorSelectorTest.style.color = randomRgbColor(); 
            main.style.color = colorSelectorTest.style.color;
        } else {
            colorSelectorTest.style.backgroundColor = bgColorSelectorTest.style.backgroundColor;
            colorSelectorTest.style.color = `var(--${userValues.color})`;
        }
        main.style.color = `var(--${userValues.color})`;

        fontSizeSelectorTest.style.fontSize = userValues.fontSize;
        main.style.fontSize = userValues.fontSize;

        setSelectedInputs(userValues);
    }
}

function setSelectedInputs(userValues) {
    for (let option of fontSelector.children) {
        if (option.innerText === userValues.font) {
            option.setAttribute('selected', true);
        }
    }
    for (let option of bgColorSelector.children) {
        if (option.innerText === userValues.bgColor) {
            option.setAttribute('selected', true);
        }
    }
    for (let option of colorSelector.children) {
        if (option.innerText === userValues.color) {
            option.setAttribute('selected', true);
        }
    }
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
};

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r},${g},${b})`;
};

initialRender();

fontSelector.addEventListener('change', (event) => {

    fontSelectorTest.style.fontFamily = event.target.value;
    main.style.fontFamily = fontSelectorTest.style.fontFamily;

    const userValues = JSON.parse(localStorage.getItem('userPreferences'));
    userValues.font = fontSelectorTest.style.fontFamily;
    localStorage.setItem('userPreferences', JSON.stringify(userValues));
});

fontSizeSelector.addEventListener('change', (event) => {
    fontSizeSelectorTest.style.fontSize = event.target.value;
    main.style.fontSize = event.target.value;

    const userValues = JSON.parse(localStorage.getItem('userPreferences'));
    userValues.fontSize = fontSizeSelectorTest.style.fontSize;
    localStorage.setItem('userPreferences', JSON.stringify(userValues));
})

bgColorSelector.addEventListener('change', (event) => {

    if (event.target.value === 'random') {
        bgColorSelectorTest.style.backgroundColor = randomRgbColor();
        main.style.backgroundColor = bgColorSelectorTest.style.backgroundColor;
        colorSelectorTest.style.backgroundColor = bgColorSelectorTest.style.backgroundColor;
    } else {
        bgColorSelectorTest.style.backgroundColor = `var(--${event.target.value})`;
        main.style.backgroundColor = bgColorSelectorTest.style.backgroundColor;
        colorSelectorTest.style.backgroundColor = bgColorSelectorTest.style.backgroundColor;
    }

    const userValues = JSON.parse(localStorage.getItem('userPreferences'));
    userValues.bgColor = event.target.value;
    localStorage.setItem('userPreferences', JSON.stringify(userValues));
});

colorSelector.addEventListener('change', (event) => {

    if (event.target.value === 'random') {
        
        colorSelectorTest.style.color = randomRgbColor();
        main.style.color = colorSelectorTest.style.color;
        colorSelectorTest.style.backgroundColor = bgColorSelectorTest.style.backgroundColor;

    } else if (`var(--${event.target.value})` === 'var(--light)') {
        colorSelectorTest.style.color = `var(--${event.target.value})`;
        main.style.color = `var(--${event.target.value})`;
        colorSelectorTest.style.backgroundColor = 'var(--dark)';
    } else {
        colorSelectorTest.style.color = `var(--${event.target.value})`;
        main.style.color = `var(--${event.target.value})`;
        colorSelectorTest.style.backgroundColor = 'var(--light)';
    }

    const userValues = JSON.parse(localStorage.getItem('userPreferences'));
    userValues.color = event.target.value;
    localStorage.setItem('userPreferences', JSON.stringify(userValues));
})