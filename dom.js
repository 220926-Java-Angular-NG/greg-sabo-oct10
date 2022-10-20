//access id main

let mainDiv = document.getElementById("main");

//add a ELEMENT (this time a header)
let header = document.createElement('h1');
// header.classList.add('main');
header.innerText = "Things TO DO today";

//add this element to id main

mainDiv.appendChild(header);

//manipulate the dom to add elements
let boardDiv = document.getElementById("board");

let submitButton = document.getElementById("submitButton");

submitButton.addEventListener('click', (event) =>{
    event.preventDefault();
    let message = document.getElementById("announcement").value;

    //create new element to add to div
    let newItem =document.createElement('h3');
    newItem.innerHTML = message;

    //now add it
    boardDiv.appendChild(newItem);
})

//manipulate the dom to remove elements