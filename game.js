document.documentElement.innerHTML += `
<script src='https://cs6413110.github.io/dino-wordle/config.js'></script>
<div id='centered'>
  <div id='name'></div>
  <img src=''></img>
<div>
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
    overflow: hidden;
  }
  #centered {
    width: 50%;
    height: 100%;
    border: 1px solid red;
    margin-left: 25%;
    margin-right: 25%;
  }
  #guess {
    width: 0;
    position: absolute;
    width: 100%;
    height: 10%;
    bottom: 0;
  }
  input {
    width: 89%;
    height: 100%;
    border: 0;
    outline: none;
  }
  button {
    width: 10%;
    height: 100%;
  }
</style>`;
