// const form = document.querySelector("form");
// const username = document.querySelector("#username");
// form.addEventListener('submit',function(e) {
//     e.preventDefault();
//     if(!username.value.length>20 || username.value.length<8){
//         alert("user is not suit");
//         e.preventDefault();
//     }
//     else{
//        (alert("form submitted"))
//     }
// })
const form = document.querySelector("form");
const username = document.querySelector("#username");
form.addEventListener('submit',function(e) {
    e.preventDefault();
    if(username.value.length<8){
        alert("correct length");
    }
        // e.preventDefault()
    else if(username.value.length>8){
       alert("not suit enter 8")
    }
    else{
       (alert("form submitted"))
    }
})

