import { dateIdeas } from './dateIdeas.js';
//get letter from input in html
//create index from random number

// function getRandomDate(letter, index) {
//   const upperLetter = letter.toUpperCase();
//   const ideas = dateIdeas[upperLetter];
//   index = Math.floor(Math.random() * ideas.length);

//   if (!ideas) return `No ideas for letter ${letter}`;
//   if (index < 1 || index > ideas.length) return `Please choose 1 to ${ideas.length}`;

//   return ideas[index - 1];
// }
let resultHolder = document.getElementById("result-holder");
let myLetter = document.getElementById("letter-picker");

function getRandomDate(letter) {
  const upperLetter = letter.toUpperCase();
  const ideas = dateIdeas[upperLetter];

  if (!ideas) return `No ideas for letter ${letter}`;

  const index = Math.floor(Math.random() * ideas.length);
  return `${ideas[index]}`;
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let pickedLetter = myLetter.value.trim();
  let result = getRandomDate(pickedLetter);
  resultHolder.textContent = result;
});


window.getRandomDate = getRandomDate; // 👈 Makes it available globally
