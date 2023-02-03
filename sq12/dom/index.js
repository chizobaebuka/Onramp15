const counterValue = document.getElementById("counter");
const btns = document.querySelectorAll(".btn");
let count = 0
btns.forEach((btn) => {
    btn.addEventListener("click", function(e){
        const className = e.currentTarget.classList;
        if(className.contains("decrease")){
            count--;
        }else if (className.contains("increase")){
            count ++;
        }else if (className.contains("reset")){
            count = 0;
        }
        counterValue.textContent = count;
    })
})