const form = document.querySelector('.answer-form');
const next = document.querySelector('#next');
const number = document.querySelectorAll('.number');
const table = document.querySelector('table');
const processed = document.querySelector('.processed');
const answers = [];

number.forEach(number => {
  number.setAttribute('id', `${number.innerText}`);
});

const myRequest = new Request('questions.json');

table.addEventListener('click', number => {
  if (number.target.classList.contains('number')) {
    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        for (const question of data) {
          if (question.id == number.target.id) {
            form.innerHTML = `
            <div class="qText">
            ${question.text}
          </div>
          <div class="form-check my-2"><input type="radio" value="A" name="response"><label class="response">${question.answerA}</label></div>
          <div class="form-check my-2"><input type="radio" value="B" name="response"><label class="response">${question.answerB}</label></div>
          <div class="form-check my-2"><input type="radio" value="C" name="response"><label class="response">${question.answerC}</label></div>
          <div class="form-check my-2"><input type="radio" value="D" name="response"><label class="response">${question.answerD}</label></div>`
          }
          var answer = document.querySelector("input[name=response]:checked");
          console.log(answer);
          // answers[number.target.id] = response.value;
        }
      })
      .catch(console.error);
  }
})

let output = 60;
const timer = setInterval(() => {
  processed.querySelector('span').textContent = `${output}`
  processed.classList.add('blue');
  if (output === 0) {
    clearInterval(timer);
  } else {
    output--;
  }
}, 60000);


// form.addEventListener('click', selection => {
//   selection.preventDefault();
//   console.log(selection.target);
//   if (jjj ) {
//     selection.target.classList.add('selected');
//   }
// });




