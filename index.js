const mainContainer = document.getElementById("main-container")
const equationField = document.getElementById("equation-field")
const solveButton = document.getElementById("solve-button")
const solutionDisplay = document.getElementById("solution-display")

solveButton.addEventListener("click", function() {
    // Clears the solution contents on each click
    solutionDisplay.innerHTML = ``
    
    // Write your code here 👇
    let solution = 0
    const equationCharsAll = equationField.value.split("")
    const equationCharsOnly = equationCharsAll.filter( (char) => {
        return (char !== " ")
    })

    // Creates Array of Operators
    const equationOperator = equationCharsOnly.filter( (char) => {
        return isNaN(char)
    })

    // Save location of Operators
    const operatorPos = []
    const numberComponents = []
    let counter = 0
    
    for(let i = 0; i < equationCharsOnly.length; i++) {
        if(isNaN(equationCharsOnly[i])){
            operatorPos.push(counter)
            counter++
        } else if((!isNaN(equationCharsOnly[i]))) {
            if(isNaN(equationCharsOnly[i+1])){
                counter++
            }
        }
    }

    console.log("EqChars: ", equationCharsOnly)     // <--------------
    console.log("EqOp: ", equationOperator)         // <--------------
    console.log("OpPos: ", operatorPos)             // <--------------
    
    let newEquationString = equationCharsOnly.join("")
    

    solution = eval(newEquationString) // solve the math problem

    // Create number component chunks
    for(let i = 0; i < equationCharsOnly.length; i++){
        if(isNaN(equationCharsOnly[i])){
            equationCharsOnly[i]=" "
        }
    }
    console.log("EqChars 2: ", equationCharsOnly)   // <--------------
    const tempString = equationCharsOnly.join("")
    const finalEqComp = tempString.split(" ")
    console.log("FinEqComp", finalEqComp)           // <--------------
    while(finalEqComp.indexOf("") !== -1){
        for(let i = 0; i < finalEqComp.length; i++){
            if(finalEqComp[i] === ""){
                finalEqComp.splice(i, 1)
            }
        }
    }
    
    console.log("FinEqComp 2", finalEqComp)         // <--------------

    for(let i = 0; i < equationOperator.length; i++){
        finalEqComp.splice(operatorPos[i], 0, equationOperator[i])
    }

    console.log("FinEqComp 3", finalEqComp)         // <--------------

    for(let i = 0; i < finalEqComp.length; i++){
        const divElement = document.createElement("div")
              
        switch(finalEqComp[i]){
            case "(":
                divElement.classList.add("equation-component-open-brac")
                break;
            case ")":
                divElement.classList.add("equation-component-close-brac")
                break;
            case "+":
                divElement.classList.add("equation-component-plus")
                break;
            case "-":
                divElement.classList.add("equation-component-minus")
                break;
            case "*":
                divElement.classList.add("equation-component-times")
                break;
            case "/":
                divElement.classList.add("equation-component-divide")
                break;
            default:
                divElement.classList.add("equation-component")
        }

        divElement.innerText = `${finalEqComp[i]}`
        document.getElementById("solution-display").appendChild(divElement)
    }
    
    const divEqElement = document.createElement("div")
    divEqElement.classList.add("equation-component-equal")
    divEqElement.innerText = `=`
    document.getElementById("solution-display").appendChild(divEqElement)

    const divSolElement = document.createElement("div")
    divSolElement.classList.add("equation-component-solution")
    divSolElement.innerText = `${solution}`
    document.getElementById("solution-display").appendChild(divSolElement)
    
})

/*
Part 1 (Calculation): 
    +Your first goal is to solve a simple text-based
        math problem entered in the input field
    +The problem can be add/sub/multiply/divide
    +Here are few examples: 
        "3 + 3" -> 6
        "10 - 3" -> 7
        "44 / 2" -> 22
        "2 * 8" -> 16 
    +When the 'Solve' button is clicked
        -Create a new div with the
            class 'equation-component'
            its text value should be the solution
            to the input equation
        -This element should be added as a child of 
            the `solutionDisplay` div

    Note: You can assume there will always only be 2 values, 
        both whole integers, and always a space between each 
        integer and the operator as in the above examples


Part 2 (Flex Display): 
    Then, you'll Flex your Flexbox skills!
    + Vertically stack the contents of the mainContainer
    + Center the content horizontally
    + Display all components of the equation 
        in the solutionDisplay using a horizontal Flexbox
        with `space around` each component
    
Skills: 
    Event Listeners, String Manipulation, Array Manipulation, 
Arithmetic, DOM Manipulation, Flexbox



STRETCH GOALS:
    +Accept and solve more complex problems with more than 2 inputs
    +Signal the different types of components (operator/value/solution) with different colors
    +Accept strings without spaces
    +Can you improve the overall design?
*/