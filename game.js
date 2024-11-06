document.documentElement.innerHTML += `
<script src='https://cs6413110.github.io/dino-wordle/config.js'></script>
<div id='top'>
  <h1>Dino of the Day</h1>
</div>
<div id='centered'>
  <div id='name'></div>
  <img src=''></img>
</div>
<div id='guess'>
  <input id='' />
  <button>Guess</button>
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
    width: 50%;
    height: 100%;
    border: 1px solid red;
    margin-left: 25%;
    margin-right: 25%;
  }
  #guess {
    position: absolute;
    border-top: 1px solid #C3C3C3;
    width: 100%;
    height: 10%;
    margin: 0;
    bottom: 0;
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
const answer = ;
const check = (guess) => {
  if (guess.toLowerCase() === answer.toLowerCase()) return true;
  return guess.toLowerCase().split('').reduce((a,c,i) => c === answer.split()[i] ? a+1 : a, 0);
}
