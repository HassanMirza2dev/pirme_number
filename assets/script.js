let result = document.querySelector("#result");
let check = document.querySelector("#check");

check.addEventListener("click", () => {
    let isPrime = true;
    let number = document.querySelector("#number").value
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
        }

    }
    if (isPrime == true) {
        result.textContent = number + " is prime";
    }
    else {
        result.textContent = number + " not prime";
    }
    document.querySelector("#number").value = "";
})