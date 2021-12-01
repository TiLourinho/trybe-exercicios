// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const append = (data) => {
  const h2 = document.getElementById('jokeContainer');
  const p = document.createElement('p');

  h2.innerText = data;
  h2.appendChild(p);
}

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => append(data.joke));
    
};

window.onload = () => fetchJoke();