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

    // console.log("EqChars: ", equationCharsOnly)     // <--------------
    // console.log("EqOp: ", equationOperator)         // <--------------
    // console.log("OpPos: ", operatorPos)             // <--------------
    
    let newEquationString = equationCharsOnly.join("")
    

    solution = eval(newEquationString) // solve the math problem

    // Create number component chunks
    for(let i = 0; i < equationCharsOnly.length; i++){
        if(isNaN(equationCharsOnly[i])){
            equationCharsOnly[i]=" "
        }
    }
    // console.log("EqChars 2: ", equationCharsOnly)   // <--------------

    const tempString = equationCharsOnly.join("")
    const finalEqComp = tempString.split(" ")
    // console.log("FinEqComp", finalEqComp)           // <--------------

    while(finalEqComp.indexOf("") !== -1){
        for(let i = 0; i < finalEqComp.length; i++){
            if(finalEqComp[i] === ""){
                finalEqComp.splice(i, 1)
            }
        }
    }
    
    // console.log("FinEqComp 2", finalEqComp)         // <--------------

    for(let i = 0; i < equationOperator.length; i++){
        finalEqComp.splice(operatorPos[i], 0, equationOperator[i])
    }

    // console.log("FinEqComp 3", finalEqComp)         // <--------------

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