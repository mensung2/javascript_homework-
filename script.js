//문제 1번 : 클래스가 box인 div 태그 중 클릭된 div 태그에 clicked 클래스를 추가해보세요.

document.querySelector("#container").addEventListener("click", (event) => {
  if (event.target.id === "container") {
    return;
  }

  event.target.classList.add("clicked");
});

//문제 2번:  number의 제곱을 계산하여 반환하는 함수를 작성하세요.

function getSquare(number) {
  return number ** 2;
}

const result = getSquare(5);
console.log(result);
