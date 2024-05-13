// 문제 2
document.querySelector(".btn").addEventListener("click", function(){
document.querySelector(".title").innerHTML = "제목아니다"
})

// 문제 3
// sum 함수는 num1, num2라는 파라미터를 가집니다.
// sum 함수는 파라미터로 받은 num1과 num2를 더하여 콘솔로 출력하는 함수입니다.
// - return과 console.log 중 무엇을 써야 하나? 
//  + return은 함수의 결과를 돌려주기 위해 사용되는 명령문
//  + console.log는 콘솔에 정보를 인쇄하기 위해 사용되는 명령문
// - 즉, 콘솔로 출력하라는 지문이 있었으므로 console.log를 사용하여야 한다. 

function sum(num1,num2) {
    console.log((num1+num2));
}

let sumNum1_2 = sum(3,5)

// return이 아닌 console.log를 쓰고 num1과 num2를 더하는 변수를 콘솔에 찍어(console.log(sumNum1_2);) 볼 경우, undefined가 출력된다.
// 왜냐면 콘솔에만 정보를 인쇄하기 위한 명령어이기 때문에, 실질적으로 값이 반환되어 이용 가능한 방식으로 만들어지는 게 아니기 때문!
// 실사용 시 return을 쓰겠구나~. 인지했다.

// 문제 4
// isEvenOrOdd 함수는 num이라는 파라미터를 가집니다.
// 주어진 숫자 num이 짝수인지 홀수인지 판별하여 "짝수입니다" 또는 "홀수입니다"를 출력하는 함수를 작성하세요.

function isEvenOrOdd(num) {
    if (num%2 === 0) {
        console.log("짝수입니다.")
    } else {
        console.log("홀수입니다.")
    }
}

isEvenOrOdd(20);

// %(나누기) 연산자를 사용해, 숫자를 2로 나눈 것의 나머지가 0이 나오면 짝수, 그 이외의 숫자는 홀수로 판별한다.
// 만약 실질적인 값으로 반환하고 싶다면?
// 1. return을 console.log 대신 쓰고, 아래에 숫자를 명명하는 변수를 만든 후 그걸 콘솔로 찍어야 한다.
// 2. document.write 를 쓸 수도 있지 않을까? 라고 생각했지만, 이건 아예 html 내부에 출력되어 버리는 명령어라 바로 표시할게 아니면 쓰지 않을 것 같다.

// 문제 5
// 이름과 나이를 저장할 변수를 선언하고 값을 할당하세요. 변수 이름은 알아서 정해보세요.

// 문제 의도를 정확하게 파악하지 못해서 일단 작성해 놓는다.

const name = "병수"
const age = 20

console.log("이름: "+(name));
console.log("나이: "+(age));

// 두 번째로 생각했던 건, 이런 식으로 함수를 지정해서 변수가 문자열이면 "이름 : "을, 변수가 숫자면 "나이 :" 를 하려고 했었는데, 쓰임새가 있는 건가 싶어 내일 여쭤보기로.
// function profile(submitprofile) {
//     if () {

//     }
//     if () {

//     }
// }