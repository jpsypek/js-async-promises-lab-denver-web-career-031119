const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

questionContainer = document.querySelector('.question-container')

let question;

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise ((reject,resolve) => {
    setTimeout(function(){
    }, time)
  })
}

function removeQuestion() {
  questionContainer.innerHTML = ""
}

function appendQuestion(q) {
  questionContainer.innerHTML = q.questionText
}

function askQuestionThenRemoveQuestion(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise ((reject,resolve) => {
    setTimeout(function(){
    removeQuestion()}, time)
  })
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(b) {
     b.classList.toggle('hide')
   })
}

function displayQuestionOnClick() {
  question = questions[0]
  toggleTrueAndFalseButtons
  askButton = document.querySelector('a.btn')
  return askButton.addEventListener('click', function() {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
    })
}
