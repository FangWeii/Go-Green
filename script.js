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

function getCategories2Kidz(x) {
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
  console.log(x);
}
// end DUC


// start NGHIA
// end NGHIA