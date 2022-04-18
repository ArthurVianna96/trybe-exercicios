function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const holidays = [24, 25, 31];
    const fridays = [4, 11, 18, 25];
    
    const monthDaysList = document.getElementById('days');

    for (let day of dezDaysList) {
        const dayElement = document.createElement('li');
        dayElement.innerText = day;
        dayElement.classList = 'day';
        if (holidays.includes(day)) dayElement.classList.add('holiday');
        if (fridays.includes(day)) dayElement.classList.add('friday');
        monthDaysList.appendChild(dayElement);
    }
}

function createButton(parentNode, buttonIdName) {
    const button = document.createElement('button');
    button.id = buttonIdName;
    button.innerText = 'Feriados';
    button.style.cursor = 'pointer';
    parentNode.appendChild(button);
}

function handleHolidayHighlight() {
    const highlightColor = 'rgb(3,107,82)';
    const transparentColor = 'rgb(238,238,238)';
    const holidaysList = document.getElementsByClassName('holiday');
    for (let holiday of holidaysList) {
        if (holiday.style.backgroundColor) {
            holiday.style.removeProperty('background-color');
            holiday.style.removeProperty('color');
        } else {
            holiday.style.backgroundColor = highlightColor;
            holiday.style.color = transparentColor;
        }
    }
}

createDaysOfTheWeek();
createDaysOfTheMonth();

const buttonsContainer = document.querySelector('.buttons-container');

createButton(buttonsContainer, 'btn-holiday');

const holidayButton = document.getElementById('btn-holiday');

holidayButton.addEventListener('click', handleHolidayHighlight);


  
