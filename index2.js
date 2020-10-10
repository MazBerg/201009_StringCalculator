
//Main
const mainContainer = document.getElementById("main-container")
const equationField = document.getElementById("equation-field")
const solveButton = document.getElementById("solve-button")
const solutionDisplay = document.getElementById("solution-display")

// //Error window
// const modalWindow = document.querySelector(".modal-window")
// const exitButton = document.querySelector(".exit-button")

// //Hide modal on exit button click
// exitButton.addEventListener("click", () => modalWindow.style.display = "none")

let answer = null

solveButton.addEventListener("click", () => {
    // Clears the solution contents and resets answer on each click
    solutionDisplay.innerHTML = ``
    answer= null
	
    const equation = equationField.value
    //Turn input into a string and split each character to make an array of strings
    const equationArray = equation.toString().split("")
    //Remove white space
    const newArray = equationArray.filter(i => i != " ")
   	
		//Set answer to perform operations on
		answer = parseInt(newArray[0])
		//Show error if equation cannot be calculated
		answer === null ? modalWindow.style.display="flex" : ""
    
		//Loop through array to do operation
    const getAnswer = newArray.forEach((item, i) => {
      
			//addition  
			if (item === "+"){
            answer+= parseInt(newArray[i+1])
        }
			//subtraction
        else if (item === "-"){
            answer-= parseInt(newArray[i+1])
        }
			//multiplication
        else if (item === "*"){
            answer*= parseInt(newArray[i+1])
        }
			//division 
        else if (item === "/"){
            answer/= parseInt(newArray[i+1])
        }
    })
		//Making a div to display the answer in
    const answerDiv = document.createElement("div")
    answerDiv.textContent = answer
    solutionDisplay.appendChild(answerDiv)
		
	answer === null ? modalWindow.style.display="flex" : ""
})


