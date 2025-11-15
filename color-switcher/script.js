/*Project 2: Color Switcher
Module 4: JavaScript Projects
Project 2: Build a background color switcher.

    Requirements:
-Create a Github repository for this project. 
- Create an HTML select dropdown with at least 5 color options in it
    - use the "onchange" attribute so that every time a user selects a color using the dropdown, it calls your JavaScript function that changes the background color of the BODY to the color selected in the dropdown
        - Send me the project for review and get started on the next project.*/

const bodyEl = document.getElementById("body-el");
  
const selection = document.getElementById("colors");
const choice = document.getElementById("choice");

selection.addEventListener("change", () => {
    let option = selection.value;
    let length = selection.length;
    bodyEl.style.backgroundColor = option;
    choice.textContent = `You selected: ${option} color out of ${length} options.`;
});
        