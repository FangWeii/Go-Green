// start PHUONG
// end PHUONG


// start VY
var api="https://jsonplaceholder.typicode.com/posts"
fetch(api)
    .then((Response) => {
        return Response.json()
    })
    .then((data) => {
        document.getElementById("penguins-upper-content").innerHTML = (data[0].body + data[1].body);
        document.getElementById("penguins-lower-content").innerHTML = (data[2].body + data[3].body);
    })
    .catch(() => {
        console.log('lỗi api');
    })
// end VY


// start DUC
// end DUC


// start NGHIA
// end NGHIA