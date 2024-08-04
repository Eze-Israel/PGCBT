import "../css/Home.css"
import { useState } from "react"
import questions from "../pages/Questions"

const Home = () => {
const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [showResults, setShowResults] = useState(false);
const [answerSelected, setAnswerSelected] = useState(false)
const [selectedAnswer, setSelectedAnswer] = useState(null)

const handleAnswer = (answer) => {
  setSelectedAnswer(answer)
  if(answer.correct){
    setScore(score + 1);
  }
  setAnswerSelected(true);
};

const handleNext = () => {
  setAnswerSelected(false);
  setCurrentQuestion(currentQuestion + 1)
}


const handlePrevious = () => {
  setAnswerSelected(false);
  setCurrentQuestion(currentQuestion - 1);
}

const handleFinish = () => {
  setShowResults(true);
};



  return (
    <div className="test-app">
   {showResults ? (
    <div>
      <h1>Results</h1>
      <p>Score: { score} out of { questions.length}</p>
    </div>
    ):(
      <div>
       <h1>Question {currentQuestion + 1} </h1>
       <p>{questions[currentQuestion].question} </p>
       {questions[currentQuestion].answers.map((answer, index)=> (
        <button key={index} onClick={() => handleAnswer(answer)} style={{ backgroundColor:
          selectedAnswer === answer ? "#a06" : "",
        }}> {answer.text} </button>
       ))}
       {currentQuestion > 0 &&  (
        <button onClick={handlePrevious} className="previous-button">Previous</button> 
       ) }
       {answerSelected && (
        <button onClick={handleNext} className="next-button">Next</button>
       )}
       {currentQuestion === questions.length - 1 && 
        answerSelected && (
          <button onClick={handleFinish}>Finish</button>
        
       )}
       
       
      
       </div>
   )

   }


    </div>
  )
}

export default Home