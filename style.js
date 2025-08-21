let display=document.querySelector('#display');
let expression="";
function appendValue(num){
    expression+=num;
    display.value=expression;
}
function chooseOperator(operator){
    if (expression !=""){
        expression+=operator;
        display.value=expression;

    }
    else{
        display.value='please enter the number first'
    }
    

}
 function calculate(){
    let sol=eval(expression);
    display.value=sol;
    expression=sol;

 }
 function clearDisplay(){
    display.value = "";  
    expression = "";     

 }
 function deleteLast(){
     expression = expression.slice(0, -1);
    display.value = expression;
 }