/*Project 1: Build a simple counter.

    Requirements:
-Create a Github repository for this project. 
- The count starts at 0
    - Have two buttons on the screen, one to increase(+) the count by 1, and one button to lower(-) the count by 1.
        - Pressing the plus button increases the count by 1, pressing the minus button decreases by 1
            - Create a Github repository for this project and write Git commits as you go.
- Send me the project for review and get started on the next project.*/

const countEl = document.getElementById("count-el");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
let count = 0;


/*function animateBounce(element) {
    element.classList.add("bounce");
    void element.offsetWidth;
    element.classList.remove("bounce");
}*/


increaseBtn.addEventListener("click", () => {
    count++
    countEl.textContent = count;
    //animateBounce(countEl);
    if (count > 0) {
        countEl.style.color = "green";
    }
    if (count === 0) {
        countEl.style.color = "black";
    }
});

decreaseBtn.addEventListener("click", () => {
    count--
    countEl.textContent = count;
    //animateBounce(countEl);
    if (count < 0) {
        countEl.style.color = "red";
    }
    if (count === 0) {
        countEl.style.color = "black";
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countEl.textContent = count;
    countEl.style.color = "black";
    //animateBounce(countEl);
})