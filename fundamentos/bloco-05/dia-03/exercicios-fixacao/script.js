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
        dayElement.style.cursor = 'pointer';
        dayElement.classList = 'day';
        if (holidays.includes(day)) dayElement.classList.add('holiday');
        if (fridays.includes(day)) dayElement.classList.add('friday');
        monthDaysList.appendChild(dayElement);
    }
}

function createButton(parentNode, buttonIdName, buttonName) {
    const button = document.createElement('button');
    button.id = buttonIdName;
    button.innerText = buttonName;
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

function handleFridaysTextChange(fridaysArray) {
    const newText = 'SEXTOU! 🍻';
    const fridaysList = document.getElementsByClassName('friday');
    for (let index = 0; index < fridaysArray.length; index += 1) {
        if (fridaysList[index].innerText === newText) {
            fridaysList[index].innerText = fridaysArray[index];
        } else {
            fridaysList[index].innerText = newText;
        }
    }
}

function addTask(taskName, color) {
    const myTasks = document.querySelector('.my-tasks');
    const taskSpanElement = document.createElement('span');
    taskSpanElement.innerText = taskName;
    const labelDivElement = document.createElement('div');
    labelDivElement.className = 'task';
    labelDivElement.style.backgroundColor = color;
    labelDivElement.style.cursor = 'pointer';
    myTasks.appendChild(taskSpanElement);
    myTasks.appendChild(labelDivElement);
}

function addAppointmentEventListner() {
    const input = document.getElementById('task-input');
    const submitInputButton = document.getElementById('btn-add');
    const appointmentList = document.querySelector('.task-list');

    submitInputButton.addEventListener('click', () => addAppointment(input, appointmentList));
    input.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') addAppointment(input, appointmentList);
    });
}

function addAppointment(input, appointmentList) {
    if (!input.value.length > 0) {
        alert('Nenhum compromisso foi informado');
    } else {
        const newElement = document.createElement('li');
        newElement.innerText = input.value;
        appointmentList.appendChild(newElement);
        input.value = '';
    }
}

createDaysOfTheWeek();
createDaysOfTheMonth();

const buttonsContainer = document.querySelector('.buttons-container');
createButton(buttonsContainer, 'btn-holiday', 'Feriados');

const holidayButton = document.getElementById('btn-holiday');
holidayButton.addEventListener('click', handleHolidayHighlight);

createButton(buttonsContainer, 'btn-friday', 'Sexta-feira');

const fridaysButton = document.getElementById('btn-friday');
fridaysButton.addEventListener('click', () => handleFridaysTextChange([4, 11, 18, 25]));

const daysOfTheMonth = document.getElementsByClassName('day');
for (let dayElement of daysOfTheMonth) {
    dayElement.addEventListener('mouseenter', (event) => {
        event.target.style.transform = 'scale(1.7)';
    })
    dayElement.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1.0)';
    })
    dayElement.addEventListener('click', function markTaskForDay(event) {
        const currentSelectedTask = document.querySelector('.selected');
        if (!currentSelectedTask) {
            alert('nenhuma tarefa selecionada');
            return;
        }
        const currentSelectedColor = currentSelectedTask.style.backgroundColor;
        if (event.target.style.color === currentSelectedColor) {
            event.target.style.color = 'rgb(119,119,119)';
        } else {
            event.target.style.color = currentSelectedColor;
        }
    })
}

addTask('Cozinhar:', 'red');
addTask('Estudar:', 'blue');

const tasksList = document.getElementsByClassName('task');
for (let task of tasksList) {
    task.addEventListener('click', (event) => {
        const currentSelectedTask = document.querySelector('.selected');
        if(currentSelectedTask) currentSelectedTask.classList.remove('selected');
        event.target.classList.add('selected');
    })
}

addAppointmentEventListner();





  
