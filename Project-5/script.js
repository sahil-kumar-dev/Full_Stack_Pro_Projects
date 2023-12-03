const options = document.querySelectorAll(".radioBtn")
const nextBtn = document.querySelector('.btn')
const question = document.getElementById('question')
const opt_A = document.getElementById('optionA')
const opt_B = document.getElementById('optionB')
const opt_C = document.getElementById('optionC')
const opt_D = document.getElementById('optionD')
const score = document.querySelector(".score")

const questions = [
	{
		question: "What is 2+2?",
		optiona: "2",
		optionb: "3",
		optionc: "6",
		optiond: "4",
		correctOption: "d"
	},
	{
		question: "Which planet is known as the Red Planet?",
		optiona: "Earth",
		optionb: "Mars",
		optionc: "Venus",
		optiond: "Jupiter",
		correctOption: "b"
	},
	{
		question: "What is the capital of France?",
		optiona: "Berlin",
		optionb: "Madrid",
		optionc: "Paris",
		optiond: "Rome",
		correctOption: "c"
	},
	{
		question: "Who wrote 'Romeo and Juliet'?",
		optiona: "Charles Dickens",
		optionb: "William Shakespeare",
		optionc: "Jane Austen",
		optiond: "Mark Twain",
		correctOption: "b"
	},
	{
		question: "What is the largest ocean on Earth?",
		optiona: "Atlantic Ocean",
		optionb: "Indian Ocean",
		optionc: "Southern Ocean",
		optiond: "Pacific Ocean",
		correctOption: "d"
	},
	{
		question: "Which country is known as the Land of the Rising Sun?",
		optiona: "China",
		optionb: "Japan",
		optionc: "South Korea",
		optiond: "Vietnam",
		correctOption: "b"
	},
	{
		question: "What is the capital of Australia?",
		optiona: "Sydney",
		optionb: "Melbourne",
		optionc: "Canberra",
		optiond: "Brisbane",
		correctOption: "c"
	},
	{
		question: "Who painted the Mona Lisa?",
		optiona: "Vincent van Gogh",
		optionb: "Pablo Picasso",
		optionc: "Leonardo da Vinci",
		optiond: "Michelangelo",
		correctOption: "c"
	},
	{
		question: "What is the largest mammal?",
		optiona: "Elephant",
		optionb: "Blue Whale",
		optionc: "Giraffe",
		optiond: "Hippopotamus",
		correctOption: "b"
	},
	{
		question: "In which year did Christopher Columbus reach the Americas?",
		optiona: "1492",
		optionb: "1501",
		optionc: "1607",
		optiond: "1620",
		correctOption: "a"
	},
];
window.onload = () => {
	nextQuestion()
}
let questionNumber = 1
let startingIndex = 0
let current_score = 0
let flag = false
function nextQuestion() {
	question.innerHTML = questions[startingIndex].question
	opt_A.innerHTML = questions[startingIndex].optiona
	opt_B.innerHTML = questions[startingIndex].optionb
	opt_C.innerHTML = questions[startingIndex].optionc
	opt_D.innerHTML = questions[startingIndex].optiond
	score.innerHTML = current_score
}


nextBtn.addEventListener('click', () => {

	if (flag) {
		startingIndex++
		flag = false
		option.disabled=false
	}


	nextQuestion()
	document.querySelector('.question-no').innerHTML = startingIndex + 1

	options.forEach(option => {
		option.checked = false
		option.nextElementSibling.removeAttribute('style')
	})
	flag = false
})

options.forEach(option => {
	option.addEventListener('input', () => {
		// option.disabled = true
		if (option.id === questions[startingIndex].correctOption) {
			option.nextElementSibling.style.border = "2px solid green"
			option.nextElementSibling.style.boxShadow = "0 0 2px 2px green"
			current_score++
		} else {
			
		}
		flag = true
	})
})
console.log(options);