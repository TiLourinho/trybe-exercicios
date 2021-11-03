const container = document.getElementById('container');
container.style.backgroundColor = 'lightgrey';

const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'green';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'pink';

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'yellow';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasksHeaders.length; i += 1) {
  emergencyTasksHeaders[i].style.backgroundColor = 'purple';
}

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasksHeaders.length; i += 1) {
  noEmergencyTasksHeaders[i].style.backgroundColor = 'black';
}

const footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = 'darkgreen';