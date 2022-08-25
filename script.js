import {Calculator} from './calculator/calculator.class.js'

const  previousOperatorValue = document.querySelector('#previous-operacoes')
const currentOperatorValue = document.querySelector('#current-operacoes')
const buttonsValue = document.querySelectorAll('#buttons-container')

// cria nova instância do Objeto Calculator
let newCalculator = new Calculator(previousOperatorValue, currentOperatorValue);


buttonsValue.forEach((button)=>{
    button.addEventListener('click',(e)=>{
       let value = e.target.innerText

       if(+value >= 0 || value === '.'){
            newCalculator.addNumber(value)
       }else{
        newCalculator.processOperation(value)
       }
    })
})


