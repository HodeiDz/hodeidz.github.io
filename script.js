//_____________FOR_LOGIN_________________//

  function login() {
    const currentPassword = document.getElementById("password").value;
    const correctPassword = "1234"; // Did you know that 1234 is the most common password? jajaj just kidding :P

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


  function next(){
    localStorage.setItem('next', 'true');
    console.log("SET: Next -> true");

    setTimeout(() => {
      if(localStorage.getItem('next') === 'false'){
        console.log("next worked succesfully");
      } else {
          console.log('ERROR: No changes recived, reverting changes');
          localStorage.setItem('next', 'false');
        }
      }, 2000);
    }


  function prev(){
    localStorage.setItem('prev', 'true');
    console.log("SET: prev -> true");

    setTimeout(() => {
      if(localStorage.getItem('next') === 'false'){
        console.log("prev worked succesfully");
      } else {
          console.log('ERROR: No changes recived, reverting changes');
          localStorage.setItem('prev', 'false');
        }
      }, 2000);
  }

  function fullscreen(){
    localStorage.setItem('fullscreen', 'true');
    console.log("fulscreen on");

/*     setTimeout(() => {
      if(localStorage.getItem('fullscreen') === 'false'){
        console.log("fulscreen worked succesfully");
      }
    }, 2000); */
  }

  function minimize(){
    localStorage.setItem('minimize', 'true');
    console.log("minimize on");

 /*    setTimeout(() => {
      if(localStorage.getItem('minimize') === 'false'){
        console.log("minimize worked succesfully");
      }
    }, 2000); */
    

  } 