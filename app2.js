var qAnda = [
  ['Question1: What is my favorite color?', 'My favorite color is Green.',],
  ['Question2: Is my country of origin Japan?', 'Yes, it is.'],
  ['Question3: What is my favorite Japanese food?', 'Correct Answer is Ramen.']
];
var userAnswerCorrectly = false;
var score = 0;

//counter
function counter() {
    if(userAnswerCorrectly === true){
  score += 1;
  }
}

//writing in Browser
function writeInBrowser() {
  var oListElement = document.getElementById('questions');
  var listElement = document.createElement('li');
  listElement.id = 'q'+ i;
  oListElement.appendChild(listElement);
  listElement.textContent = qAnda[i][0] + ' -' + qAnda[i][1]
  document.body.appendChild(oListElement);
}

//photo shows up when answer is correct
function photoShow() {
  var idOfListEl = document.getElementById('q'+i);
  var imgEl = document.createElement('img');
  imgEl.src = 'img/correct.jpeg'
  idOfListEl.appendChild(imgEl);
}

for( var i = 0; i < qAnda.length; i += 1){
  var userAns = prompt(qAnda[i][0]);
  if(userAns.toUpperCase() === 'GREEN'){
    alert('You are correct!');
    userAnswerCorrectly = true;
    writeInBrowser();
    counter();
    photoShow();
  } else if(userAns.toUpperCase() === 'YES'){
    alert('You are correct!');
    userAnswerCorrectly = true;
    writeInBrowser();
    counter();
    photoShow();
  } else if(userAns.toUpperCase() === 'RAMEN'){
    alert('You are correct!');
    userAnswerCorrectly = true;
    writeInBrowser();
    counter();
    photoShow();
  } else {
    alert('Incorrect.');
    userAnswerCorrectly = false;
    writeInBrowser();
  }
}

document.write('You answered ' + score + ' out of 3 questions correctly!');



