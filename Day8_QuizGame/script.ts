// Define the Question Interface
interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

// Quiz Class
class Quiz {
    private questions: Question[];
    private currentQuestionIndex: number;
    private score: number;

    constructor(questions: Question[]) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    // Display the current question
    displayQuestion(): void {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const questionText = document.querySelector('.question-text') as HTMLElement;
        questionText.textContent = currentQuestion.question;

        const choicesContainer = document.querySelector('.choices') as HTMLElement;
        choicesContainer.innerHTML = '';

        currentQuestion.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.addEventListener('click', () => this.checkAnswer(choice));
            choicesContainer.appendChild(button);
        });
    }

    // Check the user's answer
    checkAnswer(selectedAnswer: string): void {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            this.score++;
        }
        this.currentQuestionIndex++;

        const nextBtn = document.querySelector('.next-btn') as HTMLElement;
        nextBtn.style.display = 'block';
    }

    // Move to the next question or display the final score
    nextQuestion(): void {
        const nextBtn = document.querySelector('.next-btn') as HTMLElement;
        nextBtn.style.display = 'none';

        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.displayScore();
        }
    }

    // Display the final score
    displayScore(): void {
        const scoreContainer = document.querySelector('.score') as HTMLElement;
        scoreContainer.textContent = `Your Score: ${this.score} / ${this.questions.length}`;
        scoreContainer.style.display = 'block';
    }
}

// Sample Questions
const questions: Question[] = [
    {
        question: 'What is the capital of France?',
        choices: ['Paris', 'London', 'Rome', 'Berlin'],
        correctAnswer: 'Paris'
    },
    {
        question: 'What is the largest planet in our solar system?',
        choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Jupiter'
    },
    {
        question: 'Who wrote Hamlet?',
        choices: ['Shakespeare', 'Hemingway', 'Tolkien', 'Poe'],
        correctAnswer: 'Shakespeare'
    }
];

// Initialize Quiz
const quiz = new Quiz(questions);
quiz.displayQuestion();

// Event Listener for Next Button
const nextBtn = document.querySelector('.next-btn') as HTMLElement;
nextBtn.addEventListener('click', () => quiz.nextQuestion());
