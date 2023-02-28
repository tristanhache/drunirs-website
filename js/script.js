function showMenu() {
  document.getElementById("menuPhone").classList.toggle("phone-hide");
}

function copyToClipBoard() {

  var content = document.getElementById('textArea');

  content.select();
  document.execCommand('copy');

  alert("Vous avez copié l'ip du serveur !");
}



function setCookie(cname, cvalue, exdays) {
  console.log("cookie set", cname, cvalue, exdays)
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function countdown(zone,dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if ( isNaN(dateEnd) ) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);
      hours   = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);

      $("." + zone + " #days").html(parseInt(days, 10));
      $("." + zone + " #hours").html(("0" + hours).slice(-2));
      $("." + zone + " #minutes").html(("0" + minutes).slice(-2));
      $("." + zone + " #seconds").html(("0" + seconds).slice(-2));
    } else {
      return;
    }
  }

  function display(days, hours, minutes, seconds) {}
}



