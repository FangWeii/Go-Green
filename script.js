// start PHUONG
// end PHUONG


// start VY
// content
var api="https://jsonplaceholder.typicode.com/posts"
fetch(api)
    .then((Response) => {
        return Response.json()
    })
    .then((data) => {
        document.getElementById("penguins-upper-content").innerHTML = (data[0].body + data[1].body);
        document.getElementById("penguins-lower-content").innerHTML = (data[2].body + data[3].body);
        document.getElementById("whales-upper-content").innerHTML = (data[4].body + data[5].body);
    })
    .catch(() => {
        console.log('lỗi api');
    })
// timer
var countDownDate = new Date("Jan 5, 2024 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById("hour").innerHTML = hours
  document.getElementById("minute").innerHTML = minutes
  document.getElementById("second").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
  }
}, 1000);
// end VY


// start DUC
function getCategoriesKidz(x) {
    document.getElementById("FundraisingKidz").classList.remove("activeTabKidz");
    document.getElementById("VolunteerKidz").classList.remove("activeTabKidz");
    document.getElementById("DonationKidz").classList.remove("activeTabKidz");
    document.getElementById(x).classList.add("activeTabKidz");
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("SubCategoryKidz")[i].style.display = "none";
    }
    for (var i = 0; i < document.getElementsByClassName(x).length; i++) {
      document.getElementsByClassName(x)[i].style.display = "block";
    }
    console.log(x);
}

function getMissionKidz(x) {
  document.getElementById("missonKidz1").classList.remove("activeMissionKidz");
  document.getElementById("missonKidz2").classList.remove("activeMissionKidz");
  document.getElementById("missonKidz3").classList.remove("activeMissionKidz");
  document.getElementById(x).classList.add("activeMissionKidz");
  for (var i = 0; i < 3; i++) {
    document.getElementsByClassName("SubMissionKidz")[i].style.display = "none";
  }
  for (var i = 0; i < document.getElementsByClassName(x).length; i++) {
    document.getElementsByClassName(x)[i].style.display = "block";
  }
}

function myFunction(a) {
  var x = document.getElementById(a);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  // document.getElementById(b).classList.toggle('show');
  x.classList.toggle('hide');
}

function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, 17)
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17))
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber
        clearInterval(interval)
      } else {
        currentNumber += inc
      }
      callback(currentNumber)
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  animateNumber(1053, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('clientsCountKidz').innerText = formattedNumber
  })
  
  animateNumber(378, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('employmentsKidz').innerText = formattedNumber
  })
  
  animateNumber(5360, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('hoursKidz').innerText = formattedNumber
  })

  animateNumber(981, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('awardsKidz').innerText = formattedNumber
  })
})

// end DUC


// start NGHIA
// end NGHIA