let button = document.getElementById("counterbutton")
let counterdisplay=document.getElementById("counter")

let count=0;
button.addEventListener("click", () => {
    count++;
    counterdisplay.textContent=count;
})

