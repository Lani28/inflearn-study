const wrapperBox = document.getElementById("wrapper");  //단일 선택자
const inputFieldGroup = document.getElementsByClassName("inputGroup");  //클래스 전체 선택자
const allInputs = document.querySelectorAll("input");  //css선택자
const userNickname = document.getElementById("nickname");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword"); 
const confirmPw = document.getElementById("confirmPw"); 
const userPhone = document.getElementById("userPhone");
const registrationForm = document.getElementById("registrationForm"); 

//알림창 사용 
const updateHelperText = (input,message,isValid)=> {
    const inputGroup = input.parentElement; //부모선택 하위
    const helperText = inputGroup.getElementsByClassName("helperText")[0];  //알림창

    if(isValid == true){
        inputGroup.classList.remove("invalid"); 
        inputGroup.classList.add("valid"); 
        helperText.style.visibility = "hidden";
    }

    if(isValid == false){
        inputGroup.classList.remove("valid"); 
        inputGroup.classList.add("invalid"); 
        helperText.style.visibility = "visible";
        helperText.innerText = message;
    }
};

//알림이 사용될 조건 
//입력값이 공백인지 체크
const checkEmptyInput = (input) => {
    //띄어쓰기 제거
    if(input.value.trim() === ''){
        updateHelperText(input, "값을 입력해 주세요.", false);
        return false;
    }else{  //입력값이 있으면 도움말 출력 안함
        updateHelperText(input,"",true);
        return true;
    }
}

//이메일 정규식 확인
const validEmailFormat = (input)=>{
    const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // ^ / $ : 입력 시작과 종료
    // [0-9a-zA-Z] : 숫자, 영어소문자, 영어대문자로 시작
    // ([-_.]?[0-9a-zA-Z])*- [-_.]? : '-_.' 특수문자는 없거나 하나만 포함 가능
    // [0-9a-zA-Z]) : 숫자, 영어소문자, 영어대문자가 있거나 없거나, 여러개 가능
    // *@ :무조건 골뱅이 포함
    // .[a-zA-Z]{2,3} : . 다음에 영어소문자와 영어대문자가 2개 or 3개 가능
    // /i : 대소문자 구분 X
    
    if(emailPattern.test(input.value.trim()) == true){
        updateHelperText(input,"",true);
        return true;
    }else{
        updateHelperText(input,"유효한 메일주소가 아닙니다.",false);
        return false;
    }
}

//비밀번호 8자 이상 체크
const checkPasswordStrength = (password)=> { 
    const strongPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

    if(strongPattern.test(password.value)==true){
        updateHelperText(password,"적합한 비밀번호",true);
        return true;
    }else{
        updateHelperText(password,"비밀번호는 8자 이상 문자,숫자,특수문자 포함입니다.",false);
        return false;
    }
}

//비밀번호 일치 체크
const validatePasswordMatch = (passwordInput,confirmInput) => {
    if(passwordInput.value !== confirmInput.value){
        updateHelperText(confirmInput,"비밀번호가 일치하지 않습니다.",false)
        return false;
    }else{
        updateHelperText(confirmInput,"",true)
        return true;
    }
}

//핸드폰번호 체크  
const validatePhoneNumber = (input) => {
    const PhonePattern = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
    if(PhonePattern.test(input.value.trim())==true){
        updateHelperText(input, "",true);
        return true;
    }else{
        updateHelperText(input,"전화번호 형식이 다릅니다.",false);
        return false;
    }
}

//폼 제출시 값이 유효한지 체크
const validateForm = ()=> {
    const isNicknameValid = checkEmptyInput(userNickname);
    const isEmailValid = validEmailFormat(userEmail);
    const isPhoneValid = validatePhoneNumber(userPhone);
    const isPasswordStrong = checkPasswordStrength(userPassword);
    const isPasswordMatch = validatePasswordMatch(userPassword,confirmPw);

    return isNicknameValid&&isEmailValid&&isPasswordMatch&&isPasswordStrong&&isPhoneValid;
}

//버튼을 눌러서 제출 시 발생하는 event(기능)가 실행할 때, 새로고침을 막는 것. 콘솔의 데이터가 날아가기 때문에 유효성 검사가 불가능 해지므로. 
registrationForm.addEventListener("submit",(event)=>{
    event.preventDefault(); //새로고침 정지

    if(validateForm()==true){
        alert("가입완료");
        registrationForm.reset();   //입력값 클리어 시켜줌
    }else{
        alert("에러실패");
    }
    console.log(event);
});

//각 인풋에 포커스일 때 시각적변화
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input",()=>{
        switch(input.id){
            case 'nickname':
                checkEmptyInput(input);
                break;
            case 'userEmail':
                validEmailFormat(input);
                break;    
            case 'userPassword':
                checkPasswordStrength(input);
                break;    
            case 'confirmPw':
                validatePasswordMatch(userPassword,confirmPw);
                break;    
            case 'userPhone':
                validatePhoneNumber(input);
                break;    
        }
    });
});