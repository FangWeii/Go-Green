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
// email

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

let check = new Boolean(true);

function getCategories2Kidz(x) {
  if(check != false){
    document.getElementById("OurMissionKidz").classList.remove("activeKidz");
    document.getElementById("OurVisionKidz").classList.remove("activeKidz");
    document.getElementById("OurHistoryKidz").classList.remove("activeKidz");
    document.getElementById(x).classList.add("activeKidz");
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("SubMissionKidz")[i].style.display = "none";
    }
    for (var i = 0; i < document.getElementsByClassName(x).length; i++) {
      document.getElementsByClassName(x)[i].style.display = "block";
    }
  } else {
    document.getElementById("OurMissionKidz").classList.remove("activeKidz");
    document.getElementById("OurVisionKidz").classList.remove("activeKidz");
    document.getElementById("OurHistoryKidz").classList.remove("activeKidz");
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("SubMissionKidz")[i].style.display = "none";
    }
    for (var i = 0; i < document.getElementsByClassName(x).length; i++) {
      document.getElementsByClassName(x)[i].style.display = "none";
    }
  }
  
}
// end DUC


// start NGHIA
// end NGHIA