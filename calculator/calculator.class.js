//classe objeto Calculator
 //classe objeto Calculator
class Calculator{
    constructor(previousOperatorValue, currentOperatorValue) {
        this.previousOperatorValue = previousOperatorValue
        this.currentOperatorValue = currentOperatorValue
        this.currentOperation = ''
    }
    //métodos

    //add number digitado à tela da calculadora
    addNumber(number){
        if(number === '.' && this.currentOperatorValue.innerText.includes('.')){
            return
        }
        this.currentOperation = number
        this.updateScreen()
    }

    //processa todas operações da calculadora
    processOperation(operation){
        //checkar se valor atual está vazio
        if(this.currentOperatorValue.innerText === '' && operation !== 'C'){
            //change operation
            if(this.previousOperatorValue.innerText !== ""){
               this.changeOperation(operation) 
            }
            return
        }
        //pegar valores atuais e anteriores
        let operationValue
        let previous = +this.previousOperatorValue.innerText.split(" ")[0]
        let current =  +this.currentOperatorValue.innerText

        switch(operation){
            case '+':
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
             break;
            case  '-':
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
            break;
            case  '/':
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
            break;
            case  '*':
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
            break;
            case  'DEL':
                this.delOperation()
            break;
            case  'CE':
                this.clearOperation()
            break;
            case  'C':
                this.clearAllOperation()
            break;
            case  '=':
                this.equalOperation()
            break;
            default:
             return;
        }
    }

    //muda os valores da tela da calculadora
    updateScreen(operationValue = null, operation = null, current = null, previous = null){
        if(operationValue === null){
            this.currentOperatorValue.innerText += this.currentOperation
        } else {
            //checa se valo é zero,se for add valor atual
            if(previous === 0){
                operationValue = current
            }

            // add current value to previous
            this.previousOperatorValue.innerText = `${operationValue} ${operation}`
            this.currentOperatorValue.innerText= ''
        
        }
    }
    //mudar operação
    changeOperation(operation) {
        const calcOperations = ['*','/','+','-']
        if(!calcOperations.includes(operation)){
            return
        }
        this.previousOperatorValue.innerText = 
            this.previousOperatorValue.innerText.slice(0, -1 )+ operation
    }

    //delete o ultimo digito 
    delOperation(){
        this.currentOperatorValue.innerText = this.currentOperatorValue.innerText.slice(0, -1)
    }
    //limpa operação
    clearOperation(){
        this.currentOperatorValue.innerText = ''
    }
    //limpa todas as operações
    clearAllOperation(){
        this.currentOperatorValue.innerText = ''
        this.previousOperatorValue.innerText = ''
    }
    equalOperation(){
        const operation = this.previousOperatorValue.innerText.split(" ")[1]
        this.processOperation(operation);
    }
}

export {Calculator}