document.documentElement.innerHTML += `
<div id='top'>
  <h1 id='name'>Dino of the Day</h1>
</div>
<div id='centered'>
  <img id='image' src=''></img>
</div>
<div id='guess'>
  <input id='input' />
  <button id='button'>Guess</button>
</div>
<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 4vh;
    overflow: hidden;
    font-family: Georgia;
  }
  #top {
    text-align: center;
    position: absolute;
    width: 100%;
    height: 10%;
    background-color: white;
    border-bottom: 1px solid #C3C3C3;
  }
  #top h1 {
    margin: 0;
  }
  #centered {
    height: 100%;
  }
  #guess {
    position: absolute;
    border-top: 1px solid #C3C3C3;
    width: 100%;
    height: 10%;
    margin: 0;
    bottom: 0;
  }
  img {
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  input {
    width: 89%;
    height: 100%;
    border: 0;
    outline: none;
    font-family: Georgia;
    font-size: 5vh;
  }
  button {
    width: 10%;
    height: 100%;
    border: 0;
    font-family: Georgia;
    font-size: 4vh;
    margin: 0;
    padding: 0;
    background-color: lightblue;
  }
</style>`;
let time, current, answer;
const script = document.createElement('SCRIPT');
script.onload = e => {
  time = Math.floor(Date.now()/(24*60*60*1000));
  current = dinos[time%dinos.length];
  answer = current.name;
  document.getElementById('image').src = current.image;
  const check = guess => {
    const b = guess.length < answer.length, min = b ? guess : answer, max = b ? answer : guess;
    let temp = max;
    for (const c of min) temp = temp.replace(c, '');
    return temp.length;
  }
  document.getElementById('button').addEventListener('click', e => {
    let n = check(document.getElementById('input').value);
    if (!n) {
      document.getElementById('name').innerHTML = `<h1>${answer.charAt(0).toUpperCase()}${answer.slice(1, answer.length)}</h1>`;
      alert('Correct');
    } else {
      if (n < 8) alert(`You are ${n} letters off!`); else alert('Incorrect!');
    }
  });
}
script.src = 'https://cs6413110.github.io/dino-wordle/config.js';
document.documentElement.appendChild(script);
