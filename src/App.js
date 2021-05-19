import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const previousPage =() => {

		const previous = currentQuestion - 1;
		if(previous < questions.length && previous !== -1 ){
			setCurrentQuestion(previous)
		}
	}

   const nextPage = () =>{
	const nextQuestion = currentQuestion + 1;
	if (nextQuestion < questions.length ) {
		setCurrentQuestion(nextQuestion);	
   }else{alert(" You are already on last Question, If you want to submit quiz then click on Submit Button.")}
	
}

const submit = () =>{
	alert("Are you really want to finish this Quiz ?");
	setShowScore(true)
}

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		/*const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			
			setShowScore(true);
		}*/
	};
	return (
		
		<div className='app'>
		
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length} <br/>
					
				</div>
			) : (
				<div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
							
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							
						))}
					</div>
					<div>
					<br/>
			  <div className="row">
				<div class="col-5 btn  page-item">
				  <a class="page-link" onClick={previousPage}>Previous </a>
				</div>
				<div class="col-3 btn page-item">
				  <a class="page-link" onClick={nextPage}>Next</a>
				</div>
				<div class="col-4 btn page-item">
				  <a class="page-link" onClick={submit}>Submit</a>
				</div>
				
				</div>
			  
			  </div>
					</div>
					
			)}
			
		</div>
		
		
	);
}