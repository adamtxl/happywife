console.log('My wife is my heart');

var myButton = document.getElementById('myButton');
const weddingDate = new Date('2022-09-27')

myButton.addEventListener('click', function () {
  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the current date and wedding date
  const differenceInTime = currentDate.getTime() - weddingDate.getTime();

  // Calculate the difference in days
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  // Display an alert with the number of days since the wedding date
  alert('We got married ' + differenceInDays + ' days ago!');
});