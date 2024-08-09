
    //   ADDING QUESTION ARRAYS
  const questions = [
    {
        question: "What is a Variable in JavaScript?",
        answers: [
            { text:  "A section of the webpage", correct: false },
            { text: "A container for storing data values", correct: true },
            { text: "A type of JavaScript function", correct: false },
            { text: "An operation in mathematics", correct: false }
        ]
    },
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What does the `===` operator check?",
        answers: [
            { text: "Only value equality", correct: false },
            { text: "Only type equality", correct: false },
            { text: "Both value and type equality", correct: true },
            { text: "Neither value nor type equality", correct: false }
        ]
    },
    {
        question: "What is an Array in JavaScript?",
        answers: [
            { text: "A function that performs an operation", correct: false },
            { text: "A single variable used to store different elements", correct: true },
            { text: "A series of characters", correct: false },
            { text: "A conditional statement", correct: false }
        ]
    },
    {
        question: "Which method can add one or more elements to the end of an array?",
        answers: [
            { text: "array.unshift()", correct:false },
            { text: "array.push()", correct: true },
            { text: "array.pop()", correct: false },
            { text: "array.slice()", correct: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function myFunction()", correct: true },
            { text: "create myFunction()", correct: false },
            { text: "function: myFunction()", correct: false },
            { text: "function = myFunction()", correct: false }
        ]
    },
    {
        question: "Which statement is used to execute actions based on a condition?",
        answers: [
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "if", correct: true },
            { text: "switch", correct: false }
        ]
    },
    {
        question: "What is the purpose of a loop in JavaScript?",
        answers: [
            { text: "To perform a single action once", correct: false },
            { text: "To store multiple values in a single variable", correct: false },
            { text: "To execute a block of code a number of times", correct: true },
            { text: "To speed up code execution", correct: false }
        ]
    },
    {
        question: "Which object is the top-level object in a browser environment?",
        answers: [
            { text: "Document", correct: false },
            { text: "Window", correct: true },
            { text: "Console", correct: false },
            { text: "Navigator", correct: false }
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called `app.js`?",
        answers: [
            { text: "<script href='app.js'>", correct:false },
            { text: "<script source='app.js'>", correct: false },
            { text: "<script src='app.js'>", correct: true },
            { text: "<script link='app.js'>", correct: false }
        ]
      }
  
      ]
  

export default questions;