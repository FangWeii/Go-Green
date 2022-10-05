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

function ValidateInput() {
  let formElement = document.querySelector(".form");
  let inputElement = formElement.querySelectorAll(".form-input");
  console.log(inputElement);
  for (let i = 0; i < inputElement.length; i++) {
      if(inputElement[i].value == ""){
          inputElement[i].parentElement.querySelector(".error-message").innerText = `${inputElement[i].id} can't be empty`
      } else {
          inputElement[i].parentElement.querySelector(".error-message").innerText = "";
      }
  }
}

function addNew(){
  ValidateInput();
  let formElement = document.querySelector(".form");
  let errorElement = formElement.querySelectorAll(".error-message");
  let arrErrorElement = [];
  for (let i = 0; i < errorElement.length; i++) {
      arrErrorElement.push(errorElement[i].innerText) 
  }
  let checkErrorElement = arrErrorElement.every(value => value == "");
  if(checkErrorElement){
      let name = document.getElementById("name").value;
      let mail = document.getElementById("mail").value;
      let phone = document.getElementById("phone").value;
      let message = document.getElementById("message").value;
      let donorMessage = localStorage.getItem("donorMessage") ? JSON.parse(localStorage.getItem("donorMessage")) : [];
      donorMessage.push({
          name : name,
          mail : mail,
          phone : phone,
          message : message
      })
      localStorage.setItem("donorMessage", JSON.stringify(donorMessage));
      render();
  }
}

function render() {
  let donorMessage = localStorage.getItem("donorMessage") ? JSON.parse(localStorage.getItem("donorMessage")) : [];
  let donor = `
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Action</th>
      </tr>
  `
  donorMessage.map((value, index) => {
    donor += `
          <tr>
              <td>${index+1}</td>
              <td>${value.name}</td>
              <td>${value.mail}</td>
              <td>${value.phone}</td>
              <td>${value.message}</td>
              <td>
                  <button class ='btn-nghia' onclick = 'editItem(${index})'>Edit</button>
                  <button class ='btn-nghia' onclick = 'removeItem(${index})'>Delete</button>
              </td>
          </tr>
      `
  })
  document.getElementById("tableContent").innerHTML = donor;
}


function editItem(index){
  let donorMessage = localStorage.getItem("donorMessage") ? JSON.parse(localStorage.getItem("donorMessage")) : [];
  document.getElementById("name").value = donorMessage[index].name;
  document.getElementById("mail").value = donorMessage[index].mail;
  document.getElementById("phone").value = donorMessage[index].phone;
  document.getElementById("message").value = donorMessage[index].message;
  document.getElementById("index").value = index;
  document.getElementById("save").style.display = "inline-block"
  document.getElementById("add").style.display = "none"
}

function changeItem(){
  let donorMessage = localStorage.getItem("donorMessage") ? JSON.parse(localStorage.getItem("donorMessage")) : [];
  let index = document.getElementById("index").value;
  donorMessage[index] = {
      name : document.getElementById("name").value,
      mail : document.getElementById("mail").value,
      phone : document.getElementById("phone").value,
      message : document.getElementById("message").value
  }
  localStorage.setItem("donorMessage", JSON.stringify(donorMessage));
  render();
  document.getElementById("save").style.display = "none"
  document.getElementById("add").style.display = "inline-block"
}

function removeItem(index){
  let donorMessage = localStorage.getItem("donorMessage") ? JSON.parse(localStorage.getItem("donorMessage")) : [];
  let removed = donorMessage.splice(index, 1);
  console.log(removed);
  localStorage.removeItem(removed);
  localStorage.setItem("donorMessage", JSON.stringify(donorMessage));
  render();
}
// end DUC


// start NGHIA
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".game-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
// end NGHIA