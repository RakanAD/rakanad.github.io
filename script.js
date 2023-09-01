let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const visible = document.querySelector("#visible");

const body = document.querySelector("body");

let maSuperVariable;

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count -= 1;
        }else if(styles.contains("increase")){
            count += 1;
        }else {
            count = 0;
        }

        if(count < 0){
            value.style.color = "red";
        }
        if(count > 0){
            value.style.color = "#100ce4";
        }
        if(count === 0){
            value.style.color = "black";
        }
        
        value.textContent = count;
    });
});

visible.addEventListener("click", () =>{
    value.style.visibility = "visible";
})
