const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Rome', 'Berlin'],
        answer: 0
    },
    {
        question: 'Who is the president of the United States?',
        options: ['Joe Biden', 'Donald Trump', 'Barack Obama', 'George Washington'],
        answer: 0
    },
    // Add more questions as needed
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionElements = document.getElementsByClassName('option');}

    questionElement.textContent = questions[currentQuestion].question;

    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = questions[currentQuestion].options[i];}