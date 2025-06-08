//기능이 필요한 요소 DOM 연결시킴
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");    
// 버튼들을 리스트 형태로 저장한다. 

const operatorRegular = /^(\d+|\*\*|[+\-*/])$/; // 사칙연산자(+,-,*,/)를 구별하게 해주는 정규표현식
const numberRegular = /[0-9]/g; //숫자구별 정규식

//input태그 화면에 숫자나 연산자 표기하도록
function appendToScreen(value){
    screen.value += value;
 }

//화면초기화
function cleanScreen(){
    screen.value="";
}

//연산수행
function calculate(operator,numbers){
    const [num1,num2] = numbers.map(Number);  //numbers안의 텍스트 배열데이터들을 숫자화 시켜서 변수에 담는다. 
    
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;    
        case "*":
            return num1 * num2;
        case "/":
            return num2 !==0 ? num1 / num2 : "ERR"; //0으로 나누는 경우에 에러 출력
        default:
            return "";    
    }
}

//버튼 누를때 동작을 처리 (실행)
function handleButtonClick(event){
    event.preventDefault(); //새로고침 방지 > 화면 안날아가게 

    const buttonText = event.target.innerText;  //누른 버튼 안의 글자를 가져옴
    //console.log(event);
    if(numberRegular.test(buttonText)==true){
        appendToScreen(buttonText);
    }else if(operatorRegular.test(buttonText)==true){
        appendToScreen(buttonText);
    }
}

//버튼 클릭 이벤트 리스너 등록 (연결)
function initializeButtonListners(){
    buttons.forEach((button)=>{
        button.addEventListener("click",handleButtonClick);
    });
}

//화면에 계산결과 표시
function handleResultClick(){
    const screenValue = screen.value;   // 9+2 이런식으로 append해서 표출되는 값이 저장되어있음
   
    // if(screenValue.includes("+")){
    //     const [num1,num2] =  screenValue.split("+");
    //     screen.value= calculate("+",[num1,num2]);
    // }else if(screenValue.includes("-")){
    //     const [num1,num2] =  screenValue.split("-");
    //     screen.value= calculate("-",[num1,num2]);
    // }else if(screenValue.includes("*")){
    //     const [num1,num2] =  screenValue.split("*");
    //     screen.value= calculate("*",[num1,num2]);
    // }else if(screenValue.includes("/")){
    //     const [num1,num2] =  screenValue.split("/");
    //     screen.value= calculate("/",[num1,num2]);
    // }
    
    //코드개선 : 연산자 배열 반복
    const operators = ["+", "-", "*", "/"];
    for (const op of operators) {
        if (screenValue.includes(op)) {
            const [num1, num2] = screenValue.split(op); //배열에 포함된 연산자를 기준으로 두 숫자 분리
            screen.value = calculate(op, [num1, num2]); //계산해서 결과값으로 보여짐
            break;
        }
    }
} 

//초기화버튼
document.getElementById("resetButton").addEventListener("click", function(){
    cleanScreen();
});

// =버튼 기능, 계산하기
//함수이름만 넘겨야 클릭이벤트 발생시 실행됨. handleResultClick()으로 넘기면 dom구성하면서 자동즉시실행 해버림=>클릭시 기능안함.
document.getElementById("result").addEventListener("click", handleResultClick);

//계산기 실행
initializeButtonListners();