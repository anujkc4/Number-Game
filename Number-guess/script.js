const rannum = parseInt(Math.random() * 100 + 1);
const form = document.querySelector("form");
let array = [];
let attempts = 10;



form.addEventListener("submit", (event) => {
    event.preventDefault();
    attempts -= 1;
    const input = parseInt(document.querySelector("#input").value);
    const display = document.querySelector("#display3");
    let pre = document.querySelector("#display1");
    let rem = document.querySelector("#display2");


    if (attempts < 0) {
        display.innerHTML = `GAME OVER: ${rannum} is a right guess`

    } else if (input < 0 || isNaN(input)) {
        attempts += 1;
        display.innerHTML = `please enter a valid number: ${input}`;
        array.push(input);
        pre.innerHTML = `Previous Guess: ${array}`;
        rem.innerHTML = `Remaining guess: ${attempts}`

    } else if (input !== rannum) {
        display.innerHTML = `your guess is: ${input}`;
        array.push(input);
        pre.innerHTML = `Previous Guess: ${array}`;
        rem.innerHTML = `Remaining guess: ${attempts}`

    }else{
        display.innerHTML = `CONGARTULATION YOU WON: ${input}`;
        array.push(input);
        pre.innerHTML = `Previous Guess: ${array}`;
        rem.innerHTML = `Remaining guess: ${attempts}`
        document.querySelector("#submit").disabled = true;

    }
});

