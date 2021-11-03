const inputStates = document.getElementById('input-states');
const arrStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

function states() {
  for (let i = 0; i < arrStates.length; i += 1) {
    const arrElement = arrStates[i];
    const statesList = document.createElement('option');
    statesList.innerText = arrElement;
    statesList.value = arrElement;
    inputStates.appendChild(statesList);
  }
}
states();

function validateName() {
  const inputName = document.getElementById('input-name');
  if (inputName.value.length === 0 || inputName.value.length > 40) {
    alert('Nome inválido!');
    return false;
  } else {
    return true;
  }
}

function validateEmail() {
  const inputEmail = document.getElementById('input-email');
  if (inputEmail.value.length === 0 || inputEmail.value.length > 50) {
    alert('E-mail inválido!');
    return false;
  } else {
    return true;
  }
}

function validateCPF() {
  const inputCPF = document.getElementById('input-cpf');
  if (inputCPF.value.length === 0 || inputCPF.value.length > 11) {
    alert('CPF inválido!');
    return false;
  } else {
    return true;
  }
}

function validateAdress() {
  const inputAdress = document.getElementById('input-adress');
  if (inputAdress.value.length === 0 || inputAdress.value.length > 200) {
    alert('Endereço inválido!');
    return false;
  } else {
    return true;
  }
}

function validateType(radio, type) {
  const inputType = document.querySelector(`[name=${type}]:checked`);
  if (checked === null) {
    alert('Tipo inválido');
    return false;
  } else {
    return true;
  }
}

function validateCity() {
  const inputCity = document.getElementById('input-city');
  if (inputCity.value.length === 0 || inputCity.value.length > 28) {
    alert('Cidade inválida!');
    return false;
  } else {
    return true;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  validateName();
  validateEmail();
  validateCPF();
  validateAdress();
  validateType();
  validateCity();
}

window.onload = function() {
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', (handleSubmit));
}