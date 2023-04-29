// let myHeading = document.querySelector('h1');
// myHeading.textContent = "Bonjour, monde !";
/* 
commentaires
*/

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Community_logo.png') {
      myImage.setAttribute('src', 'images/adventureTime.png');
    } else {
      myImage.setAttribute('src', 'images/Community_logo.png');
    }
});
