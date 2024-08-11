import "../css/Home.css"
import { useState,useRef } from "react"
import questions from "../pages/Questions"
import CbtTimer from "../2Component/CbtTimer"



const Home = () => {

const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [showResults, setShowResults] = useState(false);
const [answerSelected, setAnswerSelected] = useState(false)
const [selectedAnswer, setSelectedAnswer] = useState(null)
 const startRef = useRef(null)


const handleFresh  = () =>{
window.location.reload();
handleStart()

};

 const handleStart = () => {
  if
  (startRef.current.style.display === 'none'){
    startRef.current.style.display = 'block';
  }else{
    startRef.current.style.display = 'none'
    handleFresh()
  }
  
 
 };

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

const handleSubmit = () => {
  setShowResults(true);
  
 
};



  return (
    <>
    <div><button onClick={handleStart}  className={  "show"}>Refresh Test</button></div>
    
    <div className="test-app" ref={startRef} style={{
      display: 'none', minHeight:"70vh"
    }}>
      
      <div> <CbtTimer handleSubmit={handleSubmit} /> </div>
      
   {showResults ? (
    <div>
      <h1>Results</h1>
      <h2> You Scored: { score} out of { questions.length}</h2>
    </div>
    ):(
      <div>
       <h1>Question {currentQuestion + 1} </h1>
       <p style={{fontSize:"20px", textAlign:"center"}}>{questions[currentQuestion].question} </p>
       {questions[currentQuestion].answers.map((answer, index)=> (
        <button key={index} onClick={() => handleAnswer(answer)} style={{ backgroundColor:
          selectedAnswer === answer ? "#a06" : "",
        }}> {answer.text} </button>
       ))}
       {currentQuestion > 0 &&  (
        <button onClick={handlePrevious} className="previous-button">Previous</button> 
       ) }
       {answerSelected &&  currentQuestion < questions.length - 1 && (
        <button onClick={handleNext} className="next-button">Next</button>
       )}
       {currentQuestion === questions.length - 1 && 
        answerSelected && (
          <button onClick={handleSubmit}>Submit</button>
        
       )}
       
       
      
       </div>
   )

   }


    </div>
    </>
  )
}

export default Home