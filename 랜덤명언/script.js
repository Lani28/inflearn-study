const quoteDisplayArea= document.querySelector("#quoteContainer"); //요소를 쓸때 꼭 "" 필요. 없으면 변수명을 찾음
const quote = document.querySelector("#quote"); //querySelector CSS선택자이므로 #.사용가능 
const loadingSpinner = document.getElementById("loader"); 
const favoriteQuoteList = document.getElementById("quotePic");
const nextButton = document.getElementById("nextButton");
const selectButton = document.getElementById("selectButton");

//현재 보고 있는 명언
let currentQuoteText="";

//로딩중
function showLoadingSpinner(){
    loadingSpinner.style.display = "block"; //로딩 애니메이션 표시
    quote.style.display = "none";   //명언숨김
}

//로딩숨기기
function hideLoadingSpinner(){
    loadingSpinner.style.display="none";
    quote.style.display = "block";
}

//open api호출 > 온라인상의 키값데이터모음에 호출을 하면 백엔드에서 프론트로 데이터를 넘겨받을 수 있다. 
async function fetchKoreaQuotes() {
    showLoadingSpinner();
    const apiUrl = "https://korean-advice-open-api.vercel.app/api/advice";
    try{
        //get으로 요청해서 명언을 랜덤으로 가지고 옴
        const response = await fetch(apiUrl);
        //json()함수는 일반텍스트를 json형태로 변환시킨다. .txt확장자를 .json 확장자로 변환해줌
        const data = await response.json();
        //명언저장
        currentQuoteText = data.message;
        //키값,val값을 가져와서 웹브라우저 클라이언트 프론트엔드 공간에 저장시킴. 브라우저를 종료해도 데이터 제거가 안된다. 
        localStorage.setItem("quote",currentQuoteText);
        quote.innerText = currentQuoteText;
    }catch(error){
        console.log("에러발생");
        quote.innerText = "명언을 불러올 수 없습니다.";
    }
    hideLoadingSpinner();
}

//즐겨찾기 추가
function saveFavoriteQuote(){
    const storedQuote = localStorage.getItem("quote");
    //로컬스토리지엔 명언 존재, 즐겨찾기명언에 없을 때
    if (storedQuote !== null && !isQuoteAlreadyInList(storedQuote)){
        const listItem = document.createElement("li");
        //li태그에 로컬스토리지 명언을 텍스트로 저장
        listItem.innerText=storedQuote;
        favoriteQuoteList.appendChild(listItem);
        isQuoteSaved = true; //최종저장 두개다
    }else{
        alert("이 명언은 이미 즐겨찾기에 저장되었습니다.")
    }
}

//즐겨찾기에 없는 것만 추가
function isQuoteAlreadyInList(quote){
    const listItem = favoriteQuoteList.getElementsByTagName("li");

    for (item of listItem){
        if(item.innerText === quote){
            return true;
        }
    }
    return false;
}

//다음 버튼 클릭시 새로운 명언 생성
nextButton.addEventListener("click",  fetchKoreaQuotes);
//선택버튼 클릭시 즐겨찾기 추가
selectButton.addEventListener("click", saveFavoriteQuote);

//페이지 새로고침시 첫 명언 로드
fetchKoreaQuotes();