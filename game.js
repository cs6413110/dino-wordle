
<script>
document.documentElement.innerHTML += `
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
    
  }
  #guess {
    width: 0;
    position: absolute;
    width: 100%;
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
  }
</style>`;

</script>
