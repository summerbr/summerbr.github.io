let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/graham.jpeg') {
        myImage.setAttribute('src', 'images/arya.jpg');
    } else {
        myImage.setAttribute('src', 'images/graham.jpeg');
    }
}
/*let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi ' + storedName;
}
myButton.onclick = function() {
    setUserName();
} */

//Add live photo to page later?
//const myNewPlayer = LivePhotosKit.Player();
//document.body.appendChild(myNewPlayer);