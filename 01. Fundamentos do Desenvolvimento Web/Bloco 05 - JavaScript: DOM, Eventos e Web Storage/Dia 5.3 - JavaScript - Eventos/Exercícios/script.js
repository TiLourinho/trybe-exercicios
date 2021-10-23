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

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1.
function createDaysOfTheMonth() {
  const monthDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < monthDays.length; index += 1) {
    const month = monthDays[index];
    const monthList = document.createElement('li');
    monthList.innerHTML = month;
    
    monthDaysList.appendChild(monthList);
    
    if (month === 24 || month === 31) {
      monthList.className = 'day holyday';
    } else if (month === 4 || month === 11 || month === 18) {
      monthList.className = 'day friday';
    } else if (month === 25) {
      monthList.className = 'day holyday friday';
    } else {
      monthList.className = 'day';
    }
  }
}

createDaysOfTheMonth();

// 2.
function holydayBtn(name) {
  const btnHolyday = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.id = 'btn-holyday';
  btn.innerHTML = name;

  btnHolyday.appendChild(btn);
}

holydayBtn('Feriados');

// 3.
function colorHolyday() {
  const holydayButton = document.getElementById('btn-holyday');
  const holydayClass = document.getElementsByClassName('holyday')[0];

  console.log(holydayClass);
  holydayButton.addEventListener('click', function() {
    for (let index = 0; index < holydayClass.length; index++) {
      const holydayList = holydayClass[index];
      holydayList.style.backgroundColor = 'blue';
    }
  })
}

colorHolyday();