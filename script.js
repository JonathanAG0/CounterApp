let value = 0;
const counter = document.querySelector("#counter");    
const btns = document.querySelectorAll(".btn");


btns.forEach(function(btn) {
    btn.addEventListener("click", function (change){
        const event = change.currentTarget.classList;

        if (event.contains("decrease")) {
            value--;
        } else if (event.contains("increase")) {
            value++;
        } else {
            value = 0;
        }
        if (value < 0) {
            counter.style.color = "red";
        }
        if (value > 0) {
            counter.style.color = "green";
        }
        if (value === 0) {
            counter.style.color = "#222";
        }
        counter.textContent = value;
    });
});
