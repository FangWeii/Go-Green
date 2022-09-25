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
// end DUC


// start NGHIA
// end NGHIA