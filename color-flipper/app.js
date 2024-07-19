const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const randomNmber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNmber];
    color.textContent = colors[randomNmber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}