const display = document.getElementById("input");
console.log(display);
let buttons = document.querySelectorAll(".button");
console.log(buttons);

let string = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            display.innerHTML = string;
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            display.innerHTML = '0';
        }

        else{
            string += e.target.innerHTML;
            display.innerHTML = string;
        }
    })
})