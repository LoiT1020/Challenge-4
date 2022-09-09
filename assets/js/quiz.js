window.alert(
  "You have 40 points at beginning, every correct answer gives 10 more points, vice versa, incorrect one take 10 points away, you have the right to give up, but try your best to pass it"
);
let questions = [
  {
    id: 1,
    question: "What is your name?",
    answer: "Bill",
    options: ["Mark", "Bill", "Steven", "Elon"],
  },
  {
    id: 2,
    question: "Tell me what you want",
    answer: "Gain Weight",
    options: ["Food", "Food", "Gain weight", "Food"],
  },
  {
    id: 3,
    question: "What do I want to eat",
    answer: "Not in mood",
    options: ["Not in mood", "Japanese food ", "Chinese Food", "Mexican food"],
  },
  {
    id: 4,
    question: "Here is a free score for your break, choose A",
    answer: "Choose me",
    options: ["Choose me", "A", "A", "A"],
  },
  {
    id: 5,
    question: "Where do you live now?",
    answer: "Right here",
    options: ["US", "Some where on US", "Right here", "On earth"],
  },
  {
    id: 6,
    question: "Final question!",
    answer: "I want to see my score!",
    options: [
      "Is that a quesion?",
      "Are we done?",
      "Get me out of here!!",
      "I want to see my score!",
    ],
  },
];
let question_count = 0;
let points = 40;

window.onload = function () {
  show(question_count);
};

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  question.innerHTML = ` <h2> Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
  toggleActive();
}

function toggleActive() {
  //lession learn, li stand for <li>, .option is the class="option"
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
function next() {
  if (question_count == questions.length - 1) {
    location.href = "final.html";
  }
  let user_answer = document.querySelector("li.option.active").innerHTML;

  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  } else if (user_answer !== questions[question_count].answer) {
    points -= 10;
    sessionStorage.setItem("points", points);
  }

  console.log(points);

  question_count++;
  show(question_count);
  console.log(question_count);
  return;
}
