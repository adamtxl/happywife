console.log('My wife is my heart');

var myButton = document.getElementById('myButton');
const weddingDate = new Date('2022-09-27')


myButton.addEventListener('click', function () {
  // Display an alert when the button is clicked
  alert('We got marred on '+ weddingDate + '!');
});
