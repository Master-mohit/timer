//  let count = 0;
//   const timer = document.getElementById('progressText');

//   const interval = setInterval(() => {
//     count++;
//     timer.innerText = "Progress: " + count + "%";
//     if (count === 100) {
//       clearInterval(interval);
//     }
//   }, 100);

  let count = 0;
  const button = document.querySelector('#time button');
const timer = document.getElementById('progressText');

const interval = setInterval(() => {

  let randomIncrement = Math.floor(Math.random() * 10) + 1; 
  count += randomIncrement;
  if(count > 100) count = 100; 
  timer.innerText = "Progress: " + count + "%";
  if (count === 100) {
    clearInterval(interval);

    button.style.display = "initial";
    timer.style.display = "none";// Show the button when progress reaches 100%

  }
}, 100);
