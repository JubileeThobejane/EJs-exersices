// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Hi world
</h1>`;

console.log('Good morning Jubilee');

/*for(let num=0;num<=100;num++){
  if((num%3&&5)===0){console.log('fizzbuzz');}
else if(num%3===0){console.log('fizz');}
else if(num%3===0){console.log('buzz');}
else (console.log(num))}*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}