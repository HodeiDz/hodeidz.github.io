function login() {
    const currentPassword = document.getElementById("password").value;
    const correctPassword = "1234"; // Did you know that 1234 is the most common password? jajaj just kidding :P

    if (currentPassword === correctPassword) {
      window.location.href = "control_panel.html";
    } else {
      alert("Pasahitza okerra");
    }
  }

  function checkEnter(event) {
    if (event.key === "Enter") {
      login();
    }
  }

  function next(){
    alert("aurrera!!!");

  }

  function previous(){

  }

  function fullscreen(){

  }

  function minimize(){

  }