var tovideo = false;
var tomusic = false;
var tocontrol = false;

window.onload = function() {

    const params = new URLSearchParams(window.location.search);
    const page = params.get('topage');
      if (page === 'tovideo') {
          tovideo = true;
      } else if (page === 'tomusic') {
          tomusic = true;
      }else if(page === 'tocontrol'){
          tocontrol = true;
      }
      else{
        alert("INTENAL ERROR! Attributte lost, Returning to home page...");
        window.location.href = "index.html";
      }
}