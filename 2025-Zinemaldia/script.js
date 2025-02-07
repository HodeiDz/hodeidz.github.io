//_____________FOR_LOGIN_________________//

  function login() {
    const currentPassword = document.getElementById("password").value;
    const correctPassword = "1234"; // 1234 pasahitza oso ohikoa da, buscabas y has encuentrado, aqui tienes la pasahitza :) (tampoco me queria liar mucho con esto)

    if (currentPassword === correctPassword) {
      if (tocontrol === true){
        window.location.href = "control_panel.html";
      }
      if (tomusic === true){
        window.location.href = "music.html";
      }
      if(tovideo === true){
        window.location.href = "video.html";
      }
    } else {
      alert("Pasahitza okerra");
    }
  }
  function checkEnter(event) {
    if (event.key === "Enter") {
      login();
    }
  }

//______________FOR_CONTROL_PANEL_______________//

  function updateSlideIdDisplay() { // ? acutaliza el slideid en la pantalla 
    const slideid = localStorage.getItem('slideid');
    document.getElementById('slideid-display').textContent = `Aurkezpen orria: ${slideid}`;
  }


  function next(){
    if (localStorage.getItem('Displayed') === 'ppt'){

      const currentSlideId = localStorage.getItem('slideid');

      const nextSlideId = parseInt(currentSlideId) + 1;
      localStorage.setItem('slideid', nextSlideId);
      console.log("SET: slideid -> " + nextSlideId);

      updateSlideIdDisplay();

    } else {
      localStorage.setItem('next', 'true');
      console.log("SET: Next -> true");

      setTimeout(() => {
        if(localStorage.getItem('next') === 'false'){
          console.log("next worked succesfully");
        } else {
            console.log('ERROR: No changes recived, reverting changes');
            localStorage.setItem('next', 'false');
          }
        }, 2500);
    }
    }


  function prev(){
    if(localStorage.getItem('Displayed') === 'ppt'){
  
      const currentSlideId = localStorage.getItem('slideid');

      if(currentSlideId === '1'){
        console.log('ERROR: Cannot go back from first slide');
        return;
      }

      const prevSlideId = parseInt(currentSlideId) - 1;
      localStorage.setItem('slideid', prevSlideId);
      console.log("SET: slideid -> " + prevSlideId);

      updateSlideIdDisplay();

    } else {
      localStorage.setItem('prev', 'true');
      console.log("SET: prev -> true");

      setTimeout(() => {
        if(localStorage.getItem('next') === 'false'){
          console.log("prev worked succesfully");
        } else {
            console.log('ERROR: No changes recived, reverting changes');
            localStorage.setItem('prev', 'false');
          }
        }, 2500);}
  }

  function reset(){
    localStorage.setItem('slideid', '1');
    updateSlideIdDisplay();
  }

  function fullscreen(){
    localStorage.setItem('fullscreen', 'true');
    console.log("fulscreen on");

    setTimeout(() => {
      if(localStorage.getItem('fullscreen') === 'false'){
        console.log("fullscreen worked succesfully");
      } else {
          console.log('ERROR: No changes recived, reverting changes');
          localStorage.setItem('fullscreen', 'false');
        }
      }, 2500);
  }

  function minimize(){
    localStorage.setItem('minimize', 'true');
    console.log("minimize on");

    setTimeout(() => {
      if(localStorage.getItem('minimize') === 'false'){
        console.log("minimize worked succesfully");
      } else {
          console.log('ERROR: No changes recived, reverting changes');
          localStorage.setItem('minimize', 'false');
        }
      }, 2500);

  } 

  //______________pptx_control_________________//

  document.querySelectorAll('.slidebutton button').forEach(button => {
    button.addEventListener('click', function() { //! WTF hay que mirar esto
        const slideid = this.getAttribute('slideid');
        localStorage.setItem('slideid', slideid);
    });
});


function Displayed(option) { // elegir que se va a mostrar en la pantalla
  const pptButton = document.getElementById('ppt-button');
  const vidButton = document.getElementById('vid-button');

  if (option === 'ppt') {
      pptButton.classList.add('selected');
      vidButton.classList.remove('selected');

      localStorage.setItem('Displayed', 'ppt');
      document.getElementById('vidTitle').style.color = 'gray';

      vidFullscreen.classList.add('unabled');
      vidMinimize.classList.add('unabled');
      
  } else if (option === 'vid') {
      pptButton.classList.remove('selected');
      vidButton.classList.add('selected');

      localStorage.setItem('Displayed', 'vid');
      document.getElementById('vidTitle').style.color = 'black';

      vidFullscreen.classList.remove('unabled');
      vidMinimize.classList.remove('unabled');

  }
}